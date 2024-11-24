import React from "react";

const StoreWarsBanner = ({
    title,
    number,
    date,
}) => {
  const bannerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#4A90E2",
    borderRadius: "12px",
    padding: "20px",
    color: "#FFFFFF",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    height: "150px",
    boxSizing: "border-box",
  };

  const textContainerStyle = {
    textAlign: "right",
  };

  const titleStyle = {
    fontSize: "14px",
    fontWeight: "400",
    marginBottom: "4px",
  };

  const numberStyle = {
    fontSize: "36px",
    fontWeight: "700",
    margin: "0",
  };

  const dateStyle = {
    fontSize: "14px",
    fontWeight: "400",
    marginTop: "4px",
  };

  return (
    <div style={bannerStyle}>
      <div style={textContainerStyle}>
        <div style={titleStyle}>{title}</div>
        <div style={numberStyle}>{number}</div>
        <div style={dateStyle}>{date}</div>
      </div>
    </div>
  );
};

export default StoreWarsBanner;
