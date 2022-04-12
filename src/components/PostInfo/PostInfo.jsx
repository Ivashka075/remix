// import { Card } from "antd";
import React from "react";

import style from "./styles.module.css";
import api from "../../utils/Api";
import save from "./img/12.png";
import { useNavigate } from "react-router-dom";



export const PostInfo = ({ enterUser, onPostLike, title, name, about, text, tags, created_at, updated_at, likes, _id}) => {
    const navigate = useNavigate();

    return(
      //   <button onClick={clickLike} className={!isLiked ? style.buticon : style.buticon_active}>
      //        <img  className={style.iconlike} src={save} alt="Like+"/>
      //      </button> 
   <>
       <div>
          <a href="#" className="button-back" onClick={()=> navigate(-1)}>Назад</a>
          <h1>{title}</h1>
          <div>{name}</div>
          <div>{about}</div>
          <div>Описание: {text}</div>
          <div>Теги: {tags}</div>
          <div>Дата создания: {created_at}</div>
          <div>Дата изменения: {updated_at}</div>
       </div>
   </>
    )
}