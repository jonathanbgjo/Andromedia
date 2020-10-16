import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
        this.currentUser = this.props.currentUser;
        this.logout = this.props.logout.bind(this);
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
            this.setState({
                open: false,
            });
        }
    };

    handleButtonClick(){
        this.setState({open: !this.state.open})
    };
    dropdownLinks(){
        return(<nav className="top-nav">
            
            <section className="nav-container-logo">
                <img src={window.logo} alt="logo" className="welcome--logo" />
                <Link to="/"><h1>Andromedia</h1></Link>
            </section>

            <section className="search">
                <input type="text" />Searchbar goes here
            </section>

            <section className="button_container" ref={this.container}>
                {/* <h2 className="header-name">Hi, {this.currentUser.username}!</h2>
                <img src="" alt="logo" className="welcome--logo" />
                <button className="header-button" onClick={this.logout}>Log Out</button>
                <ul>
                    <li> <Link to="profile"> Profile</Link> </li>
                    <li> <Link to="something"> Home</Link> </li>
                    <li> <Link to="something"> Random Video?</Link> </li>
                    <li> <a onClick={this.logout}> Logout </a> </li>
                </ul> */}
                {/* <div ref={this.wrapperRef}>{this.props.children}</div> */}
                <button type="button" className="button" onClick={this.handleButtonClick}>
                    <img src={window.pfp} alt="logo" className="pfp" />
                </button>
                {this.state.open && (
                    <div className="dropdown">
                        <ul>
                            
                            <p className="topLi"> Hello, {this.currentUser.username}  </p>  
                            <li><Link to={`/user/${this.currentUser.id}`}>Profile</Link></li>
                            <li><Link to="/linked">LinkedIn</Link></li>
                            <li><Link to="/gh">Github</Link></li>
                            <li> <button onClick={this.props.logout}>Logout</button> </li>
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
                <Link to="/">
                    <h1>Andromedia</h1>
                </Link>
            </section>

            <section className="search">
                <input type="text" /> Searchbar goes here
            </section>
            <div className = "navSignIn">
                <Link to="/login">Sign In</Link>
                {/* &nbsp;or&nbsp;
                <Link to="/signup">Sign up!</Link> */}
            </div>
        </nav>)
    };
        
    render(){
        return(
            this.currentUser ? this.dropdownLinks() : this.sessionLinks()
        )
    }    

}

export default Nav;
