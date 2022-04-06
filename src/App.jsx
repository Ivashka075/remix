import React, { useState, useEffect } from "react";
import { PostsList } from "./components/PostsList";
import { Layout, Menu, Button, Breadcrumb, Pagination } from "antd";
import logo from "./assets/222.png";
import api from "./utils/Api";

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
     },[ posts ]
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
              <PostsList props={posts} enterUser={enterUser} onPostLike={therePostLike}/>
              <Pagination defaultCurrent={1} total={50} />
          </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};
//
        {/* <Breadcrumb>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb> */}
// import styled from 'styled-components';

// import { Header } from "./components/Header";
// import { PostsList } from "./components/PostsList";
