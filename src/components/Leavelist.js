import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
export function Leavelist() {
  const [stdleavelist, setStdeavelist] = useState([]);

  useEffect(() => {
    studentleavelist();
  });

  function studentleavelist() {
    fetch("https://624a7f84fd7e30c51c0e48a5.mockapi.io/leave")
      .then((e) => e.json())
      .then((res) => setStdeavelist(res))

      .catch((err) => console.log("data not found"));
  }

  function accept(id) {
    const data = stdleavelist.filter((e) => e.id === id);

    const leaveapllydata = {
      rollNumber: data[0].rollNumber,
      name: data[0].name,
      fromdate: data[0].fromdate,
      todate: data[0].todate,
      reason: data[0].reason,
      status: "Accept",
      leaveid: data[0].leaveid,
    };
    fetch(`https://624a7f84fd7e30c51c0e48a5.mockapi.io/leave/${id}`, {
      method: "PUT",
      body: JSON.stringify(leaveapllydata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => studentleavelist());
  }
  function reject(id) {
    const data = stdleavelist.filter((e) => e.id === id);
    const leaveapllydata = {
      rollNumber: data[0].rollNumber,
      name: data[0].name,
      fromdate: data[0].fromdate,
      todate: data[0].todate,
      reason: data[0].reason,
      status: "Rejected",
      leaveid: data[0].leaveid,
    };
    fetch(`https://624a7f84fd7e30c51c0e48a5.mockapi.io/leave/${id}`, {
      method: "PUT",
      body: JSON.stringify(leaveapllydata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => studentleavelist());
  }

  return (
    <div className="row">
      <h3 className="page-title">Student Leave List</h3>

      <div className="col-lg-8">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {stdleavelist.map((e, index) =>
                e.status === "pending" ? (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{e.rollNumber}</TableCell>
                    <TableCell>{e.name}</TableCell>
                    <TableCell>{e.fromdate}</TableCell>
                    <TableCell>{e.todate}</TableCell>
                    <TableCell>{e.reason}</TableCell>
                    <TableCell>{e.status}</TableCell>
                    <TableCell>
                      {" "}
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        onClick={() => accept(e.id)}
                      >
                        Accept
                      </Button>{" "}
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Button
                        size="small"
                        color="error"
                        variant="contained"
                        onClick={() => reject(e.id)}
                      >
                        Reject
                      </Button>
                    </TableCell>
                  </TableRow>
                ) : (
                  " "
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
