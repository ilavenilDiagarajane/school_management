import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SchoolIcon from "@mui/icons-material/School";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  "&:hover": {
    backgroundColor: teal[700],
  },
}));

export function Register() {
  const [rollNumber, setRollNumber] = useState("");
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [flag, setFlag] = useState("false");
  const navigate = useNavigate();
  function addregisterdata() {
    const newRegisterData = {
      rollNumber,
      name,
      profileImage,
      department,
      college,
      gender,
      birthday,
      password,
      role,
      flag,
    };
    fetch("https://624a7f84fd7e30c51c0e48a5.mockapi.io/profile", {
      method: "POST",
      body: JSON.stringify(newRegisterData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/"));
  }
  return (
    <>
      <div className="page-title mx-3 mb-3 text-center">Sign Up</div>
      <div className="reg-form">
        <div className="reg-box mx-3">
          <TextField
            className="textform"
            label="Roll Number"
            type="text"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <AccountBoxIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setRollNumber(e.target.value)}
          />

          <TextField
            className="textform"
            label="Name"
            type="text"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="reg-box  mx-3">
          <TextField
            className="textform"
            label="Profile Image"
            type="text"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <AddPhotoAlternateIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setProfileImage(e.target.value)}
          />
          <FormControl className="textform">
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <MenuItem value="ComputerScience">Computer Science</MenuItem>
              <MenuItem value="Mechincal">Mechincal</MenuItem>
              <MenuItem value="Civil">Civil</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="reg-box  mx-3">
          <TextField
            className="textform"
            label="College"
            type="text"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <SchoolIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setCollege(e.target.value)}
          />

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Gender
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="reg-box  mx-3">
          <TextField
            className="textform"
            label="Birthday Date"
            type="date"
            variant="outlined"
            onChange={(e) => setBirthday(e.target.value)}
          />
          <TextField
            className="textform"
            label="Password"
            type="password"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <KeyIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="reg-box mx-3">
          <FormControl className="textform">
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="teacher">Teacher</MenuItem>
              <MenuItem value="student">Student</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="reg-box mb-3 mx-3">
        <Button
          variant="contained"
          className="signin"
          onClick={addregisterdata}
        >
          save
        </Button>
        </div>
      </div>
    </>
  );
}
