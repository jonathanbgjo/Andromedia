import React from 'react';
import { Link } from 'react-router-dom';
// import Dropdown from 'react-dropdown'
class Nav extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
        this.currentUser = this.props.currentUser;
        this.logout = this.props.logout;
        this.sessionLinks = this.sessionLinks.bind(this)
        this.dropdownLinks = this.dropdownLinks.bind(this)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        
    }
    handleButtonClick(){
        this.setState({open: !this.state.open})
    };
    dropdownLinks(){
        return(<nav className="top-nav">
            <section className="nav-container-logo">
                <img src="" alt="logo" className="welcome--logo" />
                <Link to="/">
                    <h1>Andromedia</h1>
                </Link>
            </section>

            <section className="search">
                <input type="text" />Searchbar goes here
            </section>

            <section className="button_container">
                {/* <h2 className="header-name">Hi, {this.currentUser.username}!</h2>
                <img src="" alt="logo" className="welcome--logo" />
                <button className="header-button" onClick={this.logout}>Log Out</button>
                <ul>
                    <li> <Link to="profile"> Profile</Link> </li>
                    <li> <Link to="something"> Home</Link> </li>
                    <li> <Link to="something"> Random Video?</Link> </li>
                    <li> <a onClick={this.logout}> Logout </a> </li>
                </ul> */}

                <button type="button" className="button" onClick={this.handleButtonClick}>
                    ☰
                </button>
                {this.state.open && (
                    <div className="dropdown">
                        <ul>
                            <li><Link to="/">Profile</Link></li>
                            <li><Link to="/">Logout</Link></li>
                            <li><Link to="/">LinkedIn</Link></li>
                            <li><Link to="/">Github</Link></li>
                        </ul>
                    </div>
                )}

            </section>
        </nav>)
    };
    sessionLinks(){
        return(<nav className="top-nav">
            <section className="nav-container-logo">
                <img src="" alt="logo" className="welcome--logo" />
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
