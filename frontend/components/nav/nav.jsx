import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_nav/search_nav_container'

class Nav extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            open: false,
            dark: false,
        }
        this.sessionLinks = this.sessionLinks.bind(this)
        this.dropdownLinks = this.dropdownLinks.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)

        this.container = React.createRef();
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    handleClickOutside(event){
        if (this.container.current && !this.container.current.contains(event.target)) {
            if (this.state.open === true){
                this.setState({
                    open: false,
                });
            }
        }
    };
    switchTheme(){
        const theme = this.state.dark;
        this.setState({dark: !theme})
    }
    handleButtonClick(){
        this.setState({open: !this.state.open})
    };
    dropdownLinks(){
        return(<nav className="top-nav">
            
            <section className="nav-container-logo">
                <img src={window.logo} alt="logo" className="welcome--logo" />
                <Link to="/" className="welcomeTitle"><h1>Andromedia</h1></Link>
            </section>

            <section className="search">
                <SearchContainer />

            </section>
            
            <section className="button_container" ref={this.container}>
                <button type="button" className="button" onClick={this.handleButtonClick}>
                    <img src={window.pfp} alt="pfp" className="pfp" />
                </button>
                {this.state.open && (
                    <div className="dropdown">
                        <ul>
                            <li className="topLi">
                                <img src={window.pfp} alt="pfp" className="dropPfp" />
                                <h3>{this.props.currentUser.username}</h3> 
                                <p>{this.props.currentUser.email}</p> 
                            </li>
                            {/* <li><Link to={`/user/${this.props.currentUser.id}`}>Profile</Link></li> */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/videos/new">Upload</Link></li>
                            <li><a href="https://jonathanbgjo.com/">Portfolio</a></li>
                            <li><a href="https://www.linkedin.com/in/jonjo0721/">LinkedIn</a></li>
                            <li><a href="https://github.com/jonathanbgjo">Github</a></li>
                            <li><a href="hhttps://angel.co/u/jon-jo">Angel List</a></li>

                            {/* <li> <p onClick={this.props.switchTheme} >Switch Theme</p></li> */}
                            <li> <a onClick={this.props.logout}>Sign out</a></li>
                        </ul>
                    </div>
                )}

            </section>
        </nav>)
    };
    sessionLinks(){
        return(
        <nav className="top-nav">
            
            <section className="nav-container-logo">
                <img src={window.logo} alt="logo" className="welcome--logo" />
                <Link to="/" className="welcomeTitle">
                    <h1>Andromedia</h1>
                </Link>
            </section>

            <section className="search">
                <SearchContainer />

            </section>
            <div className = "navSignIn">
                    <img src={window.pfp} alt="pfp" className="dropPfp" />
                    <Link to="/login">SIGN IN</Link>
                {/* &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link> */}
            </div>
        </nav>)
    };
    
    render(){
        return(
            <div>
                {this.props.currentUser ? this.dropdownLinks() : this.sessionLinks()}
            </div>
            
            
        )
    }    

}

export default Nav;
