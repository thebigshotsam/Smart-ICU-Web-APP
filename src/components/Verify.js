import React from "react";
import { Card } from "react-bootstrap";
import { verifyOTP } from "../api/index";
import Loader from "../utilities/loader/Loader";
const Verify = ({ loading, contact, setRoute, setLoading, setAlert }) => {
  const [otp, setOtp] = React.useState();
  const handleClick = async () => {
    setLoading(true);
    const data = await verifyOTP(otp, contact);
    if (data.message && data.message === "Verification Success") {
      setLoading(false);
      setAlert({ type: "success", content: "Verified", show: true });
      setRoute(2);
    } else {
      setLoading(false);
      setAlert({ type: "danger", content: "OTP not verified", show: true });
    }
  };
  return (
    <>
      <div className="container" style={{width:'80%'}}>
        <Card style={{backgroundColor:'#2EA8C3',padding:10}}>
          <Card.Body>
            {loading?<div style={{padding:10,justifyContent:'center',display:'flex',alignContent:'center',alignItems:'center'}}>
            <div style={{width:'100%',height:100}}><Loader show={loading} /></div>
          <div style={{width:'100%'}}><text  style={{
            fontFamily:'monospace',
            fontSize:16,
            color:"white"}}>Verifying OTP...</text></div></div>:
            <div>
          <text style={{color:'white',fontFamily:'monospace',fontSize:15}}>ENTER OTP</text>
            <div className="floating-placeholder" style={{width:'80%',marginTop:10}}>
              
              <input
                id="mobile"
                name="mobile"
                type="tel"
                style={{backgroundColor:'white',height:40,borderRadius:10}}
                width="100"
                required
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
              </div>
              <button name="accept" class="button accept" style={{width:'30%'}} onClick={handleClick}>
                <text style={{color:'white',fontFamily:'monospace',fontSmooth:'always',fontSize:13}}>Verify</text>
              </button>
            </div>}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Verify;
