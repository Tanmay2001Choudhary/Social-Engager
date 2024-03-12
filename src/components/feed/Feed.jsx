import Share from '../share/share'
import Post from '../post/Post'
import './feed.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Feed() {
  const [posts, setPosts] = useState([])
  // const [text, setText] = useState([])
  // useEffect(() => {
  //   console.log('feed Rendered')
  // }, [text]) // given this because it will not render feed again and again
  useEffect(() => {
    const fetchPosts = async () => {
      // axios is used to make request
      const res = await axios.get('posts/timeline/65e20c367f920108378fc539')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <div className='feed'>
      {/* <input
        type='text'
        onChange={(e) => {
          setText(e.target.value)
        }}
      /> */}
      <div className='feedWrapper'>
        <Share />
        {/*{Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}*/}
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  )
}
