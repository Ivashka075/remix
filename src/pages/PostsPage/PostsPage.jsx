import React from "react";
import { PostsList } from "../../components/PostsList/index";
import { Pagination } from "antd";


export const PostsPage = ( { posts, therePostLike } ) => {
  return (
    <>
              <PostsList props={posts} onPostLike={therePostLike}/>
              <Pagination defaultCurrent={1} total={50} />
    </>
  );
};
