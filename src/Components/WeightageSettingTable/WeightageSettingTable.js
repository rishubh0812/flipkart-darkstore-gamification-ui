import React from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button} from "@mui/material";
import {styled} from "@mui/system";
import {Typography} from "@mui/material";


const StyledTypography = styled(Typography)({
    fontSize: "22px",
    fontWeight: "600",
    color: "#333333",
    marginBottom: "30px",
    marginLeft: "5px",
});

const StyledTableContainer = styled(TableContainer)({
    borderRadius: "8px",
});

const StyledTableHead = styled(TableHead)({
    backgroundColor: "#f5f7fa", // Light gray/blue for header
});

const StyledTableCellHead = styled(TableCell)({
    fontWeight: "600",
    color: "#606f7b",
    fontSize: "14px",
    padding: "12px 16px",
    textAlign: "center",
});

const StyledTableCellBody = styled(TableCell)({
    fontSize: "14px",
    padding: "12px 16px",
    color: "#333",
    textAlign: "center",
});

const StyledTableRow = styled(TableRow)({
    "&:hover": {backgroundColor: "#f9f9f9"},
});

const WeightageSettingsTable = ({handleEditButtonClick}) => {
    const data = [
        {level: "National", subLevel: "--", weightSettings: {HandoverTime: "50%", ShipToDeliver: "40%", PicklistCreationToDispatch: "10%"}},
        {level: "City", subLevel: "Bengaluru", weightSettings: {HandoverTime: "50%", ShipToDeliver: "40%", PicklistCreationToDispatch: "10%"}},
        {level: "City", subLevel: "New Delhi", weightSettings: {HandoverTime: "50%", ShipToDeliver: "40%", PicklistCreationToDispatch: "10%"}},
        {level: "City", subLevel: "Mumbai", weightSettings: {HandoverTime: "50%", ShipToDeliver: "40%", PicklistCreationToDispatch: "10%"}},
        {level: "City", subLevel: "Chennai", weightSettings: {HandoverTime: "50%", ShipToDeliver: "40%", PicklistCreationToDispatch: "10%"}},
        {level: "City", subLevel: "Bengaluru", weightSettings: {HandoverTime: "50%", ShipToDeliver: "40%", PicklistCreationToDispatch: "10%"}},
        {level: "City", subLevel: "New Delhi", weightSettings: {HandoverTime: "50%", ShipToDeliver: "40%", PicklistCreationToDispatch: "10%"}},
        {level: "City", subLevel: "Mumbai", weightSettings: {HandoverTime: "50%", ShipToDeliver: "40%", PicklistCreationToDispatch: "10%"}},
        {level: "City", subLevel: "Chennai", weightSettings: {HandoverTime: "50%", ShipToDeliver: "40%", PicklistCreationToDispatch: "10%"}}
    ];
    

    const columns = [
        {field: "level", headerName: "Level"},
        {field: "subLevel", headerName: "Sub level"},
        {
            field: "weightSettings",
            headerName: "Weight Settings",
            render: (row) => (
                <div>
                    {Object.entries(row.weightSettings).map(([key, value]) => (
                        <div key={key}>
                            {key}: {value}
                        </div>
                    ))}
                </div>
            ),
        },
        {
            field: "edit",
            headerName: "",
            render: (row) => (
                <Button
                    variant="contained"
                    size="small"
                    style={{
                        textTransform: "capitalize",
                        backgroundColor: "#f5f7fa",
                        color: "#606f7b",
                        fontWeight: "600",
                        padding: "5px 10px",
                        borderRadius: "20px",
                        width: "70px",
                    }}
                    onClick={() => handleEditButtonClick(row)}
                >
                    Edit
                </Button>
            ),
        },
    ];

    return (
        <StyledTableContainer component={Paper} style={{
            height: "450px",
        }}>
            <Table>
                <StyledTableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <StyledTableCellHead key={column.field}>{column.headerName}</StyledTableCellHead>
                        ))}
                    </TableRow>
                </StyledTableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <StyledTableRow key={rowIndex}>
                            {columns.map((column) => (
                                <StyledTableCellBody key={column.field}>
                                    {column.render ? column.render(row) : row[column.field]}
                                </StyledTableCellBody>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};

export default WeightageSettingsTable;
