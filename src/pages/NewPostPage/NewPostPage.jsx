import React from "react";
import api from "../../utils/Api";
import { NewPostForm } from "../../components/NewPostForm/NewPostForm";
import { useParams } from "react-router-dom";

// const postId = '62559056104f3e8396833966';


export const NewPostPage = ({funEnterNewPost, formPostNewPost}) => {

  return (
    <>
              <NewPostForm funEnterNewPost={funEnterNewPost} formPostNewPost={formPostNewPost}/>
    </>
  );
};