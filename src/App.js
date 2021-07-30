import Alert from "./utilities/alert/Alert";
import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Verify from "./components/Verify";
import Loader from "./utilities/loader/Loader";
import Form from "./components/Form";
import back from "./assets/2699.jpg";
import Popup from "./utilities/Popup/Popup";
import AfterSubmit from "./components/AfterSubmit";
import Form2 from "./components/Form2";
function App() {
  const [route, setRoute] = useState(0);
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    title: "",
    content: "",
    type: "",
  });
  const [popup, setPopup] = useState({ show: false, title: "", content: "" });
  return (
    <div
      className="App"
      style={{ alignItems: "center", justifyContent: "center", width: "100%" }}
    >
      <div
        style={{
          backgroundColor: "#1D92B2",
          display: "flex",
          width: "100%",
          height: 50,
          fontFamily:''
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <text style={{ fontFamily: "monospace", fontSize: 20, color: "white" }}>
          Health Express
        </text>
      </div>
      {/* <img src={back} style={{
           width:500,
           height:500,
        }} /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >
        <div>
          <img src={back} style={{ width: "1050px", height: "600px" }} />
        </div>
        <div>
          <Popup popup={popup} setPopup={setPopup} />
          <Alert alert={alert} setAlert={setAlert} />
          {route === 0 ? (
            <Login
              loading={loading}
              setRoute={setRoute}
              setphone={setContact}
              setLoading={setLoading}
              setAlert={setAlert}
            />
          ) : route === 1 ? (
            <Verify
              loading={loading}
              setRoute={setRoute}
              contact={contact}
              setLoading={setLoading}
              setAlert={setAlert}
            />
          ) : route === 2 ? (
            <Form setContact={setContact} setPopup={setPopup} setRoute={setRoute} loading={loading} setLoading={setLoading} />
          ): route === 3 ? (
            <Form2  setPopup={setPopup} setRoute={setRoute} loading={loading} setLoading={setLoading} />
          ): route === 4 ? (
            <AfterSubmit setPopup={setPopup}/>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
