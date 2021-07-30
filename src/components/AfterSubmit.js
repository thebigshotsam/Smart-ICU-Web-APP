import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import User from "../user.png"
import { verifyOTP } from "../api/index";
import Loader from "../utilities/loader/Loader";
import Login from "./Login";
const AfterSubmit = (props) => {
  const phone=useSelector(state=>state.authReducer.contact);
  const firstName=useSelector(state=>state.authReducer.firstName);
  const lastName=useSelector(state=>state.authReducer.lastName);
  const token=useSelector(state=>state.authReducer.token);
  console.log('Token - '+ token)
  console.log(phone + " "+ firstName + " "+ lastName + " "+ token)
  const [res,setRes] = useState(null)
  const send = useCallback(async ()=>{
    var response = null
     response = await axios.get("https://health-express.herokuapp.com/patient/fetchStatus",{
      headers:{
        Authorization:'Bearer ' +token
      }
      });
      if (response.status === 500){
        props.setPopup({ show: true, title: "Error", content: response.err_message });
        setRes('Login Expired');
        console.log("response -"+response.err_message);
      }else{
        console.log({...response})
        console.log("response - " + response.data.message);
        setRes({...response.data})
    }
    return 
  })
  send();
  return (
    <>
      <div className="container" >
        <Card style={{
          backgroundColor:'#2EA8C3',
          height:200,
          width:350,
          display:'flex',
          justifyContent:'flex-start',
          alignItems:'flex-start',
          padding:10}}>
            <div style={{width:60,height:60,backgroundColor:'white',borderRadius:60,padding:0}}>
                <img src={User} style={{width:'100%',height:'100%'}} />
            </div>
          <Card.Body style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'flex-start',
          padding:10}}>
            
            <text style={{fontFamily:'monospace',fontSize:13,color:'white',textAlign:'left'}}>Patient Name - {firstName + " "+ lastName}</text>
            <text style={{fontFamily:'monospace',fontSize:13,color:'white',marginTop:10}}>Contact - {phone}</text>
            {res?res.driverPhone  ?
            <div>
              <text style={{fontFamily:'monospace',fontSize:15,fontWeight:'bold',color:'white',marginTop:15}}> Driver Contact : {res.driverPhone}</text>
              <text style={{fontFamily:'monospace',fontSize:15,fontWeight:'bold',color:'white',marginTop:15}}> Vehicle Number : {res.vehicleNo}</text>
              <text style={{fontFamily:'monospace',fontSize:15,fontWeight:'bold',color:'white',marginTop:15}}> Status : {res.message}</text>                                                 
            </div>:
            <text style={{fontFamily:'monospace',fontSize:15,fontWeight:'bold',color:'white',marginTop:30}}>Status : {res.message}</text>:
            <div style={{padding:10,justifyContent:'center',}}>
            <div style={{width:'100%',height:100}}><Loader show={true} /></div>
          <div style={{width:'100%'}}>
            <text  style={{
            fontFamily:'monospace',
            fontSize:16,
            color:"white"}}> Reviewing status ...
            </text>
            </div>
          </div>}
          </Card.Body>              
        </Card>
      </div>
    </>
  );
};

export default AfterSubmit;
