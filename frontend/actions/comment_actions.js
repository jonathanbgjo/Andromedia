import * as CommentAPIUtil from '../util/comment_api_util'
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const REMOVE_COMMENT = "REMOVE_COMMENT"
export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})
export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})
export const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
})

export const fetchComments = videoId => dispatch => CommentAPIUtil.fetchComments(videoId)
    .then(comments => dispatch(receiveComments(comments)))
export const createComment = comment => dispatch => CommentAPIUtil.createComment(comment)
    .then(res => dispatch(receiveComment(res)))
export const deleteComment = comment => dispatch => CommentAPIUtil.deleteComment(comment)
    .then(() => dispatch(removeComment(comment)))