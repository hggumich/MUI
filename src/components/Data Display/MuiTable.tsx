import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Rochester",
    last_name: "Jados",
    email: "rjados0@army.mil",
    gender: "Male",
    ip_address: "182.235.173.241",
  },
  {
    id: 2,
    first_name: "Sephira",
    last_name: "Scalera",
    email: "sscalera1@elpais.com",
    gender: "Female",
    ip_address: "143.77.21.8",
  },
  {
    id: 3,
    first_name: "Helga",
    last_name: "Tither",
    email: "htither2@hatena.ne.jp",
    gender: "Female",
    ip_address: "223.33.129.227",
  },
  {
    id: 4,
    first_name: "Levin",
    last_name: "Sherrum",
    email: "lsherrum3@bloglovin.com",
    gender: "Male",
    ip_address: "219.204.106.193",
  },
  {
    id: 5,
    first_name: "Chandra",
    last_name: "Amies",
    email: "camies4@php.net",
    gender: "Female",
    ip_address: "235.123.146.152",
  },
  {
    id: 6,
    first_name: "Felice",
    last_name: "Domsalla",
    email: "fdomsalla5@zimbio.com",
    gender: "Male",
    ip_address: "175.240.133.152",
  },
  {
    id: 7,
    first_name: "Quintana",
    last_name: "Nucciotti",
    email: "qnucciotti6@php.net",
    gender: "Female",
    ip_address: "149.109.7.159",
  },
  {
    id: 8,
    first_name: "Averill",
    last_name: "Sutherden",
    email: "asutherden7@google.es",
    gender: "Male",
    ip_address: "80.238.222.241",
  },
  {
    id: 9,
    first_name: "Malchy",
    last_name: "Segrott",
    email: "msegrott8@loc.gov",
    gender: "Male",
    ip_address: "218.47.241.238",
  },
  {
    id: 10,
    first_name: "Cherish",
    last_name: "Alyokhin",
    email: "calyokhin9@flavors.me",
    gender: "Female",
    ip_address: "80.241.49.41",
  },
];
