// import React, { useState } from 'react';
// import WeightageSettingsTable from "../../Components/WeightageSettingTable/WeightageSettingTable";
// import { styled } from "@mui/material";
// import { Typography } from "@mui/material";
// import MetricCards from "../../Utils/MetricCards/MetricCarss"; // Assuming this is the correct path
// import { faChartLine, faTruck, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
// import Modal from './Modal';
// import LineChart from "../Charts/ChartLine";
//
// const StyledTypography = styled(Typography)({
//     fontSize: "30px",
//     fontWeight: "600",
//     color: "#333333",
//     marginBottom: "30px",
//     marginLeft: "450px",
// });
//
// const ControlUnit = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//
//     const handleEditButtonClick = (row) => {
//         console.log("Edit clicked", row);
//         setModalOpen(true);  // Open the modal when the edit button is clicked
//     };
//
//     return (
//         <div className="dashboard-content" style={containerStyles}>
//             {/* Left Column: Metrics */}
//             <div className="left-column" style={leftColumnStyles}>
//                 <MetricCards
//                     metrics={[
//                         { name: 'Total Score', value: '500', icon: faChartLine, trend: '8.5% up from yesterday' },
//                         { name: 'O2D', value: '2 Mins', icon: faBoxOpen, trend: '5.2% down from yesterday' },
//                         { name: 'P2D', value: '5 Mins', icon: faTruck, trend: '3.0% up from yesterday' }
//                     ]}
//                 />
//             </div>
//             <h1>My Dashboard</h1>
//             <LineChart/>
//             {/* Right Column: Weightage Settings Table */}
//             <div className="right-column" style={rightColumnStyles}>
//                 <div style={weightageSettingsWrapperStyles}>
//                     <StyledTypography variant="h5" component="h1">
//                         Weightage Settings
//                     </StyledTypography>
//                     <WeightageSettingsTable handleEditButtonClick={handleEditButtonClick} />
//                 </div>
//                 <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//             </div>
//         </div>
//
//     );
// };
//
// // Styles for layout
// const containerStyles = {
//     display: 'flex',
//     flexDirection: 'column',
//     margin: '0 auto',
//     width: '80%',
//     maxHeight: '100vh',
//     overflowY: 'auto',
// };
//
// const leftColumnStyles = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '30px',
// };
//
// const rightColumnStyles = {
//     display: 'flex',
//     flexDirection: 'column',
//     marginTop: '20px',
//     overflowY: 'auto',
// };
//
// const weightageSettingsWrapperStyles = {
//     border: "3px solid #e0e0e0",
//     borderRadius: "18px",
//     boxShadow: "10 2px 4px rgba(0, 0, 0, 0.1)",
//     padding: "20px",
//     background: "white",
//     maxHeight: 'calc(100vh - 200px)',
//     overflowY: 'auto',
// };
//
// export default ControlUnit;


import React, { useState } from 'react';
import WeightageSettingsTable from "../../Components/WeightageSettingTable/WeightageSettingTable";
import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import MetricCards from "../../Utils/MetricCards/MetricCarss"; // Assuming this is the correct path
import { faChartLine, faTruck, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import Modal from './Modal';
import LineChart from "../Charts/ChartLine";
import ToastService from '../../Utils/ToastService/ToastService';

const StyledTypography = styled(Typography)({
    fontSize: "30px",
    fontWeight: "600",
    color: "#333333",
    marginBottom: "30px",
    marginLeft: "450px",
});

const ControlUnit = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState();
    const [picklistCreation, setPicklistCreation] = useState('');
    const [handovertime, setHandoverTime] = useState('');
    const [shipToDeliver, setShipToDeliver] = useState('');

    const handleEditButtonClick = (row) => {
        console.log("Edit clicked", row);
        setSelectedOption(row);
        setModalOpen(true);
    };

    const onModalClose = () => {
        ToastService.success("Weights updated successfully!");
        console.info("Successfully updated weights!!")
        setModalOpen(false);
    }

    return (
        <div className="dashboard-content" style={containerStyles}>
            {/* Left Column: Metrics */}
            <div className="left-column" style={leftColumnStyles}>
                <MetricCards
                    metrics={[
                        { name: 'Total Score', value: '500', icon: faChartLine, trend: '8.5% up from yesterday' },
                        { name: 'O2D', value: '2 Mins', icon: faBoxOpen, trend: '5.2% down from yesterday' },
                        { name: 'P2D', value: '5 Mins', icon: faTruck, trend: '3.0% up from yesterday' }
                    ]}
                />
            </div>
            {/* Right Column: Weightage Settings Table */}
            <div className="right-column" style={rightColumnStyles}>
                <div style={weightageSettingsWrapperStyles}>
                    <div>
                    <StyledTypography variant="h5" component="h1" style={{
                        marginLeft: "0px",
                    }}>
                        Weightage Settings
                    </StyledTypography>
                    </div>
                    <WeightageSettingsTable handleEditButtonClick={handleEditButtonClick} />
                </div>
                <Modal isOpen={isModalOpen} onClose={() => onModalClose()} setHandoverTime={setHandoverTime} setPicklistCreation={setPicklistCreation} setShipToDeliver={setShipToDeliver} handovertime={handovertime} picklistCreation={picklistCreation} shipToDeliver={shipToDeliver}/>
            </div>
        </div>
    );
};

// Styles for layout
const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '100%', // Full width
    padding: '20px',
};

const leftColumnStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    flexWrap: 'wrap', // Ensure metrics wrap if they exceed the width
};

const rightColumnStyles = {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: '90%',
    height: "500px",
};

const weightageSettingsWrapperStyles = {
    background: "white",
    // maxHeight: 'calc(100vh - 100px)', // Set a max height to avoid overflow issues
};

export default ControlUnit;