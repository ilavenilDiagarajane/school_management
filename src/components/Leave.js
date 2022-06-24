import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



export function Leave() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [userdetails, setUserDetails] = useState();
  const [days, setdays] = useState("");
  const [fromdate, setFromdate] = useState("");
  const [todate, setTodate] = useState("");
  const [reason, setreason] = useState("");
  const [status, setsatus] = useState("pending");

  const Styles = { display: days === "2" ? " " : "none" };
  useEffect(() => {
    fetch(`https://624a7f84fd7e30c51c0e48a5.mockapi.io/profile/${id}`)
      .then((response) => response.json())
      .then((result) => setUserDetails(result));
    leavelistfun();
  }, []);

  function leaveapply() {
    const leaveapllydata = {
      rollNumber: userdetails.rollNumber,
      name: userdetails.name,
      fromdate: fromdate,
      todate: todate,
      reason: reason,
      status: status,
      leaveid: id,
    };
    fetch("https://624a7f84fd7e30c51c0e48a5.mockapi.io/leave", {
      method: "POST",
      body: JSON.stringify(leaveapllydata),
      headers: { "Content-Type": "application/json" },
    })
      .then((e) => e.json())
      .then(() => leavelistfun());
  }
  const [leavelist, setLeavelist] = useState([]);

  function leavelistfun() {
    fetch("https://624a7f84fd7e30c51c0e48a5.mockapi.io/leave")
      .then((e) => e.json())
      .then((res) =>
        setLeavelist(res.filter((result) => result.leaveid === id))
      )
      .catch((err) => console.log("data not found"));
  }

  function deleteleave(id) {
    fetch(`https://624a7f84fd7e30c51c0e48a5.mockapi.io/leave/${id}`, {
      method: "DELETE",
    })
      .then((e) => e.json())
      .then(() => leavelistfun());
  }

  return (
    <>
   
      <div className="row">
        <h3 className="page-title mt-2">Leave Application</h3>
        <div className="col-lg-6">
          <div className="row mx-5 mt-3">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={days}
                onClick={(e) => setdays(e.target.value)}
              >
                <div className="leave-radio-btn">
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label="one day"
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="More than"
                  />
                </div>
              </RadioGroup>
            </FormControl>
          </div>

          <div className="row  mx-5 mt-3">
            <div className="col-lg-6">
              {" "}
              <span>From:</span>
              <input
                type="date"
                className="form-control"
                placeholder="to Date"
                onChange={(e) => setFromdate(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              {" "}
              <span style={Styles}>To:</span>
              <input
                style={Styles}
                type="date"
                className="form-control"
                placeholder="from Date"
                onChange={(e) => setTodate(e.target.value)}
              />
            </div>
          </div>

          <div className="row  mx-5 mt-3">
            <span>Reason:</span>
            <textarea
              className="form-control"
              rows="3"
              onChange={(e) => setreason(e.target.value)}
            ></textarea>
          </div>
          <div className="mx-5 mt-3">
          <Button variant="contained" onClick={leaveapply}>
            Apply
          </Button>
          </div>
        </div>
        <div className="col-lg-6">
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
      {leavelist.length!=0? <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >RollNumber</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >from</TableCell>
            <TableCell >To</TableCell>
            <TableCell >reason</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>:" "}
        <TableBody>
          {leavelist.map((e ,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {index + 1}
              </TableCell>
        
             
              <TableCell >{e.rollNumber}</TableCell>
              <TableCell >{e.name}</TableCell>
              <TableCell>{e.fromdate}</TableCell>
              <TableCell>{e.todate}</TableCell>
              <TableCell >{e.reason}</TableCell>
              <TableCell >{e.status}</TableCell>
              <TableCell >  <IconButton
                        aria-label="delete"
                        size="small"
                        color="error"
                        onClick={() => deleteleave(e.id)}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </div>
     
    </>
  );
}
