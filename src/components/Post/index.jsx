import { Card } from "antd";
import React from "react";
import style from "./index.module.css";
import api from "../../utils/Api";
import save from "./img/12.png";
// import cname from "classnames";



export const Post = ({ enterUser, onPostLike, title, name, about, text, tags, created_at, updated_at, likes, _id}) => {
    
const isLiked = likes.some( id => id === enterUser._id);

function clickLike(){
   onPostLike({_id, likes})
}


   const deletePost = ()=>{
       api.delPost(_id)
   } 
    
    return(
   <Card className={style.card}>
        <h1>{title}</h1>
        <div>{name}</div>
        <div>{about}</div>
        <div>{text}</div>
        <div>{tags}</div>
        <div>{created_at}</div>
        <div>{updated_at}</div>
        <div>{`${likes.length} likes`}</div>
        <button onClick={deletePost}>Удалить историю</button>
        <div>
           <button onClick={clickLike} className={!isLiked ? style.buticon : style.buticon_active}>
             <img  className={style.iconlike} src={save} alt="Like+"/>
           </button> 
        </div>
    </Card>
    )
}