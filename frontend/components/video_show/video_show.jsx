import React from 'react';
import { Player } from 'video-react';
import { Link } from 'react-router-dom';
import "../../../node_modules/video-react/dist/video-react.css";
import {dateUploaded} from '../videos_index/video_index_item.jsx'
class VideoShow extends React.Component {
    constructor(props) {
        super(props)
        this.width = 800;
        this.height = 800;
    }
    componentDidMount() {
        // console.log(this.props.videoId)
        this.props.fetchVideo(this.props.match.params.videoId);
    }
    
    render() {
        let dateString = ""
        if(this.props.video){
            dateString = dateUploaded(this.props.video.created_at)
        }

        // console.log(this.props.video)
        // let video = this.props.video[0]
        if(!this.props.video){ return null}
        return (
            <div className="videoContainer">
                <Player
                    // playsInline
                    poster={this.props.video.thumbnailUrl}
                    src={this.props.video.videoUrl}
                    fluid={false}
                    className ="videoPlayer"
                    autoPlay={true}
                    width={1275}
                    height={720}
                    >
                </Player>
                
                <p className="showTitle">{this.props.video.title}</p>
                <div className="showDetails">
                    <div >
                    <p>{this.props.video.views} Views  • {dateString}</p>
                    </div>
                    <div ckassName="likes">
                        <p>d | b - Likes placement bar</p>
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

        )
    }
}

export default VideoShow