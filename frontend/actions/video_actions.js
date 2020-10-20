import * as VideoAPIUtil from '../util/video_api_util';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO= 'REMOVE_VIDEO';


const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
})
const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
})
const removeVideo = videoId => ({
    type: RECEIVE_VIDEO,
    videoId
})
export const fetchVideos = () => dispatch => VideoAPIUtil.fetchAllVideos()
    .then(videos => dispatch(receiveVideos(videos)))
    // ,
    // err => (dispatch(receiveErrors(err.responseJSON))))

export const fetchVideo = videoId => dispatch => VideoAPIUtil.fetchVideo(videoId)
    .then(video => dispatch(receiveVideo(video)))
    // ,
    // err => (dispatch(receiveErrors(err.responseJSON))))

export const updateVideo = videoId => dispatch => VideoAPIUtil.updateVideo(videoId)
    .then(video => dispatch(receiveVideo(video)))
    // ,
    //     err => (dispatch(receiveErrors(err.responseJSON))))

export const deleteVideo = video => dispatch => VideoAPIUtil.deleteVideo(video)
    .then(() => dispatch(removeVideo(video)))
    // ,
    //     err => (dispatch(receiveErrors(err.responseJSON))))