import { useEffect, useState } from 'react'
import axios from 'axios'
import Grid from '../components/Grid'

const Post = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    axios
      .get('http://localhost:8080/api/posts', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setItems(response.data['hydra:member'])
      })
      .catch(e => {
        console.log(e.response.data)
      })
  }, [])

  return (
    <>
      <section>
        <h1>Posts</h1>

        <Grid items={items} />
      </section>
    </>
  )
}

export default Post
