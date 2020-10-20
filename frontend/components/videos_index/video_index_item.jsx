import React from 'react'
import {Link} from 'react-router-dom'

const VideoIndexItem = ({video}) =>{
    return(
        <div className="videoIndexItem">
            <Link to={`/video/${video.id}`} className = "videoIndexItem">
                <img src={video.thumbnailUrl} className = "thumbnail"/>
            </Link>
            <p className ="videoTitle"><Link to={`/video/${video.id}`}>{video.title}</Link></p>
            <p className ="videoUploader"><Link to={`/user/${video.uploader.id}`}> {video.uploader}</Link></p>
            <p>Views: {video.views}</p>
        </div>
    )
}

export default VideoIndexItem