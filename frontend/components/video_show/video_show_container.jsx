import { connect } from 'react-redux';
import React from 'react';
import VideoShow from './video_show.jsx'
import { fetchVideo } from '../../actions/video_actions'
const mapStateToProps = (state, {match}) => {
    const videoId = parseInt(match.params.videoId);
    // const video = selectVideo(state.entities, videoId);
    // const comments = selectCommentsForVideo(state.entities, video);
    // console.log(videoId)
    return {
        //params.match.id
        video:state.entities.videos[videoId]
        // currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchVideo: (id) => dispatch(fetchVideo(id))
    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
