import LikeButton from "./likebutton";

function PostCard({profileImage,username,content,isLiked}){
    return(
        <>
        <div className=" bg-white w-72 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4">
            <img src={profileImage} alt={username} className="h-60 w-full object-cover rounded-lg" />
            <p className="text-md font-semibold capitalize text-gray-900 m-2">{username}</p>
            <p className="text-sm m-2 text-center text-gray-700 italic">{content}</p>
            
            <LikeButton initiallyLiked ={isLiked}/>
        </div>
       
        
        </>
    )
}
export default PostCard;