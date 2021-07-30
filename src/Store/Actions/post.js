import * as actionTypes from "../Actions/actions";
import Axios from "axios";

export const getPosts=(posts)=>{
    return {
        type:actionTypes.FETCH_POST,
        posts:posts
    }
}
export const createPost=(formData)=>{
    return {
        type:actionTypes.UPLOAD_POST
    }
}
export const getPost=(post)=>{
    return {
        type:actionTypes.VIEW_POST,
        post:post
    }
}
export const likePost=(postId)=>{
    return {
        type:actionTypes.LIKE_POST
    }
}
export const failed =() =>{
    return{
        type:actionTypes.POST_FAILED
    }
}
export const onGetPosts=()=>{
    return dispatch =>{
        Axios.get("http://localhost:8080/posts")
    .then(res=>{
            dispatch(getPosts(res.data.posts))
        })
    .catch(err=>{
        console.log(err);
        dispatch(failed());
    });       

    }
}
export const onCreatePost=(formData)=>{
    for(var key of formData.entries()){
        console.log(key[0]+" "+key[1]);
    }
    return dispatch=>{
        fetch("http://localhost:8080/createpost",{
        method:"POST",
        body:formData,
        headers:{}
      })
    .then(res=>{
             dispatch(createPost());
    })
    .catch(err=>{
        console.log(err);
        dispatch(failed());
    });
    }    
}
export const onLikePost=(postId)=>{
    return dispatch =>{
        Axios.get()
        .then(res=>{
        dispatch(likePost())
    })
    .catch(err=>{
        console.log(err);
        dispatch(failed());
    });
    }
}
export const onGetPost=(postId)=>{
    return dispatch =>{
    Axios.get()
    .then(res=>{
        dispatch(getPost());
    })
    .catch(err=>{
        console.log(err);
        dispatch(failed());
    });
}
}
