import React, { useState } from "react";
import "./styles.css";
import api from "../../utils/Api";
import { useNavigate } from "react-router-dom";

export function NewPostForm({funEnterNewPost}) {
    const navigate = useNavigate();
    const [ newPost, setNewPost ] = useState({
        title: '',
        text: '',
        image: '',
        tags: ''
    })

    

    function handleChange(event) {
        if (event.target.name == "tags") {
            setNewPost({...newPost, [event.target.name] : event.target.value.split(" ") })
        }
        else {
            setNewPost({...newPost, [event.target.name] : event.target.value }) 
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        funEnterNewPost(newPost);
        console.log(newPost)
        api.postNewPost(newPost);
        setNewPost({
        title: '',
        text: '',
        image: '',
        tags: ''
        })
    }

    return(
        <div>
            <a href="#" className="button-back" onClick={()=> navigate(-1)}>Назад</a>
            <form onSubmit={handleSubmit} className="form__new-Post">
                <h2>Введите данные нового поста</h2>
                <input name="title" type='text' placeholder="Название поста" value={newPost.title} onChange={handleChange}/>
                <input name="text" type='text' placeholder="Текст" value={newPost.text} onChange={handleChange}/>
                <input name="image" type='text' placeholder="Адрес изображения" value={newPost.image} onChange={handleChange}/>
                <input name="tags" type='text' placeholder="Теги" value={newPost.tags} onChange={handleChange}/>
                <button>Отправить</button>
        </form>
        </div>
        
    )
}