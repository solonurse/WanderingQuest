import { useContext } from "react";
import { userContext } from "@/context/UserContext";
import DeleteUser from './DeleteUser';
import UserImage from './UserImage';
import Logout from "./Logout";

const Profile = () => {
  const user = useContext(userContext);

  return (
    <div className='flex flex-col gap-6 items-center bg-lime-300 py-4'>
      {user?.is_guest ? 
        null : <UserImage />
      }
      <div className="flex gap-3 mx-auto">
        <Logout />
        <DeleteUser />
      </div>
    </div>
  )
};

export default Profile;