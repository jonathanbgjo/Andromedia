import { connect } from 'react-redux';
import React from 'react';
import VideoIndex from './video_index.jsx'
// import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { videos }}) => {
    return {
        // currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    
    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
