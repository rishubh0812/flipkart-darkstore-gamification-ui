import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";


const StyledTableContainer = styled(TableContainer)({
  borderRadius: "8px",
  border: "1px solid #e0e0e0",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const StyledTableHead = styled(TableHead)({
  backgroundColor: "#f5f7fa",
});

const StyledTableCellHead = styled(TableCell)({
  fontWeight: "600",
  fontSize: "14px",
  color: "#606f7b",
  padding: "12px 16px",
  textAlign: "center",
});

const StyledTableCellBody = styled(TableCell)({
  fontSize: "14px",
  padding: "14px 16px",
  color: "#333333",
  textAlign: "center",
});

const StyledTableRow = styled(TableRow)({
  "&:hover": {
    backgroundColor: "#f9f9f9",
  },
});

const StyledTypography = styled(Typography)({
  fontSize: "18px",
  fontWeight: "600",
  color: "#333333",
  marginBottom: "20px",
});

const DetailedStorePerformanceTable = ({data}) => {
  return (
    <div>
      <StyledTableContainer component={Paper}>
        <Table>
          <StyledTableHead>
            <TableRow>
              <StyledTableCellHead>Employee ID</StyledTableCellHead>
              <StyledTableCellHead>Type</StyledTableCellHead>
              <StyledTableCellHead>Picking time</StyledTableCellHead>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {data.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCellBody>{row.employeeId}</StyledTableCellBody>
                <StyledTableCellBody>{row.type}</StyledTableCellBody>
                <StyledTableCellBody>{row.pickingTime}</StyledTableCellBody>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </div>
  );
};

export default DetailedStorePerformanceTable;
