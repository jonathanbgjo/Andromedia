import { connect } from 'react-redux';
import React from 'react';
import VideoShow from './video_show.jsx'
import { fetchVideo, fetchVideos } from '../../actions/video_actions'
const mapStateToProps = (state, {match}) => {
    const videoId = parseInt(match.params.videoId);
    // const video = selectVideo(state.entities, videoId);
    // const comments = selectCommentsForVideo(state.entities, video);
    // console.log(videoId)
    return {
        //params.match.id
        video:state.entities.videos[videoId],
        currentUser: state.entities.users[state.session.id],
        videos:state.entities.videos
    };
};

const mapDispatchToProps = dispatch => ({
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    fetchVideos: () => dispatch(fetchVideos())

    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
