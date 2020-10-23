import React from 'react'
import { Link } from 'react-router-dom'
const VideoShowItem = ({ video }) => {
    let dateString = dateUploaded(video.created_at)
    let temp = ""
    if (video.title.length > 40) {
        temp = video.title.substr(0, 37).concat("...")
    } else {
        temp = video.title
    }
    return (
        <div className="videoShowItem">
            <Link to={`/videos/${video.id}`}>
                <img src={video.thumbnailUrl} className="showItemThumbnail" />
            </Link>
            <div className="showItemVideoDetails">
                <div className="videoShowItemText">
                    <h4 className="videoShowItemTitle"><Link to={`/videos/${video.id}`}>{temp}</Link></h4>
                    <Link to={`/user/${video.uploader.id}`} className="videoUploader"> {video.uploader.username}</Link>
                    <div className="videoShowItemStats">
                        <p className="videoShowItemViews">Views: {video.views}  </p>
                        <p>▫</p>
                        <p className="showItemUploadDate"> {dateString}</p>
                    </div>
                </div>
            </div>



        </div>
    )
}
export const dateUploaded = (date) => {
    let now = new Date()
    let then = new Date(date)
    let hoursInMin = (then.getHours() - now.getHours()) * 60
    let seconds = Math.abs(((then.getMinutes() - now.getMinutes()) + hoursInMin) * 60) + (then.getSeconds() - now.getSeconds())
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
    else { return "really long time ago" }
}
export default VideoShowItem