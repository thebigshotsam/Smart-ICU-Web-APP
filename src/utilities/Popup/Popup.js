import React from "react";
import "./Popup.css";
const Popup = ({ popup, setPopup }) => {
  return (
    <>
      {popup.show ? (
        <div id="popup1" className="overlay">
          <div className="popup">
            <h2>{popup.title}</h2>
            <span className="close" onClick={() => setPopup({ show: false })}>
              &times;
            </span>
            <div className="content"><text style={{fontFamily:'monospace',color:'black',fontSize:12}}> {popup.content}</text></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Popup;
