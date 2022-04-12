import React, { useState, useEffect } from "react";
import api from "../../utils/Api";
import { PostInfo } from "../../components/PostInfo/PostInfo";
import { useParams } from "react-router-dom";

// const postId = '62559056104f3e8396833966';


export const PostPage = ( { enterUser, therePostLike } ) => {

  const [ PostIn, setPostIn ] = useState([]);
  
  const { postId } = useParams();

  console.log(postId)


  useEffect ( ()=> { 
    api.getPostById(postId)
      .then((postsData ) => {
          setPostIn(postsData)
      } 
      )
     },[]
  )

  return (
    <>
              <PostInfo {...PostIn} enterUser={enterUser} onPostLike={therePostLike}/>
    </>
  );
};