import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'
export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img src='assets/gift.png' alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Pola Foster </b>
            and
            <b> 3 other friends</b>
            have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }
  const ProfileRightBar = () => {
    return (
      <>
        <div className='ProfileRightBar'>
          <h4 className='rightbarTitle'>User information</h4>
          <div className='rightbarInfo'>
            <div className='rightbarInfoItem'>
              <span className='rightbarInfoKey'>City:</span>
              <span className='rightbarInfoValue'>New York</span>
            </div>
            <div className='rightbarInfoItem'>
              <span className='rightbarInfoKey'>From:</span>
              <span className='rightbarInfoValue'>Madrid</span>
            </div>
            <div className='rightbarInfoItem'>
              <span className='rightbarInfoKey'>Relationship:</span>
              <span className='rightbarInfoValue'>Single</span>
            </div>
          </div>
          <h4 className='rightbarTitle'>User friends</h4>
          <div className='rightbarFollowings'>
            <div className='rightbarFollowing'>
              <img
                src={`${PF}person/1.jpeg`}
                alt=''
                className='rightbarfollwingImg'
              />
              <span className='rightbarfollowingName'>John Carter</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src={`${PF}person/2.jpeg`}
                alt=''
                className='rightbarfollwingImg'
              />
              <span className='rightbarfollowingName'>John Carter</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src={`${PF}person/3.jpeg`}
                alt=''
                className='rightbarfollwingImg'
              />
              <span className='rightbarfollowingName'>John Carter</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src={`${PF}person/4.jpeg`}
                alt=''
                className='rightbarfollwingImg'
              />
              <span className='rightbarfollowingName'>John Carter</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src={`${PF}person/5.jpeg`}
                alt=''
                className='rightbarfollwingImg'
              />
              <span className='rightbarfollowingName'>John Carter</span>
            </div>
            <div className='rightbarFollowing'>
              <img
                src={`${PF}person/6.jpeg`}
                alt=''
                className='rightbarfollwingImg'
              />
              <span className='rightbarfollowingName'>John Carter</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightBar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
