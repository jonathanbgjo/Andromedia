import React from 'react';
// import { Provider } from 'react-redux';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import NavContainer from './nav/nav_container'
import ProfileContainer from './profile/profile_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import VideoIndexContainer from './videos_index/video_index_container';
import VideoShowContainer from './video_show/video_show_container'
const App = () => {
    return (
    <div>
            {/* <Route path="/user/:userId" component={NavContainer} /> */}
            <NavContainer />
        <Switch>
            <Route path="/videos/:videoId" component={VideoShowContainer} />
            <Route path="/user/:userId" component={ProfileContainer} />
            <Route exact path="/" component={VideoIndexContainer} />
        </Switch>
    </div>
    )
};

export default App;
