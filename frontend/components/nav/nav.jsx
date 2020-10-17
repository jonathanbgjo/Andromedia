import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
        this.sessionLinks = this.sessionLinks.bind(this)
        this.dropdownLinks = this.dropdownLinks.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
        // console.log(React.version)
        // console.log(this.logout)
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

    handleButtonClick(){
        this.setState({open: !this.state.open})
    };
    dropdownLinks(){
        return(<nav className="top-nav">
            
            <section className="nav-container-logo">
                <img src={window.logo} alt="logo" className="welcome--logo" />
                <Link to="/" className ="welcomeTitle"><h1>Andromedia</h1></Link>
            </section>

            <section className="search">
                <input type="text" />
                <img src={window.search} alt="search" className="searchIcon" />

            </section>
            
            <section className="button_container" ref={this.container}>
                <button type="button" className="button" onClick={this.handleButtonClick}>
                    <img src={window.pfp} alt="pfp" className="pfp" />
                </button>
                {this.state.open && (
                    <div className="dropdown">
                        <ul>
                            
                            <p className="topLi"> Hello, {this.props.currentUser.username}  </p>  
                            <li><Link to={`/user/${this.props.currentUser.id}`}>Profile</Link></li>
                            <li><a href="https://www.linkedin.com/in/jonjo0721/">LinkedIn</a></li>
                            <li><a href="https://github.com/jonathanbgjo">Github</a></li>
                            <li> <a onClick={this.props.logout}>Sign out</a></li>
                            {/* <li> <button onClick={this.props.logout}>Logout</button> </li> */}
                        </ul>
                    </div>
                )}

            </section>
        </nav>)
    };
    sessionLinks(){
        return(<nav className="top-nav">
            <section className="nav-container-logo">
                <img src={window.logo} alt="logo" className="welcome--logo" />
                <Link to="/" className="welcomeTitle">
                    <h1>Andromedia</h1>
                </Link>
            </section>

            <section className="search">
                <input type="text" />
                <img src={window.search} alt="search" className="searchIcon" />

            </section>
            <div className = "navSignIn">
                <Link to="/login">Sign In</Link>
                {/* &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link> */}
            </div>
        </nav>)
    };
        
    render(){
        // debugger
        // console.log(this.props.currentUser)
        return(
            this.props.currentUser ? this.dropdownLinks() : this.sessionLinks()
        )
    }    

}

export default Nav;
