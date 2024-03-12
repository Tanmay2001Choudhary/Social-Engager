import './share.css'
import { PermMedia, Room, Label, EmojiEmotions } from '@material-ui/icons'
export default function share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img className='shareProfileImg' src='/assets/person/1.jpeg' alt='' />
          <input
            placeholder="What's in your mind Safak"
            className='shareInput'
          />
        </div>
        <hr className='shareHr' />
        <div className='shareBottom'>
          <div className='shareOptions'>
            <div className='shareOption'>
              <PermMedia htmlColor='#ff2e63' className='shareIcon' />
              <span className='shareOptionText'>Photo or Video</span>
            </div>
            <div className='shareOption'>
              <Label htmlColor='#26a69a' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className='shareOption'>
              <Room htmlColor='#ffd54f' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className='shareOption'>
              <EmojiEmotions htmlColor='#4BC0C0' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>
          <button className='shareButton'>Share</button>
        </div>
      </div>
    </div>
  )
}
