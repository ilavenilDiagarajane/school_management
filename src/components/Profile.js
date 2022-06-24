import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SchoolIcon from "@mui/icons-material/School";
import Paper from "@mui/material/Paper";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  "&:hover": {
    backgroundColor: teal[700],
  },
}));

export function Profile() {
  let { id } = useParams();
  const [profile, setprofile] = useState(null);

  useEffect(() => {
    fetch(`https://624a7f84fd7e30c51c0e48a5.mockapi.io/profile/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((profiledetails) => setprofile(profiledetails));
  }, []);

  return <>{profile ? <Editprofileform profile={profile} /> : "lodaing.."}</>;
}

function Editprofileform({ profile }) {
  const navigate = useNavigate();
  const [rollNumber, setRollNumber] = useState(profile.rollNumber);
  const [name, setName] = useState(profile.name);
  const [profileImage, setProfileImage] = useState(profile.profileImage);
  const [department, setDepartment] = useState(profile.department);
  const [college, setCollege] = useState(profile.college);
  const [gender, setGender] = useState(profile.gender);
  const [birthday, setBirthday] = useState(profile.birthday);
  const [password, setPassword] = useState(profile.password);
  const [role, setRole] = useState(profile.role);
  const [flag, setFlag] = useState("false");
  function editprofiledata() {
    const neweditData = {
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
    fetch(`https://624a7f84fd7e30c51c0e48a5.mockapi.io/profile/${profile.id}`, {
      method: "PUT",
      body: JSON.stringify(neweditData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => window.location.replace("dashboardstd"));
  }

  return (
    <>
      <div className="row">
      <h3 className="page-title">Profile Application</h3>
        <div className="col-lg-6">
          <div className="mt-5 mx-5 d-flex justify-content-center">
            <img src={profile.profileImage}></img> 
          </div>
          <div className="mt-3 mx-5 d-flex justify-content-center">
            <h3 >{profile.name}</h3>
            </div>
            <div className="mx-5 d-flex justify-content-center">
            <h5>{profile.department}</h5>
            </div>
        </div>
        <div className="col-lg-6">
        <div className="reg-form mt-5 mx-5">
        <div className="reg-box mx-3">
          <TextField
            className="textform"
            label="Roll Number"
            type="text"
            value={rollNumber}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 
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
            value={name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
               
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
            value={profileImage}
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
            value={college}
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
            value={birthday}
            variant="outlined"
            onChange={(e) => setBirthday(e.target.value)}
          />
         
        </div>
       
        <div className="reg-box mb-3 mx-3">
        <Button
          variant="contained"
          className="signin"
          onClick={editprofiledata}
        >
          Edit
        </Button>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}
