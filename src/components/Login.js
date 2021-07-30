import React from "react";
import { Card } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/material.css'
import { getOTP } from "../api/index";
import Loader from "../utilities/loader/Loader";
const Login = ({loading, string ,setRoute, setphone, setLoading, setAlert }) => {
  const [contact, setContact] = React.useState("");
  const handleClick = async () => {
   console.log(contact)
    if (contact.length === 10) {
      setContact(contact);
    } else if (contact.length < 10) {
      setAlert({ type: "warning", content: "Enter valid number", show: true });
      return;
    }
    setLoading(true);
    const data = await getOTP(contact);
    if (data.status && data.status === "pending") {
      setphone(contact);
      setLoading(false);
      setRoute(1);
    } else {
      setLoading(false);
      setAlert({ type: "primary", content: "Failed", show: true });
    }
    console.log(contact);
  };
  return (
    <>
      <div className="container" >
        <Card style={{backgroundColor:'#2EA8C3',height:150,width:350,justifyContent:'center',alignItems:'center',padding:10}}>
          <Card.Body>
          {loading?
          <div style={{padding:10,justifyContent:'center',display:'flex',alignContent:'center',alignItems:'center'}}>
            <div style={{width:'100%',height:100}}><Loader show={loading} /></div>
          <div style={{width:'100%'}}><text  style={{
            fontFamily:'monospace',
            fontSize:16,
            color:"white"}}>{string?string:"Sending OTP..."}</text></div></div>:
          <div>
          <div style={{padding:10,alignContent:'center'}}>
            <PhoneInput
            country={'in'}
            value={contact}
            onChange={contact =>setContact(contact)}
          />
          </div>
          <br />
          <button
            name="accept"
            className="button accept"
            style={{width:'30%',height:40,fontSize:10}}
            onClick={handleClick}
          >
            Send OTP
          </button>
          </div>
        }
            {/* <div className="floating-placeholder">
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
              <label htmlFor="mobile">Phone number</label>
            </div> */}
            
          </Card.Body>
              
        </Card>
      </div>
    </>
  );
};

export default Login;
