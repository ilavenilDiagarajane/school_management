import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { useState } from "react";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  "&:hover": {
    backgroundColor: teal[700],
  },
}));
export function Classesapply() {
  const [tdate, settdate] = useState("");
  const [fromtime, setFromtime] = useState("");
  const [totime, setTotime] = useState("");
  const [subject, setSubject] = useState("");
  function classapply() {
    const classdetails = {
      tdate,
      fromtime,
      totime,
      subject,
    };

    fetch("https://624a7f84fd7e30c51c0e48a5.mockapi.io/class",{method:"POST",
    body:JSON.stringify(classdetails),
    headers:{"Content-Type": "application/json"
}
}).then((e)=> e.json()).then(()=>window.location.replace("dashboardstd"))

    console.log(classdetails);
  }
  return (
    <div>
      <h3 className="page-title">Class Assign Application</h3>
      <div className="row mt-3">
          <div className="col-lg-4 mx-3 mt-3">
          <span>Date:</span>
        <input
          type="date"
          className="form-control"
          placeholder=" Date"
          onChange={(e) => settdate(e.target.value)}
        />
          </div>
          <div className="col-lg-4 mx-3  mt-3">
        <span>From Time:</span>
        <input
          type="time"
          className="form-control"
          placeholder="time"
          onChange={(e) => setFromtime(e.target.value)}
        />
          </div>
          <div className="col-lg-4 mx-3 mt-3">
        <span>TO Time:</span>
        <input
          type="time"
          className="form-control"
          placeholder="time"
          onChange={(e) => setTotime(e.target.value)}
        /></div>
         <div className="col-lg-4 mx-3  mt-3">

        <span>Subject:</span>
        <input
          type="text"
          className="form-control"
          placeholder=" enter the subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        </div>
        <div className="col-lg-4 mx-3  mt-3">
        <Button
          variant="contained"
          className="signin"
          onClick={classapply}
        >
          save
        </Button>
      </div>
      </div>
    </div>
  );
}
