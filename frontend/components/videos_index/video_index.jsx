import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item.jsx'
class VideoIndex extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchVideos();
    }
    render(){
            let videos = Object.values(this.props.videos).map( (video) => {
            return <VideoIndexItem key={video.id} video={video} />
        })
        
        return(
            <div className ="videoIndexContainer">{videos}</div>
        )
    }
}

export default VideoIndex