import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from '@mui/material/TableHead';
import TableContainer from "@mui/material/TableContainer";

import TableRow from "@mui/material/TableRow";
 export function Classes(){
    const [classlist, setClasslist] = useState([]);
  
    useEffect(() => {
      studentleavelist();
    });
  
    function studentleavelist(){
      fetch("https://624a7f84fd7e30c51c0e48a5.mockapi.io/class")
      .then((e) => e.json())
      .then((res) => setClasslist(res))
  
      .catch((err) => console.log("data not found"));
    }
    
    return(

        <div className="row" >
        <h3 className="page-title">Daily Classes</h3>
       
        <div className="col-lg-8">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
          {classlist.length!=0? <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Date</TableCell>
            <TableCell >From Time</TableCell>
            <TableCell >To Time</TableCell>
            <TableCell >Subject</TableCell>
           
          </TableRow>
        </TableHead>:" "}
            <TableBody>
              {classlist.map((e, index) =>
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{e.tdate}</TableCell>
                    <TableCell>{e.fromtime}</TableCell>
                    <TableCell>{e.totime}</TableCell>
                    <TableCell>{e.subject}</TableCell>
                  

                  </TableRow>
                
                
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
        </div>
    )
}