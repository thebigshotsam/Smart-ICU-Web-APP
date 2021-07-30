import React, { useEffect } from "react";
import "./Alert.css";
const Alert = ({ alert, setAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      setAlert({ show: false, content: "", title: "", type: "" });
    }, 10000);
  }, [alert, setAlert]);
  return (
    <>
      {alert.show ? (
        <section>
          <div
            className={`alert alert-${
              alert.type === "primary"
                ? "1-primary"
                : alert.type === "danger"
                ? "3-danger"
                : alert.type === "warning"
                ? "1-warning"
                : alert.type === "secondary"
                ? "2-secondary"
                : alert.type === "success"
                ? "2-success"
                : "1-primary"
            }`}
          >
            <h3 className="alert-title">{alert.title}</h3>
            <p className="alert-content">{alert.content}</p>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default Alert;
