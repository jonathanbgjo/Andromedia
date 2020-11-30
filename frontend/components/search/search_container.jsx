import { connect } from 'react-redux';
import React from 'react';
import search from './search'
import { fetchVideos } from '../../actions/video_actions'
const mapStateToProps = ({ entities: { videos } }, { match }) => {
    const query = match.params.query || "";
    return {
        videos: videos,
        query: query
        // currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    fetchVideos: (query) => dispatch(fetchVideos(query))
    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(search);
