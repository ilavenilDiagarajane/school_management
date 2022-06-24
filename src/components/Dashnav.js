import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ClassIcon from "@mui/icons-material/Class";
import { NavLink, useNavigate } from "react-router-dom";

import LogoutIcon from "@mui/icons-material/Logout";


import { useEffect, useState } from "react";

export function Dashnav({ userroll }) {
  
  const [topnavprofile, setTopnavprofile] = useState([]);
  const [board,setboard]=useState("student");
  useEffect(() => {
    fetch("https://624a7f84fd7e30c51c0e48a5.mockapi.io/profile", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((profiledetails) =>{
        setTopnavprofile(profiledetails.filter((ele) => ele.id === userroll))
        
      }
      );
  }, []);
  return (
    <>
      <div className=" m-3 ">
        {topnavprofile.map((element) => (
          <>
            <img
              src={element.profileImage}
              className="img-fluid nav-profile mx-4"
              alt="profile_image"
            ></img>
            <h3 className="mt-2 mx-5">{element.name}</h3>
            <Divider />
          
          </>
        ))}
      </div>
      <div>
      {topnavprofile.map((el) => (
        <MenuList>
          <MenuItem>
            <NavLink to="dashboard" className="std-sid-list m-2">
              <DashboardIcon sx={{ fontSize: 30 }} /> Dashboard
            </NavLink>
          </MenuItem>
          {el.role==="student"?   <MenuItem>
          <NavLink to="classes" className="std-sid-list  m-2">
              <ClassIcon sx={{ fontSize: 30 }} /> Daily Classes
            </NavLink>
          </MenuItem>:
          <MenuItem>
            <NavLink to="classesapply" className="std-sid-list  m-2">
              <ClassIcon sx={{ fontSize: 30 }} /> Daily Classes
            </NavLink>
          </MenuItem>}
         {el.role==="student"? <MenuItem>
            <NavLink to="leave" className="std-sid-list  m-2">
              <NoteAltIcon sx={{ fontSize: 30 }} /> Leave Application
            </NavLink>
          </MenuItem>:
          <MenuItem>
            <NavLink to="leavelist" className="std-sid-list  m-2">
              <NoteAltIcon sx={{ fontSize: 30 }} /> Leave Application
            </NavLink>
          </MenuItem>}

          <MenuItem>
            <NavLink to="profile" className="std-sid-list  m-2">
              <AccountCircleIcon sx={{ fontSize: 30 }} />
              Profile
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/" className="std-sid-list m-2">
              <LogoutIcon className="topnav-more" sx={{ fontSize: 30 }} />
              Logout
            </NavLink>
          </MenuItem>
        </MenuList>
          ))}
      </div>
    </>
  );
}
