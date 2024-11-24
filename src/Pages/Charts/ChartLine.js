import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const EmployeeLineChart = ({ data }) => {
    // Transform the data for recharts
    const transformedData = data.map((weekData) => {
        const weekEntry = { week: weekData.week };
        weekData.employees.forEach((employee) => {
            weekEntry[employee.id] = employee.time;
        });
        return weekEntry;
    });

    // Get all unique employee IDs
    const employeeIds = [
        ...new Set(data.flatMap((weekData) => weekData.employees.map((emp) => emp.id))),
    ];

    // Custom tooltip to display all data points for the hovered week
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div style={tooltipStyles}>
                    <p><strong>{label}</strong></p>
                    {payload.map((data) => (
                        <p key={data.name} style={{ color: data.color }}>
                            Emp ID: {data.name} - {data.value} minutes
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div style={pageStyles}>
            <div style={chartContainerStyles}>
                <ResponsiveContainer width="100%" height={500}>
                    <LineChart
                        data={transformedData}
                        margin={{ top: 20, right: 50, left: 20, bottom: 40 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="week"
                            label={{
                                value: 'Week Number',
                                position: 'insideBottom',
                                offset: -5,
                            }}
                        />
                        <YAxis
                            label={{
                                value: 'Time (minutes)',
                                angle: -90,
                                position: 'insideLeft',
                            }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        {employeeIds.map((id, index) => (
                            <Line
                                key={id}
                                type="monotone"
                                dataKey={id}
                                stroke={colors[index % colors.length]} // Cycle through the color palette
                                name={id}
                                strokeWidth={2} // Make lines slightly thicker for visibility
                                dot={{ r: 4 }} // Add hoverable dots for data points
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const tooltipStyles = {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const pageStyles = {
    height: 'auto',
    overflowY: 'auto',
    padding: '10px',
    backgroundColor: '#f9f9f9',
};

const chartContainerStyles = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const legendContainerStyles = {
    maxWidth: '1000px',
    margin: '20px auto',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Spread out items evenly
    gap: '10px', // Add spacing between items
    textAlign: 'center',
};

const legendItemStyles = {
    display: 'flex',
    alignItems: 'center',
    margin: '5px',
    flex: '1 1 calc(33.33% - 10px)', // Each item takes 1/3 of the row width
    justifyContent: 'center', // Center align each item
};

const legendColorBoxStyles = {
    width: '12px',
    height: '12px',
    marginRight: '8px',
    borderRadius: '50%', // Make it circular
};

const legendTextStyles = {
    fontSize: '14px',
    fontWeight: '500',
};

const colors = [
    '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#d0ed57', '#a4de6c', '#888888',
    '#FF6F61', '#6A5ACD', '#20B2AA', '#FF4500', '#FFD700', '#8B0000', '#4682B4',
    '#DA70D6', '#32CD32', '#00CED1', '#FF1493', '#7B68EE', '#FF6347', '#E9967A',
    '#ADFF2F', '#5F9EA0', '#40E0D0', '#FF69B4', '#B8860B', '#4B0082', '#00FA9A',
];

export default EmployeeLineChart;
