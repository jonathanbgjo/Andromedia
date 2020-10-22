import { connect } from 'react-redux';
import React from 'react';
import VideoForm from './video_form.jsx'
import {fetchVideo, updateVideo, deleteVideo } from '../../actions/video_actions'
// import { fetchVideo } from '../../util/video_api_util.js';
const mapStateToProps = (state, ownProps) => {
    // const videoId = parseInt(match.params.videoId);
    // const video = selectVideo(state.entities, videoId);
    // const comments = selectCommentsForVideo(state.entities, video);
    // console.log(videoId)
    let video;
    if(state.entities.videos[ownProps.match.params.videoId]){
        video = Object.assign(state.entities.videos[ownProps.match.params.videoId],{videoFile:null, thumbnailFile:null})
    }else{
        video = null;
    }
    // console.log(video)
    return {
        //params.match.id
        video: video,
        formType: "Update Video",
        currentUserId: state.session.id
        // currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    action: (video,videoId) => dispatch(updateVideo(video, videoId)),
    deleteVideo: videoId=>dispatch(deleteVideo(videoId)),
    fetchVideo: (id) => dispatch(fetchVideo(id)),

    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
