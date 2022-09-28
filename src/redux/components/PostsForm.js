import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createPosts } from "../action/postAction";
import { NEW_POSTS } from "../action/type";
import Posts from "./Posts";

const PostsForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  //  const  newPost= {
  //     title,
  //     body
  //   }
  // console.log(newPost,">.")

  const submitHandler = (e) => {
    e.preventDefault();

    createPosts()
      .then((res) => res.json())
      .then(() =>
        dispatch({
          type: NEW_POSTS,
          payload: { id: Date.now(), title, body },
        })
      )
      .catch((err) => console.log(err));

    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title : </label> <br />
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label>body : </label> <br />
          <textarea
            type="text"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostsForm;
