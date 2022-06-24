import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import InputAdornment from "@mui/material/InputAdornment";

export function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  function loginData() {
    fetch("https://624a7f84fd7e30c51c0e48a5.mockapi.io/profile")
      .then((data) => data.json())
      .then((data1) => {
        //   const userData=data1.filter((user)=>user.rollNumber===userName&&user.password===userPassword)
        data1.map((element) => {
          if (
            element.rollNumber === userName &&
            element.password === userPassword 
        
          ) {
            navigate("/Dashboardlayout/" + element.id);
          }
        else {
            setError(true);
            //console.log("username and password incorrect");
          }
        });
      });
  }
  return (
    <>
     
         <div className="page-title text-center">Sign In</div>
          <div className="d-flex justify-content-center">
          <TextField
          label="Roll Number"
          type="text"
          id="outlined-start-adornment"
          sx={{ m: 1, }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setUserName(e.target.value)}
        />
          </div>
      <div className="d-flex justify-content-center">
      <TextField
          label="Password"
          type="password"
          id="outlined-start-adornment"
          sx={{ m: 1,}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <KeyIcon />
              </InputAdornment>
            ),
          }}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      
        <div  className="d-flex justify-content-center">
          <Button
            variant="contained"
            sx={{ m: 1, width: "13ch" }}
            onClick={loginData}
            className="signin"
          >
            Sign in
          </Button>
        </div>

        {error === true ? (
          <p className="login-error d-flex justify-content-center">invalid rollnumber and password!</p>
        ) : (
          " "
        )}
        <p className="login-hint d-flex justify-content-center">
          login-hint:(rollnumber:Std-1000,password:123)
          <a
            href="https://624a7f84fd7e30c51c0e48a5.mockapi.io/profile"
            target="_blank"
          >
            click to get user details
          </a>
        </p>
    
    </>
  );
}
