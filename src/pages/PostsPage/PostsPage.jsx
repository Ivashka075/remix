import React from "react";
import { PostsList } from "../../components/PostsList/index";
import { Pagination } from "antd";


export const PostsPage = ( { posts, therePostLike, enterUser } ) => {
  return (
    <>
              <PostsList props={posts} enterUser={enterUser} onPostLike={therePostLike}/>
              <Pagination defaultCurrent={1} total={50} />
    </>
  );
};
