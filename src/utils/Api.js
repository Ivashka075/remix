const onResponce = (responce) => {
  return responce.ok
    ? responce.json()
    : Promise.reject(`Ошибка ${responce.status}`);
};

class Api {
  constructor({ inUrl, inToken }) {
    this._inUrl = inUrl;
    this._inToken = `${inToken}`;
  }

  getInfoUser() {
    return fetch(`${this._inUrl}/users/me`, {
      headers: {
        authorization: this._inToken,
      },
    }).then(onResponce);
  }

  getPosts() {
    return fetch(`${this._inUrl}/posts`, {
      headers: {
        authorization: this._inToken,
      },
    }).then(onResponce);
  }

  delPost(postId) {
    return fetch(`${this._inUrl}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        authorization: this._inToken,
      },
    }).then(onResponce);
  }

  likeStatusFun(postId, isLike) {
    return fetch(`${this._inUrl}/posts/likes/${postId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: {
        authorization: this._inToken,
      },
    }).then(onResponce);
  }

  getPostById(postId) {
    return fetch(`${this._inUrl}/posts/${postId}`, {
      headers: {
        authorization: this._inToken,
      },
    }).then(onResponce);
  }

  postNewPost(bodyJSON) {
    return fetch(`${this._inUrl}/posts`, {
      method: 'POST',
      headers: {
        authorization: this._inToken,
        "Content-type": "application/json"
      },
      body: JSON.stringify(bodyJSON),
    }
    ).then((res)=>{
      if (res.ok) {
        return res.json();
    }
    else { return Promise.reject(res) }
    })
  }

  // updatePost( postId, bodyJSON ) {
  //   return fetch(
  //     `${this._inUrl}/posts/${postId}`, {
  //       method: 'PATCH',
  //       headers: {
  //         authorization: this._inToken,
  //         "Content-type": "application/json"
  //       },
  //       body: JSON.stringify({bodyJSON}),
  //     }
  //   ).then(onResponce);
  // }
}

const parametrs = {
  inUrl: "https://api.react-learning.ru",
  inToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYWQiLCJpYXQiOjE2NDcwMTM4ODUsImV4cCI6MTY3ODU0OTg4NX0.Ag7NaOBgyE6FJoygrKdtfmxsfVTnuZfMSuFKqzRMi2c",
};

const api = new Api(parametrs);

export default api;
