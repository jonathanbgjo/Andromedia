import React from 'react'
import CommentIndexItem from './comment_index_item.jsx'

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            body: ""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            body: e.currentTarget.value
        })
    }
    handleSubmit(){
        let comment = this.state
    }
    componentDidMount(){
        this.props.fetchComments(this.props.video.id)
    }

    render(){
        let comments = Object.values(this.props.comments).map((comment) => {
            return <CommentIndexItem key={comment.id} comment={comment} />
        })
        
        return(
            <div className = "commentsContainer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    value={this.state.body} 
                    onChange={e=>this.handleChange(e)}
                    placeholder="Enter Comment here"
                    />
                    <input type="submit" value="create comment"/>
                </form>
                {comments}
            </div>
        )
    }
}

export default CommentIndex;