import { combineReducers } from 'redux';
import videos from './videos_reducer'
import users from './users_reducer';
import comments from './comment_reducers'
export default combineReducers({
    users,
    comments,
    videos,
});
