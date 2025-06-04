import { useState } from "react";

function LikeButton({initiallyLiked=false}){
    const [liked, setLiked] = useState(initiallyLiked)
    const toggleLike =()=>{
        setLiked(!liked)
    }
    return(
        <>
        <div>
            <button onClick={toggleLike} 
            className={`mt-4 text-md transition-all duration-200 
                      ${liked ? 'text-red-500' :'text-gray-400'}`}>
                        {liked?"❤️ Liked":"🤍 Like"}
                        </button>
        </div>
        
        
        </>
    )
}
export default LikeButton;