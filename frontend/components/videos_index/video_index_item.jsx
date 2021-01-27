import React from 'react'
import {Link} from 'react-router-dom'
const VideoIndexItem = ({video}) =>{
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
            <div className="indexVideoDetails">
                <Link to={`/user/${video.uploader.id}`} className="indexPfp"> 
                    <img src={window.pfp} alt="pfp" className="pfp" /> 
                </Link>
                <div className="videoDetails">
                    <div className="videoIndexItemText">
                        <h4 className="videoTitle"><Link to={`/videos/${video.id}`}>{temp}</Link></h4>
                        <Link to={`/user/${video.uploader.id}`} className="videoUploader"> {video.uploader.username}</Link>
                        <div className="videoStats">
                            <p className="videoViews">Views : {video.views}  </p>
                            <p>▫ </p>
                            <p className="uploadDate"> {dateString}</p>
                        </div>

                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}
export const dateUploaded = (date) => {
    let now = new Date()
    let then = new Date(date)
    // console.log(now)
    // console.log(then)
    let diff = Math.ceil((now-then) / (1000 * 60 * 60 * 24))
    if(diff <= 1){
        return "just now"
    }
    else { return (diff + " days ago") }

    // return (Math.ceil(diff / (1000 * 60 * 60 * 24)) + " days ago")
    let hoursInMin = (now.getHours() - then.getHours()) * 60
    let seconds = Math.abs(((now.getMinutes() - then.getMinutes()) + hoursInMin )* 60) + (now.getSeconds()-then.getSeconds())
    if (diff <= 1) { return "just now"; }
    else if (diff < 20) { return seconds + " seconds ago"; }
    else if (diff < 40) { return "half a minute ago"; }
    else if (diff < 60) { return "less than a minute ago"; }
    else if (diff <= 90) { return "one minute ago"; }
    else if (diff <= 3540) { return Math.round(seconds / 60) + " seconds ago"; }
    else if (diff <= 5400) { return "1 hour ago"; }
    else if (diff <= 86400) { return Math.round(seconds / 3600) + " hours ago"; }
    else if (diff <= 129600) { return "1 day ago"; }
    else if (diff < 604800) { return Math.round(seconds / 86400) + " days ago"; }
    else if (diff <= 777600) { return "1 week ago"; }
    else { return (Math.ceil(diff / (1000 * 60 * 60 * 24)) + " days ago")}
}
export default VideoIndexItem