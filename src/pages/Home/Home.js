import React, { useState } from 'react'
import Formulario from '../../components/Formulario'
import Contador from '../../components/Contador'
import axios from 'axios'
import { useEffect } from 'react'

const Home = () => {
  const [posts, setPosts] = useState([])

  // Con .then
  const obtenerPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setPosts(response.data);
    })
  }

  // Con async/await
  const getPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const info = response.data
    setPosts(info)
  }


  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="container border">
      <Formulario />
      <Contador numero={20} />
      {
        posts.length > 0 ?
          posts.map(post => (
            <p key={post.id}>{post.id}</p>
          ))
          :
          <p>No hay posts</p>
      }
    </div>
  )
}

export default Home