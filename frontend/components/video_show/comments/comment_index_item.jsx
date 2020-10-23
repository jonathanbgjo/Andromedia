import React from 'react'
import { Link } from 'react-router-dom'
// import Datetime from 'react-datetime';

class CommentIndexItem extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "commentIndexItem" >
                <img src={window.pfp} alt="pfp" className="dropPfp" />

                <div className="commentIndexItemText">
                    <p className="commentAuthor"> {this.props.comment.author }</p>
                    <p> {this.props.comment.body }</p>
                </div>
            </div>
        )
    } 
}
export default CommentIndexItem