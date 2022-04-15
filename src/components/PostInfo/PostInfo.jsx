// import { Card } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./styles.module.css"


export const PostInfo = ({ onPostLike, title, name, about, text, tags, created_at, updated_at, likes, _id}) => {
    const navigate = useNavigate();

    return(
      //   <button onClick={clickLike} className={!isLiked ? style.buticon : style.buticon_active}>
      //        <img  className={style.iconlike} src={save} alt="Like+"/>
      //      </button> 
   <>
       <div className={s.postinfo} >
          <a href="#" className={s.buttonback} onClick={()=> navigate(-1)}>Назад</a>
          <h1>{title}</h1>
          <div>{name}</div>
          <div>{about}</div>
          <div>Описание: {text}</div>
          <div>Теги: {tags}</div>
          <div>Дата создания: {created_at}</div>
          <div>Дата изменения: {updated_at}</div>
          <div>
              <button onClick={()=>console.log('эээээээ')}>Редактировать</button>
          </div>
       </div>
   </>
    )
}