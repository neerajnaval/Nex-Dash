import {useEffect} from 'react';
import axios from './axios'

import {
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  makeStyles
} from "@mui/material";
import { useState } from "react";



const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));


const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [room,setRoom] =useState([])
  useEffect(()=>{
    axios.get('/room')
    .then(response => {
      setRoom(response.data)
    })
  },[]);

  console.log('Room_Data', room);


  
  return (
    <Box width="200%" display="block" overflow-x="auto" scrollX="true">
      <StyledTable  >
        <TableHead>
          <TableRow>
            <TableCell align="left" >First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Company Email</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Email Status</TableCell>
            <TableCell align="center">Seniority</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Personal Phone</TableCell>
            <TableCell align="center">Company Phone</TableCell>
            <TableCell align="center">Employee</TableCell>
            <TableCell align="center">Industry</TableCell>
            <TableCell align="center">Person Linkedin Url</TableCell>
            <TableCell align="center">Website</TableCell>
            <TableCell align="center">Company Linkedin Url</TableCell>
            <TableCell align="center">Company Country</TableCell>
            <TableCell align="center">Annual Revenue</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {room
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((Room_Data, index) => (
              <TableRow key={index}>
                <TableCell align="left" >{Room_Data.first_Name}</TableCell>
                <TableCell align="center">{Room_Data.Last_Name}</TableCell>
                <TableCell align="center">{Room_Data.Title}</TableCell>
                <TableCell align="center">{Room_Data.Company_Name_for_Email}</TableCell>
                <TableCell align="center">{Room_Data.Email}</TableCell>
                <TableCell align="center">{Room_Data.Email_Status}</TableCell>
                <TableCell align="center">{Room_Data.Seniority}</TableCell>
                <TableCell align="center">{Room_Data.Departments}</TableCell>
                <TableCell align="center">{Room_Data.Personal_Phone}</TableCell>
                <TableCell align="center">{Room_Data.Company_Phone}</TableCell>
                <TableCell align="center">{Room_Data.Employee}</TableCell>
                <TableCell align="center">{Room_Data.Industry}</TableCell>
                <TableCell align="center">{Room_Data.Person_Linkedin_Url}</TableCell>
                <TableCell align="center">{Room_Data.Website}</TableCell>
                <TableCell align="center">{Room_Data.Company_Linkedin_Url}</TableCell>
                <TableCell align="center">{Room_Data.Website}</TableCell>
                <TableCell align="center">{Room_Data.Company_Linkedin_Url}</TableCell>
                <TableCell align="center">{Room_Data.Company_Country}</TableCell>
                <TableCell align="center">{Room_Data.Annual_Revenue}</TableCell>

              </TableRow>
            ))}
        </TableBody>
      </StyledTable>

      <TablePagination
        sx={{ px: 2 }}
        page={page}
        component="div"
        rowsPerPage={rowsPerPage}
        count={room.length}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        nextIconButtonProps={{ "aria-label": "Next Page" }}
        backIconButtonProps={{ "aria-label": "Previous Page" }}
        style={{display: "flex", alignItems: "flex-start"}}
      />
    </Box>
  );
};

export default PaginationTable;
