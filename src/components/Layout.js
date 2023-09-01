import React from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import logopng from '../logos.png'
import {styled} from '@mui/system'
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
const darkTheme =createTheme({
    palette:{
        mode:'light'
    }
})
const Img = styled('img')({
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'auto',
    width: 120,
    height:100,
})


const LayoutWrapper = styled('div')(({ theme }) => ({
  margin: 'auto', 
  width: 'auto', 
  [theme.breakpoints.up("lg")]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: theme.breakpoints.values.lg
  }
}));

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <LayoutWrapper>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link to='/'>
            <Img src ={logopng}></Img>
          </Link>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Flix Net Movies
          </Typography>
          <Button component={NavLink} to="/" color="inherit">
          Trending
        </Button>
        <Button component={NavLink} to="/upcomingmovies" color="inherit">
          Upcoming
        </Button>

        </Toolbar>
      </AppBar>
    </Box>
{children}
</LayoutWrapper>
        </ThemeProvider>

    );
};

export default Layout;