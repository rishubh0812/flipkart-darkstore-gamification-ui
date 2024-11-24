import React, { useEffect } from "react";

const Modal = ({
  isOpen,
  onClose,
  setPicklistCreation,
  setHandoverTime,
  setShipToDeliver,
  picklistCreation,
  handoverTime,
  shipToDeliver,
}) => {
  // Reset input fields when modal is opened
  useEffect(() => {
    if (isOpen) {
      setPicklistCreation("");
      setHandoverTime("");
      setShipToDeliver("");
    }
  }, [isOpen]); // Dependency array ensures this runs when 'isOpen' changes

  const handleInputChange = (e, setValue) => {
    const value = e.target.value;
    // Allow only numbers between 0 and 100
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setValue(value);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Weightage Settings</h2>
        <p style={styles.description}>
          Adjust the weightage of metrics for the overall score
        </p>
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            <strong>Picklist Creation To Dispatch:</strong>
          </label>
          <input
            type="text"
            value={picklistCreation}
            onChange={(e) => handleInputChange(e, setPicklistCreation)}
            placeholder="Enter % contribution (e.g., 80)"
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            <strong>Handover Time:</strong>
          </label>
          <input
            type="text"
            value={handoverTime}
            onChange={(e) => handleInputChange(e, setHandoverTime)}
            placeholder="Enter % contribution (e.g., 80)"
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            <strong>Ship To Deliver:</strong>
          </label>
          <input
            type="text"
            value={shipToDeliver}
            onChange={(e) => handleInputChange(e, setShipToDeliver)}
            placeholder="Enter % contribution (e.g., 80)"
            style={styles.input}
          />
        </div>
        <button onClick={onClose} style={styles.button}>
          Update Weightage
        </button>
      </div>
    </div>
  );
};

// Styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "white",
    padding: "26px 40px",
    borderRadius: "12px",
    width: "413px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
    zIndex: 1001,
  },
  title: {
    fontSize: "23px",
    fontWeight: "bold",
    marginBottom: "0px",
    color: "#333",
  },
  description: {
    fontSize: "14px",
    color: "#606f7b",
    marginBottom: "32px",
    lineHeight: "0.2",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: "20px",
  },
  label: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "100%",
    fontSize: "14px",
    color: "#333",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#007BFF",
  },
  button: {
    marginTop: "15px",
    padding: "12px 25px",
    borderRadius: "25px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
    outline: "none",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Modal;
