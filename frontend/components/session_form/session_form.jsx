import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    componentWillUnmount(){
        this.props.clearErrors();
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }
    handleDemo(e){
        e.preventDefault();
        const user = {
            username:'guest',
            password:'password'
        }
        this.props.processForm(user);
    }
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-container">

                {/*onclick for logo*/}
                {/* <img src="" alt="logo" className="login--logo" /> */}
                <br></br>
                <Link to="/"><img src={window.logo} alt="logo" className="login--logo" /></Link>
                <div className = "formText">
                    {this.props.formType === "Login" ? <h>Sign in</h> : <h>Sign up</h>}
                    <p>to continue to Andromedia</p>
                </div>
                    <br/>
                    <br/>
        {/* Please {this.props.formType} or {this.props.navLink} */}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                        <br />
                        <label>
                        <input placeholder="Enter Username" type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                    {this.props.formType === "Login" ? "" : <label>
                        <input placeholder="Enter Email" type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                    </label>}
                        
                    <br/>
                        <label>
                        <input placeholder="Enter Password" type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                <div className="formLinks">
                    {this.props.formType === "Login" ? 
                    <Link to="/signup">Create Account</Link> : 
                    <Link to="/login">Sign in instead </Link>}
                    {this.props.formType === 'Login' ? 
                    <button type="submit" onClick={this.handleDemo} className="session-submit">Demo</button> : ""}
                </div>            
                </form>    
                <div className="errors" >
                    {this.renderErrors()}
                </div>
                

            </div>

        );
    }
}

export default SessionForm;
