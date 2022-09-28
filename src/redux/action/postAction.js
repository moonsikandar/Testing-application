import { FETCH_POSTS, NEW_POSTS } from "./type";

export const fetchPosts = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts");
};

export const createPosts = async (postData) => {
  // console.log("creatingPOst....");
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  });
};
