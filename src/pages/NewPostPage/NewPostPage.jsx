import React from "react";
import { NewPostForm } from "../../components/NewPostForm/NewPostForm";

export const NewPostPage = ({funEnterNewPost, formPostNewPost}) => {
  return (
    <>
              <NewPostForm funEnterNewPost={funEnterNewPost} formPostNewPost={formPostNewPost}/>
    </>
  );
};