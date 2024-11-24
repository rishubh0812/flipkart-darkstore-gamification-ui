import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Toast.css";

const Toast = ({ role, onClose }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      if (onClose) onClose();
    }, 3000); // Auto-hide after 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, [onClose]);

  if (!show) return null;

  const roleStickers = {
    CENTRAL_OPS: "🛠️",
    CITY_MANAGER: "🌆",
    STORE_MANAGER: "🏪",
    EMPLOYEE: "👨‍💼",
  };

  return (
    <div className="toast-container">
      <div className="toast-content">
        <span className="toast-sticker">{roleStickers[role] || "🔔"}</span>
        <p className="toast-message">
          You are logged in as <strong>{role.replace("_", " ")}</strong>!!
        </p>
      </div>
    </div>
  );
};

export default Toast;
