import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import Button from '@mui/material/Button';
import{useState} from "react";

const ColorButton = styled(ToggleButtonGroup)(({ theme }) => ({
    color: theme.palette.getContrastText(teal[500]),
    backgroundColor: teal[500],
    "&:hover": {
      backgroundColor: teal[700],
    },
  }));

//layoutcomponent
export function Layout() {
    const[title,setitle] = useState("Sign In")
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-1"></div>
          <div className="col-lg-10">
            <Paper elevation={16} className="m-5">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="mt-5 mx-4 text-center fw-bold ">
                  Welcome {title} Page
                  </h1>
                  <p className="text-center">
                    The mind is not a vessel to be filled but a fire to be
                    ignited.
                  </p>
                  <img src="https://media.istockphoto.com/vectors/woman-with-laptop-sitting-in-nature-and-leaves-concept-illustration-vector-id1139913278?k=20&m=1139913278&s=612x612&w=0&h=Ue0Nh74fYCnNd5hfwBCLwJ2VeZqjXxnI5iEXqqTLXb8=" class="img-thumbnail" alt="layoutimg"></img>
                </div>
                <div className="col-lg-6">
                  <div className="row mt-5">

                    <Button exclusive>
                      <ToggleButton value="signin" sx={{ width: "15ch" }}>
                        <NavLink
                          to="/login"
                          className="layout-link"
                          onClick={() => setitle("Sign In")}
                        >
                          Sign In
                        </NavLink>
                      </ToggleButton>
                      <ToggleButton value="signout" sx={{ width: "15ch" }}>
                        <NavLink
                          to="/register"
                          className="layout-link"
                          onClick={() => setitle("Sign Up")}
                        >
                          Sign Up
                        </NavLink>
                      </ToggleButton>
                    </Button>
                  </div>
                  <div  className="mt-3">
               
                 <Outlet />
                 
                  </div>
                </div>
              </div>
            </Paper>
          </div>
          <div className="col col-lg-1"></div>
        </div>
      </div>
    </>
  );
}
