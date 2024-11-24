import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'; // Importing up and down arrow icons
import { height } from '@mui/system';

const MetricCards = ({ metrics }) => {
    return (
        <div style={cardsContainerStyles}>
            {metrics.map((metric, index) => (
                <div key={index} style={cardStyles}>
                    <div style={iconContainerStyles}>
                        <FontAwesomeIcon icon={metric.icon} className="metric-icon" />
                    </div>
                    <div style={metricDetailsStyles}>
                        <h3>{metric.name}</h3>
                        <p>{metric.value}</p>
                        {metric.trend && (
                            <p style={trendStyles}>
                                {/* Add trend arrow icon */}
                                <FontAwesomeIcon
                                    icon={metric.trend.includes("up") ? faArrowUp : faArrowDown}
                                    style={metric.trend.includes("up") ? arrowStylesUp: arrowStylesDown}
                                />
                                {metric.trend}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

// Styles for the metric cards
const cardsContainerStyles = {
    display: 'flex',
    marginLeft: '55px',
    flexWrap: 'wrap',
    gap: '40px',
};

const cardStyles = {
    backgroundColor: '#4a90e2',
    padding: '45px',
    borderRadius: '10px',
    width: '200px',
    height: "150px",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
};

const iconContainerStyles = {
    marginBottom: '20px',
    color: 'white',
    fontSize: "20px",
};

const iconStyles = {
    fontSize: '30px',
    color: '#007BFF',
};

const metricDetailsStyles = {
    textAlign: 'center',
    color: 'white',
    fontSize: "17px",
};

const trendStyles = {
    fontSize: '16px',
    fontStyle: 'italic',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
};

const arrowStylesDown = {
    marginRight: '1.5px', // Space between arrow and trend text
    fontSize: '16px',   // Size of the trend arrow
    color: 'red',   // Green for up trend, modify as needed
};

const arrowStylesUp = {
    marginRight: '1.5px', // Space between arrow and trend text
    fontSize: '16px',   // Size of the trend arrow
    color: '#22dd22', 
}

// Exporting the component
export default MetricCards;
