import React, { useEffect } from "react";
import style from "./Posts.module.css";
import { fetchPosts } from "../action/postAction";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_POSTS } from "../action/type";
const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((posts) => posts.posts.items);

  useEffect(() => {
    fetchPosts()
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        dispatch({
          type: FETCH_POSTS,
          payload: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className={style.posts}>
      {posts &&
        posts.map((posts) => {
          return (
            <div key={posts.id}>
              <h4>
                {posts.id}. {posts.title}
              </h4>
              <p>{posts.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
