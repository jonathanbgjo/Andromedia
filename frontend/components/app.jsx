import React from 'react';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';
import NavContainer from './nav/nav_container'
import ProfileContainer from './profile/profile_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import VideoIndexContainer from './videos_index/video_index_container';
import VideoShowContainer from './video_show/video_show_container'
import SideContainer from './nav/side_container'
import VideoCreateContainer from './video_create_upload/video_create_container'
import VideoUpdateContainer from './video_create_upload/video_update_container'
import SearchContainer from './search/search_container'
const App = () => {
    return (
    <div>
            <NavContainer/>
            <Route exact path ="/" component={SideContainer} />
        <Switch>
            <ProtectedRoute path="/videos/new" component={VideoCreateContainer} />
            <ProtectedRoute path="/videos/:videoId/edit" component={VideoUpdateContainer} />
            <Route path="/videos/:videoId" component={VideoShowContainer} />
            {/* <Route path="/user/:userId" component={ProfileContainer} /> */}
            <Route path="/search/:query" component={SearchContainer} />
            <Route exact path="/" component={VideoIndexContainer} />
            <Redirect to="/" path="*"/>
        </Switch>
    </div>
    )
};

export default App;
