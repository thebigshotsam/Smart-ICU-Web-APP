import * as actionTypes from "./actions";
import Axios from "axios";
export const authStart=()=>{
    return {
        type:actionTypes.AUTH_START
    };
}
export const authFail=(error)=>{
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}
export const authSuccess=(token)=>{
    return {
        type:actionTypes.AUTH_SUCCESS,
        token:token,
    }
}
export const regToken=(token)=>{
    return {
        type:actionTypes.REG_TOKEN,
        token:token,
    }
}
export const formSubmit=(contact,firstName,lastName,data)=>{
    return {
        type:actionTypes.FORM_SUBMIT,
        contact:contact,
        firstName:firstName,
        lastName:lastName,
        data:data
    }
}
export const authLogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expirationTime");
    return {
        type:actionTypes.AUTH_LOGOUT,
    }
}
export const checkauthLogout=(expirationTime)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(authLogout);
        },expirationTime*1000)
    };
}
export const auth=(email,password,isSignUp)=>{
    return dispatch=>{
        dispatch(authSuccess());
        const authData={
            email:email,
            password:password
        }
        let url="";
        if(!isSignUp){
            url="http://localhost:8080/auth";
        }else{
            url="http://localhost:8080/signUp";
        }
            Axios.post(url,authData)
            .then(res=>{
                console.log(res.user);
                console.log(res.user.idToken);
                localStorage.setItem("token",res.user.idToken);
                localStorage.setItem("expirationTime",new Date(new Date().getTime() + res.user.expiresIn*1000));
                localStorage.setItem("userId",res.user.localId);
                dispatch(authSuccess(res.user.idToken,res.user.localId));
                dispatch(checkauthLogout(res.user.expiresIn))
            })
            .catch(err=>{
                console.log(err);
                dispatch(authFail(err))
            })
       }
}
export const authCheckState=()=>{
    return dispatch=>{
        const token=localStorage.getItem("token");
        if(!token){
            dispatch(authLogout());
        }else{
            const expirationTime=new Date(localStorage.getItem("expirationTime"));
            if(expirationTime<new Date()){
                dispatch(authLogout());
            }else{
                const userId=localStorage.getItem("userId");
                dispatch(authSuccess(token,userId));
                console.log(expirationTime.getMilliseconds());
                dispatch(checkauthLogout((expirationTime.getTime()-new Date().getTime())/1000));
            }
        }
    }
}
