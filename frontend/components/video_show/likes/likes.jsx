import React from 'react'
import { Link } from 'react-router-dom';

class Likes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        console.log(this.props)
    }
    handleChange(e) {
        this.setState({
            body: e.currentTarget.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.props.createComment(comment)
        this.props.likeVideo(video);
        this.setState({
            // body: ""
        })
        // this.props.fetchVideo(this.props.video.id)
    }
    componentDidMount() {
        // this.props.fetchComments(this.props.video.id)
    }
    // componentDidUpdate(prevProps){
    //     if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
    //         this.props.fetchComments(this.props.video.id)
    //     }
    // }
    render() {
        // let comments = Object.values(this.props.comments).map((comment) => {
        //     return <CommentIndexItem key={comment.id} comment={comment} />
        // })

        return (
            <div className="likesContainer">
            </div>
        )
    }
}

export default CommentIndex;