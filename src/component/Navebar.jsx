import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navebar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Book Library 
          </Typography>
            <Button color="inherit"><Link to ='/view' style={{color:"white",textDecoration:"none"}}>VIEW ALL BOOKS</Link></Button>
            <Button color="inherit"><Link to ='/add'style={{color:"white",textDecoration:"none"}}>ADD NEW BOOKS</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navebar
