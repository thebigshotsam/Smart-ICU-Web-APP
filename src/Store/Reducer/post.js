import * as actionTypes from "../Actions/actions";
const initialState={
    post:null,
    posts:[],
    error:false,
    loading:true
}

const reducer =(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.FETCH_POST:
            return{
                ...state,
                posts:action.posts,
                loading:false
            };
        case actionTypes.UPLOAD_POST:
            return{
                ...state,
                loading:true
            };
        case actionTypes.VIEW_POST:
            return{
                ...state,
                post:action.post
            }; 
        default: return state;       
   }
}
export default reducer;