import React from 'react';
import { Player } from 'video-react';
import { Link } from 'react-router-dom';
import "../../../node_modules/video-react/dist/video-react.css";
import {dateUploaded} from '../videos_index/video_index_item.jsx'
import VideoShowItem from '../video_show/video_show_item.jsx'
class VideoShow extends React.Component {
    constructor(props) {
        super(props)
        // this.width = 800;
        // this.height = 800;
        // this.array = ["qwerqerqewr", "qrqwrqwrqw", "rqwrqrqrqwer", "wqrqwrqwr", "qwerq"]
    }
    componentDidMount() {
        // console.log(this.props.videoId)
        this.props.fetchVideo(this.props.match.params.videoId);
        this.props.fetchVideos();
    }
    
    //to refresh when you click a new video on the side.
    componentDidUpdate(prevProps){
        // console.log(prevProps.match.params.videoId);
        // console.log(this.props.match.params.videoId)
        if(prevProps.match.params.videoId !== this.props.match.params.videoId){
            this.props.fetchVideo(this.props.match.params.videoId);
        }
    }
    render() {
        let dateString = ""
        if(this.props.video){
            dateString = dateUploaded(this.props.video.created_at)
        }
        // console.log(this.props.videos)
        let videos = Object.values(this.props.videos).map((video) => {
            if(video.id === this.props.video.id){

            }
            else{
                return <VideoShowItem key={video.id} video={video} />
            }
        })
        // console.log(this.props)
        // console.log(this.props.currentUser)
        // console.log(this.props.video)
        // let video = this.props.video[0]
        if(!this.props.video){ return null}
        return (
        <div className="showPage">
            <div className="videoContainer">
                <Player
                    // playsInline
                    poster={this.props.video.thumbnailUrl}
                    src={this.props.video.videoUrl}
                    fluid={false}
                    className ="videoPlayer"
                    autoPlay={true}
                    // width={1275}
                    height={720}
                    >
                </Player>
                
                <p className="showTitle">{this.props.video.title}</p>
                <div className="showDetails">
                    <div >
                    <p>{this.props.video.views} Views  • {dateString}</p>
                    </div>
                    <div className="likesEditButton">
                        {this.props.currentUser.id === this.props.video.uploader.id ?
                        <Link className="editButton"  to={`/videos/${this.props.match.params.videoId}/edit`}> Edit Video</Link>
                        : ""
                        }
                        <p>[d 294K | q 21] - Likes placement bar</p>
                    </div>
                </div>
                <div className="showUnderVideo">
                <img src={window.pfp} alt="pfp" className="showPfp" />
                    <div className="userDescription">
                        <p className = "showUser">{this.props.video.uploader.username}</p>
                        <p>Description: {this.props.video.description}</p>
                    </div>
                </div>

                <div className="commentsContainer">
                    <p>Total Comments:</p>
                    <textarea> </textarea>

                    <p>All the comments</p>
                    <p>yesyes</p>
                    <p>comment 2</p>
                </div>

            </div>
                <div className="sideVideos">
                    {videos}
                </div>
        </div>
        )
    }
}

export default VideoShow