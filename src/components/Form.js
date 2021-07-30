import React, { useState } from "react";
import Login from "./Login";
import { submitForm } from "../api/index";
import { formSubmit } from "../Store/Actions/auth";
import { useDispatch } from "react-redux";
var location;
var location_find = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    location = position;
    location={
      location:{
        lat:location.coords.latitude,
        lng:location.coords.longitude
      },
      accuracy:location.coords.accuracy
    }
    console.log(location);
  });
};

const Form = ({ setContact, setPopup, setRoute, loading, setLoading }) => {
  const dispatch=useDispatch();
  const [fName, setFName] = useState("");
  const [pressed, setPressed] = useState(false);
  const [lName, setLName] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(null)
  const [fever, setFever] = useState(false);
  const [dryCough, setDryCough] = useState(false);
  const [breathe, setBreathe] = useState(false);
  const [throat, setThroat] = useState(false);
  const [weakness, setWeakness] = useState(false);
  const [cardiac, setCardiac] = useState(false);
  const [phone, setPhone] = useState("");
  const nextPressed = async () => {
    const data = {
      age: age,
      gender: gender,
      weaknesS:weakness,
      feverS:fever,
      cardiacS:cardiac,
      nauseaS:breathe,
      respiratoryS:dryCough,
      location:location
    };
    
    dispatch(formSubmit(phone,fName,lName,data));
    setRoute(3);
  };
  location_find();
  if (!location) {
    return <Login loading={true} string="Detecting your location..." />;
  }  else
    return (
      <>
        <div
          id="survey-form"
          style={{ width: "400px", height: "93%", overflowY: "visible" }}
        >
          <div className="form-group">
            <label style={{marginRight:10}} for="name" id="name-label">
              First Name
            </label>
            <br />
            <input
              type="text"
              id="fname"
              name="name"
              onChange={(e) => setFName(e.target.value)}
              placeholder="Enter your First name"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label style={{marginRight:10}} for="lname" id="name-label">
              Last Name
            </label>
            <br />
            <input
              type="text"
              id="lname"
              name="name"
              onChange={(e) => setLName(e.target.value)}
              placeholder="Enter your Last name"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label style={{marginRight:10}} for="phone" id="phone-label">
              Phone no.
            </label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone no."
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label style={{marginRight:10}} for="number" id="number-label">
              Age
            </label>
            <br />
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <br />
          <br />
          <div className="form-group">
            <label style={{marginRight:10}} for="gender" id="radio-label">
              Gender
            </label>
            <br />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="male"
                name="gender"
                type="radio"
                checked={gender === 'Male' ? true : false}
                onChange={(e) => setGender("Male")}
              />
              <label style={{marginRight:10}} for="male" className="radio-label">
                Male
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="female"
                name="gender"
                type="radio"
                checked={gender === 'Female' ? true : false}
                onChange={(e) => setGender("Female")}
              />
              <label style={{marginRight:10}} for="male" className="radio-label">
                female
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="other"
                name="gender"
                type="radio"
                checked={gender === 'Other' ? true : false}
                onChange={(e) => setGender("Other")}
              />
              <label style={{marginRight:10}} for="male" className="radio-label">
                Other
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label style={{marginRight:10}} for="fever" id="radio-label">
              Fever
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesFever"
                name="fever"
                type="radio"
                onChange={(e) => {
                  setFever(true);
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
                checked={!fever}
                onChange={(e) => {
                  setFever(false);
                }}
              />
              <label style={{marginRight:10}} for="NoFever" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="drycough" id="radio-label">
              Dry Cough
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesDryCough"
                name="drycough"
                type="radio"
                onChange={(e) => setDryCough(true)}
              />
              <label style={{marginRight:10}} for="YesDryCough" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoDryCough"
                name="drycough"
                type="radio"
                checked={!dryCough}
                onChange={(e) => setDryCough(false)}
              />
              <label style={{marginRight:10}} for="NoDryCough" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="breathe" id="radio-label">
              Difficulty in Breathe
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesBreathe"
                name="breathe"
                type="radio"
                onChange={(e) => setBreathe(true)}
              />
              <label style={{marginRight:10}} for="YesBreathe" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoBreathe"
                name="breathe"
                type="radio"
                checked={!breathe}
                onChange={(e) => setBreathe(false)}
              />
              <label style={{marginRight:10}} for="NoBreathe" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="throat" id="radio-label">
              Sour Throat
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesThroat"
                name="throat"
                type="radio"
                onChange={(e) => setThroat(true)}
              />
              <label style={{marginRight:10}} for="YesThroat" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoThroat"
                name="throat"
                type="radio"
                checked={!throat}
                onChange={(e) => setThroat(false)}
              />
              <label style={{marginRight:10}} for="NoThroat" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="weakness" id="radio-label">
              Weakness
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesWeak"
                name="weak"
                type="radio"
                onChange={(e) => setWeakness(true)}
              />
              <label style={{marginRight:10}} for="YesWeak" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoWeak"
                name="weak"
                type="radio"
                checked={!weakness}
                onChange={(e) => setWeakness(false)}
              />
              <label style={{marginRight:10}} for="NoWeak" className="radio-label">
                No
              </label>
            </div>
          </div>
          <div className="form-group">
            <label style={{marginRight:10}} for="cardiac" id="radio-label">
              Cardiac
            </label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="YesCardiac"
                name="cardiac"
                type="radio"
                onChange={(e) => setCardiac(true)}
              />
              <label style={{marginRight:10}} for="YesCardiac" className="radio-label">
                Yes
              </label>
              <input
              style={{width:30,marginRight:20,height:30,borderRadius:30}}
                id="NoCardiac"
                name="cardiac"
                type="radio"
                checked={!cardiac}
                onChange={(e) => setCardiac(false)}
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
              onClick={() => nextPressed()}
              className="button accept"
              style={{ width: "35%" }}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
};

export default Form;
