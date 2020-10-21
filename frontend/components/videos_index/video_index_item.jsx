import React from 'react'
import {Link} from 'react-router-dom'
// import Datetime from 'react-datetime';
const VideoIndexItem = ({video}) =>{
    // console.log(video)
    let dateString = dateUploaded(video.created_at)
    let temp = ""
    if(video.title.length > 40){
        temp = video.title.substr(0,37).concat("...")
    }else{
        temp = video.title
    }
    return(
        <div className="videoIndexItem">
            <Link to={`/videos/${video.id}`}>
                <img src={video.thumbnailUrl} className = "thumbnail"/>
            </Link>
            <div className="videoDetails">
                <Link to={`/user/${video.uploader.id}`} className="indexPfp"> <img src={window.pfp} alt="pfp" className="pfp" /> </Link>
                <div className="videoIndexItemText">
                    <h4 className="videoTitle"><Link to={`/videos/${video.id}`}>{temp}</Link></h4>

                    <p className="videoUploader"><Link to={`/user/${video.uploader.id}`}> {video.uploader.username}</Link></p>
                    <div className="videoStats">
                        <p className="videoViews">Views: {video.views}  </p>
                        <p>▫ </p>
                        <p className="uploadDate"> {dateString}</p>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}
export const dateUploaded = (date) => {
    let now = new Date()
    let then = new Date(date)
    let hours = then.getHours() - now.getHours() * 60
    let seconds = Math.abs(((then.getMinutes() - now.getMinutes()) + hours )* 60)
    if (seconds <= 1) { return "just now"; }
    else if (seconds < 20) { return seconds + " seconds ago"; }
    else if (seconds < 40) { return "half a minute ago"; }
    else if (seconds < 60) { return "less than a minute ago"; }
    else if (seconds <= 90) { return "one minute ago"; }
    else if (seconds <= 3540) { return Math.round(seconds / 60) + " seconds ago"; }
    else if (seconds <= 5400) { return "1 hour ago"; }
    else if (seconds <= 86400) { return Math.round(seconds / 3600) + " hours ago"; }
    else if (seconds <= 129600) { return "1 day ago"; }
    else if (seconds < 604800) { return Math.round(seconds / 86400) + " days ago"; }
    else if (seconds <= 777600) { return "1 week ago"; }
    else { return "really long time ago"}
}
export default VideoIndexItem