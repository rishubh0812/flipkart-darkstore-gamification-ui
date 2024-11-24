import React from "react";

const TopPanel = ({name, role}) => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.role}>{role}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "65px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 20px", 
    marginBottom: "20px",
    boxSizing: "border-box",
  },
  textContainer: {
    textAlign: "right",
  },
  name: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600", // Bold name
    color: "#333",
  },
  role: {
    margin: 0,
    fontSize: "14px",
    fontWeight: "400",
    color: "#777", // Lighter text for the role
  },
};

export default TopPanel;
