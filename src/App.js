import React, { Component } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import { Box, ButtonGroup, Checkbox } from "@mui/material";


import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';



class App extends React.Component {
  render() {
    return (
      <>
        <h2>Text Button</h2>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="https://google.com">Link</Button>
        <Button variant="contained">login</Button>
        <br />
        <Button variant="contained" disableElevation>
          Disable elevation
        </Button>
        <h3>button size</h3>
        <Button variant="contained" size="large">
          Large
        </Button>
        <Button color="secondary" variant="contained" size="small">
          Small
        </Button>
        <h3>button with icons</h3>
        <Button  variant="contained"  color="secondary"  startIcon={<DeleteIcon />}>Delete  </Button>
         
        <Button size="large"   variant="outlined" endIcon={<SendIcon />}>Send </Button>
    
     
        <h3>icon button</h3>
        <IconButton variant="contained" color="secondary" size="large">
          <SendIcon />
        </IconButton>
        <h3>custom button</h3>
        <Button variant="contained"  style={{backgroundColor:"red"}}>custom</Button>
         <h3> ButtonGroup</h3> 
          <ButtonGroup orientation="vertical" variant="contained" color="primary" size="large">
            <Button>Alpha</Button>
            <button >Beta</button>
            <Button>Gama</Button>

          </ButtonGroup>
          <h3>floating action bubble</h3>
         
          <Fab color="primary"><AddIcon/></Fab>
          <Fab color="secondary"><EditIcon/></Fab>
          <Fab color="extended"><NavigationIcon/></Fab>
          <Fab disabled><FavoriteIcon/></Fab>        
        <h3>checkbox</h3>
       <Checkbox checked ="true"/>
       <Checkbox checked ="true" color="secondary"/>
       <Checkbox defaultChecked indeterminate/>
       <h3>color</h3>
       <Box color="primary.main">primary</Box>

      </>
    );
  }
}
export default App;
