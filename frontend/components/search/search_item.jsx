import React from 'react'
import { Link } from 'react-router-dom'
import { dateUploaded } from '../../components/videos_index/video_index_item'
const SearchItem = ({ video }) => {
    let dateString = dateUploaded(video.created_at)
    let temp = ""
    if (video.title.length > 40) {
        temp = video.title.substr(0, 37).concat("...")
    } else {
        temp = video.title
    }
    return (
        <div className="searchItemContainer">
            <Link to={`/videos/${video.id}`}>
                <img src={video.thumbnailUrl} className="showItemThumbnail" />
            </Link>
            <div className="searchItemDetails">
                <div className="searchItemText">
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
export default SearchItem