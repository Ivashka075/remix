import { Card } from "antd";
import React from "react";
import style from "./index.module.css";


export const Post = ({title, name, about, text, tags, created_at, updated_at}) => {
    return(
   <Card className={style.card}>
        <h1>{title}</h1>
        <div>{name}</div>
        <div>{about}</div>
        <div>{text}</div>
        <div>{tags}</div>
        <div>{created_at}</div>
        <div>{updated_at}</div>
        "Это я"
    </Card>
    )
}
