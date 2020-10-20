import { combineReducers } from 'redux';
import videos from './videos_reducer'
import users from './users_reducer';

export default combineReducers({
    users,
    videos,
});
