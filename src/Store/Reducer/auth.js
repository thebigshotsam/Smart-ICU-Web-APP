import * as actionTypes from "../Actions/actions";
const initialState={
    token:null,
    error:null,
    loading:false,
    userId:null,
    contact:null,
    firstName:null,
    lastName:null,
    data:null
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_START:
            return{
                ...state,
                error:null,
                loading:true
            }
        case actionTypes.AUTH_FAIL:
                return{
                    ...state,
                    error:action.error,
                    loading:false
                };
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                token:action.token,
                error:null,
                loading:false
            };
        case actionTypes.REG_TOKEN:
            return{
                ...state,
                token:action.token
            }
        case actionTypes.FORM_SUBMIT:
             return{
                ...state,
                contact:action.contact,
                firstName:action.firstName,
                lastName:action.lastName,
                data:action.data
            };
        default:
                return state;
        }
    }

    export default reducer;