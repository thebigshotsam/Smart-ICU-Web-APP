import React, { useState } from "react";
import Login from "./Login";
import { submitForm } from "../api/index";
import { formSubmit, regToken } from "../Store/Actions/auth";
import { useDispatch, useSelector } from "react-redux";


const Form2 = ({ setContact, setPopup, setRoute, loading, setLoading }) => {
    const dispatch=useDispatch();
  const phone=useSelector(state=>state.authReducer.contact);
  const fName=useSelector(state=>state.authReducer.firstName);
  const lName=useSelector(state=>state.authReducer.lastName);
  const dataP=useSelector(state=>state.authReducer.data)
  const [pressed, setPressed] = useState(false);
  
  const [diffInBreath, setdiffInBreath] = useState(false);
  const [pains, setPains] = useState(false);
  const [soreThroat, setSoreThroat] = useState(false);
  const [nasalCongestion, setNasalCongestion] = useState(false);
  const [runnyNose, setRunnyNose] = useState(false);
  const [diarrhea, setDiarrhea] = useState(false);
  
  const submitPressed = async () => {
    setPressed(true);

    const data = await submitForm({
      firstName: fName,
      lastName: lName,
      phoneNo: phone,
      ...dataP,
      diffInBreath:diffInBreath,
      soreThroat:soreThroat,
      nasalCongestion:nasalCongestion,
      runnyNose:runnyNose,
      diarrhea:diarrhea
    });
    if (data.error){
        setPopup({ show: true, title: "Error", content: 'Error in Submission, please reload' });    
    }
    dispatch(regToken(data.token))
    setRoute(4);
    setPopup({ show: true, title: "Ambulance Update", content: data.message });
    setPressed(false);
  };
 if (pressed) {
    return (
      <Login loading={true} string="Allocating ambulance , please wait..." />
    );
  } else
    return (
      <>
        <div
          id="survey-form"
          style={{ width: "400px", overflowY: "visible" }}
        >
          
          <div className="form-group">
            <label style={{marginRight:10}} for="fever" id="radio-label">
              Difficulty in Breathing
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesFever"
                name="fever"
                type="radio"
                onChange={(e) => {
                  setdiffInBreath(true);
                }}
              />
              <label style={{marginRight:10}} for="YesFever" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoFever"
                name="fever"
                type="radio"
                checked={!diffInBreath}
                onChange={(e) => {
                  setdiffInBreath(false);
                }}
              />
              <label style={{marginRight:10}} for="NoFever" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="drycough" id="radio-label">
              Pains
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesDryCough"
                name="drycough"
                type="radio"
                onChange={(e) => setPains(true)}
              />
              <label style={{marginRight:10}} for="YesDryCough" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoDryCough"
                name="drycough"
                type="radio"
                checked={!pains}
                onChange={(e) => setPains(false)}
              />
              <label style={{marginRight:10}} for="NoDryCough" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="breathe" id="radio-label">
              Sore Throat
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesBreathe"
                name="breathe"
                type="radio"
                onChange={(e) => setSoreThroat(true)}
              />
              <label style={{marginRight:10}} for="YesBreathe" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoBreathe"
                name="breathe"
                type="radio"
                checked={!soreThroat}
                onChange={(e) => setSoreThroat(false)}
              />
              <label style={{marginRight:10}} for="NoBreathe" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="throat" id="radio-label">
              Nasal Congestion
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesThroat"
                name="throat"
                type="radio"
                onChange={(e) => setNasalCongestion(true)}
              />
              <label style={{marginRight:10}} for="YesThroat" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoThroat"
                name="throat"
                type="radio"
                checked={!nasalCongestion}
                onChange={(e) => setNasalCongestion(false)}
              />
              <label style={{marginRight:10}} for="NoThroat" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="weakness" id="radio-label">
              Runny Nose
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesWeak"
                name="weak"
                type="radio"
                onChange={(e) => setRunnyNose(true)}
              />
              <label style={{marginRight:10}} for="YesWeak" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoWeak"
                name="weak"
                type="radio"
                checked={!runnyNose}
                onChange={(e) => setRunnyNose(false)}
              />
              <label style={{marginRight:10}} for="NoWeak" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="cardiac" id="radio-label">
              Diarrhea
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesCardiac"
                name="cardiac"
                type="radio"
                onChange={(e) => setDiarrhea(true)}
              />
              <label style={{marginRight:10}} for="YesCardiac" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoCardiac"
                name="cardiac"
                type="radio"
                checked={!diarrhea}
                onChange={(e) => setDiarrhea(false)}
              />
              <label style={{marginRight:10}} for="NoCardiac" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div
            style={{
              justifyContent: "flex-end",
              display: "flex",
              width: "100%",
              flexDirection: "row",
            }}
          >
            <button
              name="accept"
              onClick={() => submitPressed()}
              className="button accept"
              style={{ width: "35%" }}
            >
              Submit
            </button>
          </div>
        </div>
      </>
    );
};

export default Form2;
