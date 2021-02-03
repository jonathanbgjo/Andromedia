import React from 'react'
import { Link } from 'react-router-dom'
import { dateUploaded } from '../../videos_index/video_index_item'

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let dateString = dateUploaded(this.props.comment.created_at)
        let edited = this.props.comment.created_at != this.props.comment.created_at
        if ( edited) {
           let commentSting = <p className="commentAuthor"> {this.props.comment.author} <span className="commentDate">{dateString} </span> Edited</p>
        }else{
            let commentString = <p className="commentAuthor"> {this.props.comment.author} <span className="commentDate">{dateString} </span> </p>
        }
        console.log(this.props.comment)
        

        return(
            {commentString}
        )
    } 
}
export default CommentIndexItem