import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, } from "antd";
import logo from "./assets/222.png";
import api from "./utils/Api";
import { PostsPage } from "./pages/PostsPage/PostsPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/contextUser";
import { NewPostPage } from "./pages/NewPostPage/NewPostPage";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const menuData = ["Главная", "Истории", "Git"];

export const App = () => {

  const [posts, setPosts] = useState([]);
  const [ enterUser, setUser ] = useState({});
  const [ enterPost, setEnterPost ] = useState([]);

  const enterNewPost = (newPostInfoNow) => {
    setEnterPost([...enterPost, newPostInfoNow])
  };
  

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
    const isLiked = likes.some( id => id === enterUser._id );
      api.likeStatusFun(_id, isLiked)
        .then((newPost)=> {
          const newPostState = posts.map( pos => { 
            return pos._id === newPost._id ? newPost : pos 
          })

          setPosts(newPostState);
        })
  }
  return (
    <UserContext.Provider value={enterUser}>
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
        <Link to={`/newpost`}>
              <Button onClick={ () => console.log("Есть контакт") } className="buttonStyle">Добавить историю
              </Button>
              </Link>

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
                  path="/newpost" element={
                    <NewPostPage funEnterNewPost={enterNewPost} formPostNewPost={api.postNewPost}
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
    </UserContext.Provider>
  );
};
