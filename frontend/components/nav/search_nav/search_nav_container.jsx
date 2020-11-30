import { connect } from 'react-redux';
import React from 'react';
import Search from './search_nav.jsx'
import {fetchVideos } from '../../../actions/video_actions'
const mapStateToProps = (state, { match }) => {
    return {
        currentUser: state.entities.users[state.session.id],
        videos: state.entities.videos,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchVideos: (query) => dispatch(fetchVideos(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
