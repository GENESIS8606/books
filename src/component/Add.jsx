import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = (props) => {
  var [input, setinput] = useState(props.data)
  console.log("add page props" + props.data)

  const inputHandler = (e) => {
    const { name, value } = e.target
    setinput({ ...input, [name]: value })
  }
  const readValues = () => {
    console.log("clicked")
    console.log(input);
    if (props.method === "post") {
      axios.post("http://localhost:3005/student", input)
        .then(response => {
          console.log("post data" + response.data)
          alert("success")
        })
        .catch((err) => {
          console.log(err)
        })
      }

    else if (props.method === "put") {
      axios.put("http://localhost:3005/student/" + input.id, input)
        .then((response) => {
          console.log("put data" + response.data)
          alert("success")
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  return (
    <div>
      <Typography variant='h3' color='primary'>ADD BOOK DETAILS</Typography><br></br>

      <TextField label='Enter Genre' name='genre' value={input.genre} onChange={inputHandler} variant='outlined' 
      style={{ background: 'white', borderRadius: 5 }} /><br></br><br></br>

      <TextField label='Book Tittle' name='name' value={input.name} onChange={inputHandler} variant='outlined' 
      style={{ background: 'white', borderRadius: 5 }} /><br></br><br></br>

      <TextField label='Author Name' name='author' value={input.author} onChange={inputHandler} variant='outlined' 
      style={{ background: 'white', borderRadius: 5 }}/><br></br><br></br>

      <TextField label='Published Date' name='pubD' value={input.pubD} onChange={inputHandler} variant='outlined' 
      style={{ background: 'white', borderRadius: 5 }} /><br></br><br></br>

      <TextField label='Published By' name='pubB' value={input.pubB} onChange={inputHandler} variant='outlined' 
      style={{ background: 'white', borderRadius: 5 }} /><br></br><br></br>


      <Button variant="contained" onClick={readValues} color='success'>SUBMIT</Button>
    </div>
  )
}
export default Add
