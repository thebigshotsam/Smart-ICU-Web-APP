import axios from "axios";
import { useDispatch } from "react-redux";
import { authSuccess, formSubmit } from "../Store/Actions/auth";
const baseurl = "https://health-express.herokuapp.com";

export const getOTP = async (contact) => {
  const url = baseurl + "/auth/getOTP?phno=" + contact + "&sms=channel";
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
    return { error: "Error occured" };
  }
};
export const verifyOTP = async (otp, contact) => {
  try {
    const { data } = await axios.get("https://health-express.herokuapp.com/auth/verifyOTP?phno="+contact+"&otp="+otp
    );
    console.log(data)
    return data;
  } catch (err) {
    console.log(err);
    return { error: "Error occured" };
  }
};
export const submitForm = async (body) => {
  console.log(body)
  
  try {
    const { data } = await axios.post(baseurl+"/patient/register", body);
    console.log(data.token)
    return data;
  } catch (err) {
    return { error: "Error Occured" };
  }
};
