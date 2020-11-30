import React from 'react';
import VideoIndexItem from '../../videos_index/video_index_item.jsx'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        };  
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {
        // this.props.fetchVideos("");
    }
    updateInputValue(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.props.history.push(`/${this.state.inputValue}`)
    }
    render() {
        // let videos = Object.values(this.props.videos).map((video) => {
        //     return <VideoIndexItem key={video.id} video={video} />
        // })

        return (
            // <div className="videoIndexContainer">{videos}</div>
            <div>
                <input value={this.state.inputValue} onChange={e => this.updateInputValue(e)} />
                <Link to={`/search/${this.state.inputValue}`} > Search</Link>
            </div>
        )
    }
}

export default Search