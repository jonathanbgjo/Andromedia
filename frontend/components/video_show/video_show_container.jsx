import { connect } from 'react-redux';
import React from 'react';
import VideoShow from './video_show.jsx'
import { fetchVideo, fetchVideos} from '../../actions/video_actions'
import {fetchComments, createComment} from '../../actions/comment_actions'
const mapStateToProps = (state, {match}) => {
    const videoId = parseInt(match.params.videoId);
    return {
        video:state.entities.videos[videoId],
        currentUser: state.entities.users[state.session.id],
        videos:state.entities.videos,
        comments: state.entities.comments
    };
};

const mapDispatchToProps = dispatch => ({
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    fetchVideos: (query) => dispatch(fetchVideos(query)),
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);
