import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

// import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

const App = () => {
    let state = 1;
    return (
    <div>
        <header>
            <nav className="top-nav">
                <section className="nav-container-logo">    
                    <img src="" alt="logo" className="welcome--logo" />
                    <Link to="/">
                        <h1>Andromedia</h1>
                    </Link>
                </section>

                <section className ="search">
                    <input type="text"/>Searchbar goes here
                </section>
                {/* SearchContainer */}


                {/* <DropdownButton></DropdownButton> */}
                <section className="nav-container">
                    <Link to={'/'}>DROPDOWN?</Link>
                    <Link to={'/'}>SIGN IN</Link>
                </section>
            </nav>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
            <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
    </div>
    )
};

export default App;
