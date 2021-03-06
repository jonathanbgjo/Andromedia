import { REMOVE_COMMENT, RECEIVE_COMMENT, RECEIVE_COMMENTS} from '../actions/comment_actions'

const commentsReducer = (state= {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_COMMENTS:
            newState = action.comments
            return newState;
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.comment.id]
            return newState;
        default:
            return state;
    }
}

export default commentsReducer