import { Button, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'
const View = () => {
  var[update, setUpdate] = useState(false)
  var[singleValue, setSingleValue] = useState([])
  var[books, setBooks] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3005/student")
      .then(response=>{
        setBooks(books=response.data)
        console.log(response.data)
      })
      .catch(error=>console.log(error))
  }, [])
  const updateValue=(value)=>{
    setSingleValue(value);
    setUpdate(true);
  }
  const deleteValues=(id)=>{
    console.log("delete clicked"+id)
    axios.delete("http://localhost:3005/student/"+id)
    .then((response)=>{
      console.log(response.idvalues);
      alert("sucessfully deleted");
      window.location.reload(false);
    })
  }
  var finalJSX= <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>GENRE</TableCell>
        <TableCell>BOOK TITTLE</TableCell>
        <TableCell>AUTHOR</TableCell>
        <TableCell>PUBLISHED DATE</TableCell>
        <TableCell>PUBLISHED BY</TableCell>
        <TableCell>UPDATE</TableCell>
        <TableCell>DELETE</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {books.map((value, index) => {
        return <TableRow>
          <TableCell>{value.id}</TableCell>
          <TableCell>{value.genre}</TableCell>
          <TableCell>{value.name}</TableCell>
          <TableCell>{value.author}</TableCell>
          <TableCell>{value.pubD}</TableCell>
          <TableCell>{value.pubB}</TableCell>
          <TableCell>
            <Button variant="contained" color='success'onClick={()=>updateValue(value)} >
             UPDATE
            </Button>
            </TableCell>
          <TableCell>
            <Button variant="contained" color='error' onClick={()=>deleteValues(value.id)} >
              DELETE
            </Button>
          </TableCell>
        </TableRow>
      })}
    </TableBody>
  </Table>
</TableContainer>
if (update)
 finalJSX=<Add data={singleValue}method="put"/>
  return (
    <div>
      <Typography variant='h3' color='primary'>VIEW BOOK DETAILS</Typography><br></br>

         <br></br>
         <br></br>
        <br></br>
        {finalJSX}

    </div>
  )
}

export default View
