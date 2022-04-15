import React, { useState, useEffect } from "react";
import api from "../../utils/Api";
import { PostInfo } from "../../components/PostInfo/PostInfo";
import { useParams } from "react-router-dom";



export const PostPage = ( { therePostLike } ) => {

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
              <PostInfo {...PostIn} onPostLike={therePostLike}/>
    </>
  );
};