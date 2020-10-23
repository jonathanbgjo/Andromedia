import { connect } from 'react-redux';
import React from 'react';
import VideoForm from './video_form.jsx'
import {fetchVideo, updateVideo, deleteVideo } from '../../actions/video_actions'
// import { fetchVideo } from '../../util/video_api_util.js';
const mapStateToProps = (state, ownProps) => {
    let video;
    if(state.entities.videos[ownProps.match.params.videoId]){
        video = Object.assign(state.entities.videos[ownProps.match.params.videoId],{videoFile:null, thumbnailFile:null})
    }else{
        video = null;
    }
    return {
        video: video,
        formType: "Update Video",
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => ({
    action: (video,videoId) => dispatch(updateVideo(video, videoId)),
    deleteVideo: videoId=>dispatch(deleteVideo(videoId)),
    fetchVideo: (id) => dispatch(fetchVideo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
