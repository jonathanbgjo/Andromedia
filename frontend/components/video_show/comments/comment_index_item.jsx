import React from 'react'
import { Link } from 'react-router-dom'
import { dateUploaded } from '../../videos_index/video_index_item'

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let dateString = dateUploaded(this.props.comment.created_at)
        // console.log(this.props.comment)
        return(
            <div className = "commentIndexItem" >
                <img src={window.pfp} alt="pfp" className="dropPfp" />

                <div className="commentIndexItemText">
                    <p className="commentAuthor"> {this.props.comment.author} <span className="commentDate">{dateString} </span></p>
                    <p> {this.props.comment.body }</p>
                </div>
            </div>
        )
    } 
}
export default CommentIndexItem