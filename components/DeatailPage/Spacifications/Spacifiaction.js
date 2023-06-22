import { Box, Typography } from "@mui/material";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
  


export function Spacification() {
    return (
        <>
        <Box sx={{marginTop:5}}>
            <Box sx={{height: 40, borderBottom: "1px solid #abb8c3"}}>
            <Typography sx={{fontSize: 20, fontWeight: "bold", width: 200, borderBottom: "5px solid #f78da7", textAlign: "center", paddingY: 0.4}}>Specification</Typography>
            </Box>
            <Box sx={{marginTop: 5}}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, border:"1px solid #abb8c3" }} aria-label="simple table">
        <TableHead border="1px solid #abb8c3">
          <TableRow border="1px solid #abb8c3">
            <TableCell sx={{width: 110, backgroundColor: "#e8e8e8",borderRight:"1px solid #abb8c3"}} >color</TableCell>
            <TableCell align="start" >Black, White</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
            border="1px solid #abb8c3"
            >
              <TableCell align="start" sx={{width: 110, backgroundColor: "#e8e8e8",borderRight:"1px solid #abb8c3"}} >sound-stype</TableCell>
              <TableCell align="start">Ear Hook</TableCell>
            </TableRow>
            <TableRow
            border="1px solid #abb8c3"
            >
              <TableCell align="start" sx={{width: 110, backgroundColor: "#e8e8e8",borderRight:"1px solid #abb8c3"}} >sound-stype</TableCell>
              <TableCell align="start">Ear Hook</TableCell>
            </TableRow>
            <TableRow
            border="1px solid #abb8c3"
            >
              <TableCell align="start" sx={{width: 110, backgroundColor: "#e8e8e8",borderRight:"1px solid #abb8c3"}} >sound-stype</TableCell>
              <TableCell align="start">Ear Hook</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
            </Box>

        </Box>
        </>
    )
}