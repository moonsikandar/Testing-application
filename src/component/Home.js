import React, { useEffect } from 'react'
import Posts from '../redux/components/Posts'
import PostsForm from '../redux/components/PostsForm'
const Home = () => {
  
  return (
    <div>
      <h1>fetching data using redux</h1>
      <PostsForm/>
      <hr></hr>
      <Posts></Posts>
    </div>
  )
}

export default Home