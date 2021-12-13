import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  Link } from "react-router-dom";

export default function Header() {
  const headerStyle = {
    color : "white"
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link style={{textDecoration: "None"}} to="/"><Button color="inherit">  <Typography style={headerStyle}  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          HomePage
          </Typography></Button></Link>
          <Link style={{textDecoration: "None"}} to="/About"><Button color="inherit">  <Typography style={headerStyle} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          About
          </Typography></Button></Link>
          <Link style={{textDecoration: "None"}} to="/Search"><Button color="inherit">  <Typography style={headerStyle} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Search
          </Typography></Button></Link>

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}