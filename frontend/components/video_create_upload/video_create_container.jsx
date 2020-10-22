import { connect } from 'react-redux';
import React from 'react';
import VideoForm from './video_form.jsx'
import { fetchVideo, createVideo } from '../../actions/video_actions'
const mapStateToProps = (state) => {
    // const videoId = parseInt(match.params.videoId);
    // const video = selectVideo(state.entities, videoId);
    // const comments = selectCommentsForVideo(state.entities, video);
    // console.log(videoId)
    return {
        //params.match.id
        video: {
            title: "",
            description: "",
            thumbnailFile: null,
            videoFile: null,
        },
        formType: "Upload Video",
        currentUserId: state.session.id
        // currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    action: video => dispatch(createVideo(video)),
    fetchVideo: (id) => dispatch(fetchVideo(id)),

    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
