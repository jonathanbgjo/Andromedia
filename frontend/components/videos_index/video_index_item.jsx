import React from 'react'
import {Link} from 'react-router-dom'
// import Datetime from 'react-datetime';
const VideoIndexItem = ({video}) =>{
    // let date = new Date()
    // console.log(date)
    // console.log(video.created_at.getTime());
    // const diff = date.diff(video.created_at)
    return(
        <div className="videoIndexItem">
            <Link to={`/videos/${video.id}`}>
                <img src={video.thumbnailUrl} className = "thumbnail"/>
            </Link>
            <div className="videoDetails">
                <Link to={`/user/${video.uploader_id}`} className="indexPfp"> <img src={window.pfp} alt="pfp" className="pfp" /> </Link>
                <div className="videoIndexItemText">
                    <h4 className="videoTitle"><Link to={`/videos/${video.id}`}>{video.title}</Link></h4>

                    <p className="videoUploader"><Link to={`/user/${video.uploader_id}`}> {video.uploader}</Link></p>
                    <div className="videoStats">
                        <p className="videoViews">Views: {video.views}  </p>
                        <p>▫ </p>
                        <p className="uploadDate"> {video.created_at}</p>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default VideoIndexItem