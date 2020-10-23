import { connect } from 'react-redux';
import React from 'react';
import VideoForm from './video_form.jsx'
import { fetchVideo, createVideo } from '../../actions/video_actions'
const mapStateToProps = (state) => {
    return {
        video: {
            title: "",
            description: "",
            thumbnailFile: null,
            videoFile: null,
        },
        formType: "Upload Video",
        currentUserId: state.session.id
    };
};

const mapDispatchToProps = dispatch => ({
    action: video => dispatch(createVideo(video)),
    fetchVideo: (id) => dispatch(fetchVideo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);
