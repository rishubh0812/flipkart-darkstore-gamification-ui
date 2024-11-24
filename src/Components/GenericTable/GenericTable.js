import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { styled } from "@mui/system";

// Styled components
const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "#ffffff",
});

const StyledTableHead = styled(TableHead)({
  backgroundColor: "#f5f7fa",
});

const StyledTableCellHead = styled(TableCell)({
  fontWeight: "600",
  color: "#606f7b",
  textTransform: "capitalize",
  fontSize: "14px",
  padding: "12px 16px",
});

const StyledTableCellBody = styled(TableCell)(({ isLastRow }) => ({
  borderBottom: isLastRow ? "none" : "1px solid #eaeaea",
  fontSize: "14px",
  padding: "14px 16px",
  color: "#333",
}));

const StyledTableRow = styled(TableRow)(({ isLastRow }) => ({
  "&:hover": { backgroundColor: isLastRow ? "transparent" : "#f9f9f9" },
}));

const GenericTable = ({ columns, data }) => {
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  // Handle page change
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 7));
    setPage(0); // Reset to the first page
  };

  // Get the current slice of rows to display
  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <StyledTableHead>
          <TableRow>
            {columns.map((column) => (
              <StyledTableCellHead key={column.field} align={column.align || "center"}>
                {column.headerName}
              </StyledTableCellHead>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <StyledTableRow
              key={rowIndex}
              isLastRow={rowIndex === paginatedData.length - 1}
            >
              {columns.map((column) => (
                <StyledTableCellBody
                  key={column.field}
                  isLastRow={rowIndex === paginatedData.length - 1}
                  align={column.align || "center"}
                >
                  {column.render ? column.render(row) : row[column.field]}
                </StyledTableCellBody>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={7}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </StyledTableContainer>
  );
};

export default GenericTable;
