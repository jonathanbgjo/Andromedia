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
            username:'Guest Account',
            password:'password'
        }
        this.props.processForm(user);
    }
    renderSignUpErrors(field) {
        return (
            <div>
                {this.props.errors.map((error, i) =>{
                    return error.toLowerCase().includes(field) ? error : null
                }      
                )}
            </div>
        );
    }
    renderLoginError() {
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
                <Link to="/" className = "sessionHomeLink"><img src={window.logo} alt="logo" className="login--logo" /></Link>
                <div className = "formText">
                    {this.props.formType === "Login" ? <p>Sign in</p> : <p>Sign up</p>}
                    <p>to continue to Andromedia</p>
                </div>
                <form onSubmit={this.handleSubmit} className="login-form-box">
                        <label>
                        <input placeholder="Enter Username" type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                />
                        </label>x   
                    {this.props.formType === "Login" ? "" : <div className="errors"> {this.renderSignUpErrors('username')}</div> } 
                    {this.props.formType === "Login" ? "" : <label>
                        <input placeholder="Enter Email" type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                            />
                    </label>}
                    {this.props.formType === "Login" ? <div className='loginErrors'>{this.renderLoginError()}</div> : <div className='errors'>{this.renderSignUpErrors('email')}</div>}
                            
                        <label>
                        <input placeholder="Enter Password" type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                />
                        </label>
                    {this.props.formType === "Login" ? '' : <div className='errors'>{this.renderSignUpErrors('password')}</div>}

                        <input className="session-submit" type="submit" value={this.props.formType} />
                <div className="formLinks">
                    {this.props.formType === "Login" ? 
                    <Link to="/signup">Create Account</Link> : 
                    <Link to="/login">Sign in instead </Link>}
                    {this.props.formType === 'Login' ? 
                    <button type="submit" onClick={this.handleDemo} className="demo">Demo</button> : ""}
                </div>            
                </form>    
                

            </div>

        );
    }
}

export default SessionForm;
