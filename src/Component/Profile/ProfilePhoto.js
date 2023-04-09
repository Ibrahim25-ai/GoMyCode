
import profileImage from "./Image/profile.jpg"
   
   
   const ProfilePhoto = () => {
    return <img src={profileImage} className="my-profile pill rounded m-5" alt="myprofile" width={200} />;
   };
   export default ProfilePhoto;