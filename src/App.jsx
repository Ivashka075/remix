import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, } from "antd";
import logo from "./assets/222.png";
import api from "./utils/Api";
import { PostsPage } from "./pages/PostsPage/PostsPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { Route, Routes } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const menuData = ["Главная", "Истории", "Git"];

export const App = () => {

  const [posts, setPosts] = useState([]);
  const [ enterUser, setUser ] = useState({});
  

  useEffect ( ()=> { 
    Promise.all([ api.getInfoUser(), api.getPosts() ])
      .then(([ userData, postsData ]) => {
          setUser(userData)
          setPosts(postsData)
      } 
      )
     },[]
  )


  const styleHeader = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  };

  function therePostLike({_id, likes}){
    const isLiked = likes.some( id => id === enterUser._id )
      api.likeStatusFun(_id, isLiked)
        .then((newPost)=> {
          const newPostState = posts.map( pos => { 
            console.log('Пост с сервера', newPost);
            console.log('Пост из стейта в пререборе', pos);
            return pos._id === newPost._id ? newPost : pos 
          })

          setPosts(newPostState);
        })
  }
  return (
    <>
      <Layout>
        <Header style={styleHeader}> 
          <div className="logodiv">
            <img src={logo} alt="logo" className="logopic" />
          </div>
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
            {new Array(3).fill(null).map((_, index) => {
              const key = index + 1;
              return <Menu.Item key={key}>{`${menuData[key - 1]}`}</Menu.Item>;
            })}
          </Menu>
          <div className="userNameStyle">{`В сети ${enterUser.name}`}</div>

        </Header>

        <Content>
              <Button onClick={ () => console.log("Есть контакт") } className="buttonStyle">Добавить историю
              </Button>

              <Routes>
                <Route
                  path="/" element={
                    <PostsPage 
                    posts={posts} 
                    therePostLike={therePostLike} 
                    enterUser={enterUser}
                   />
                  }
                />

                <Route
                  path="/post/:postId" element={
                    <PostPage 
                    enterUser={enterUser} 
                    therePostLike={therePostLike}
                    />
                  }
                />

                <Route
                    path="*" element={<h1>Страница не найдена</h1>}
                />

              </Routes>
              
              


          </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};
