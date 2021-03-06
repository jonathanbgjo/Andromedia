import { RECEIVE_VIDEO, RECEIVE_VIDEOS, REMOVE_VIDEO } from '../actions/video_actions';


const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_VIDEOS:
            newState = action.videos
            return newState
        case RECEIVE_VIDEO:
            newState[action.video.id] = action.video
            return newState
        case REMOVE_VIDEO:
            delete newState[action.videoId]
            return newState

        default:
            return state;
    }
};

export default videosReducer;
