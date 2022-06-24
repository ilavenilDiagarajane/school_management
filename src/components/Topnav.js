import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 150, 136,10);",
      boxShadow: theme.shadows[1],
      fontSize: 15,
    },
  }));

export function Topnav({ userroll }) {
    const [topnavprofile, setTopnavprofile] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        fetch("https://624a7f84fd7e30c51c0e48a5.mockapi.io/profile", {
          method: "GET",
        })
          .then((response) => response.json())
          .then((profiledetails) =>
            setTopnavprofile(profiledetails.filter((ele) => ele.id === userroll))
          );
      }, []);

  return (
   
      <AppBar position="static">
        
        {topnavprofile.map((element, index) => (
        <>
        <Toolbar>
          
         <h4 className="page-title">{element.role}</h4>  
        
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         
              
         
        </Toolbar>

        </>
      ))}
      </AppBar>
    

  );
}
