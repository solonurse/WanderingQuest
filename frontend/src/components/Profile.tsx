import DeleteUser from './DeleteUser'
import UserImage from './UserImage'

const Profile = () => {
  return (
    <div className='bg-lime-300 py-4'>
      <UserImage />
      <DeleteUser />
    </div>
  )
}

export default Profile;