import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import VideoIcon from '@mui/icons-material/OndemandVideo';
import MagazineIcon from '@mui/icons-material/ChromeReaderMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/Header.css';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'green', boxShadow: 'none' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Button 
          sx={{ 
            backgroundColor: 'black', 
            color: 'white', 
            borderRadius: '10px',
            '&:hover': { backgroundColor: 'grey' }, 
            transform: 'scale(0.8)',
            '.MuiButton-startIcon': { marginLeft: 0 }
          }} 
          startIcon={<VideoIcon sx={{color: 'green', marginLeft: 0 }}/>}>
          Video
        </Button>
        <Button 
          sx={{ 
            backgroundColor: 'black', 
            color: 'white',  
            borderRadius: '10px',
            '&:hover': { backgroundColor: 'grey' },
            transform: 'scale(0.8)',
            '.MuiButton-startIcon': { marginLeft: 0 } 
          }}
          startIcon={<MagazineIcon sx={{color: 'green', marginLeft: 0 }}/>}>
          eMagazine
        </Button>
        <IconButton
          sx={{ 
            backgroundColor: 'black', 
            color: 'white', 
            transform: 'scale(0.8)',
            '&:hover': { backgroundColor: 'grey' } 
          }}>
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{ 
            backgroundColor: 'black', 
            color: 'white', 
            transform: 'scale(0.8)',
            '&:hover': { backgroundColor: 'grey' } 
          }}>
          <SearchIcon />  
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
