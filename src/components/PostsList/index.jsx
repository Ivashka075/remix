import React from "react";
import { Post } from "../Post";
import stylePL from "./style.module.css";


export const PostsList = ({props}) => {
  
        return (
      <div className={stylePL.contentPost}>
        {props.map( (postsItem, index) => {
            return (<Post key={`${index}`} {...postsItem}/>)
        })}
        
      </div>   
    );
   };
