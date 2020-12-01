import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from '../videos_index/video_index_item.jsx'
class search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }
    componentDidMount() {        
        console.log(this.props.query + "this is the query")
        this.props.fetchVideos(this.props.query);
        // this.props.history.push(`/search/${this.props.query}`)
    }
    componentDidUpdate(prevProps){
        console.log(this.props.history.location.pathname +" history location pathname")
        console.log(prevProps.location.pathname)
        console.log(this.props.query + " query")
        console.log(Object.size(this.props.videos))
        if (this.props.history.location.pathname != prevProps.location.pathname){
            if (Object.size(this.props.videos) <= 0 && this.state.flag == false) {
                console.log("first")
                this.props.fetchVideos(this.props.query);
                this.setState({ flag: true })
            } else {
                if (Object.size(this.props.fetchVideos(this.props.query)) === 0) {
                    console.log("second")
                    this.setState({ flag: true })
                }
            }
        }
        
        // console.log(prevProps.location.pathname + " prevpropslocation pathname")
        // console.log(prevProps)
        // console.log(this.props.history.location.pathname === prevProps.location.pathname)
        // console.log(this.props.history.location.pathname != prevProps.location.pathname)
        // if (this.props.history.location.pathname != prevProps.location.pathname){
        //     this.props.fetchVideos(this.props.query);
        //     this.props.history.push(`/search/${this.props.query}`)
        // }
        // this.props.fetchVideos(this.props.query);

        // if(this.props.history)
        // this.props.fetchVideos(this.props.query);
    }
    render() {
        // console.log(this.props.videos)
        let videos = Object.values(this.props.videos).map((video) => {
            return <VideoIndexItem key={video.id} video={video} />
        })
        let size = Object.size(this.props.videos)
        return (
            <div> 
                { size >= 1 ? <div className="videoIndexContainer"> {videos} </div> : <p className="noResult"> No videos matches your search</p>}
            </div>
            
        )
    }
}
Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
export default search