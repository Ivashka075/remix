import { Card } from "antd";
import React from "react";
import style from "./index.module.css";
import api from "../../utils/Api";
// import imgLike from "./img/save.svg";



export const Post = ({title, name, about, text, tags, created_at, updated_at, likes, _id}) => {
   const isLiked = false;
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
        {/* <div><img src={imgLike}/></div> */}
    </Card>
    )
}
