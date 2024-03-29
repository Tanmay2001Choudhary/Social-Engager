import './post.css'
import { MoreVert, Favorite } from '@material-ui/icons'
import axios from 'axios'
// import { Users } from '../../dummyData'
import { useEffect, useState } from 'react'
export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const fetchUser = async () => {
      // axios is used to make request
      const res = await axios.get(`users/${post.userId}`)
      setUser(res.data)
    }
    fetchUser()
  }, [])
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={user.profilePicture || PF + 'person/noAvatar.png'}
              alt=''
              className='postProfileImg'
            />
            <span className='postUsername'>{user.username}</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img src={PF + post.img} alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            {/* <ThumbUp
              className='likeIcon'
              htmlColor='#5890FF'
              onClick={likeHandler}
            /> */}
            <Favorite
              className='likeIcon'
              htmlColor='tomato'
              onClick={likeHandler}
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
