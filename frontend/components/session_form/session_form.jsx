import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
                    {this.props.formType === "Login" ? <h3>Sign in</h3> : <h3>Sign up</h3>}
                    <h4>to continue to Andromedia</h4>
                </div>
                    <br/>
                    <br/>
        {/* Please {this.props.formType} or {this.props.navLink} */}
                    {this.renderErrors()}
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
                    <Link to="/login">Have an account? Log in </Link>}
                    {this.props.formType === 'Login' ? 
                    <button type="submit" onClick={this.handleDemo}>Demo User</button> : ""}
                </div>            
                </form>    
                
                

            </div>

        );
    }
}

export default SessionForm;
