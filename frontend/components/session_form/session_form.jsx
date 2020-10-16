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
                
                    <br></br>
                    
                    
                    <br />
        {/* Please {this.props.formType} or {this.props.navLink} */}
                    {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className="login-form-box">
                        <br />
                        <label>Username:
            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType} />
                </form>    
                <div className="formLinks">
                    {this.props.formType === "login" ? <Link to="/signup">
                    SignUp
                    </Link> : <Link to="/login">Login </Link>}
                    {this.props.formType === 'login' ? <button type="submit" onClick={this.handleDemo}>Demo User</button> : ""}
                </div>            
                
                

            </div>

        );
    }
}

export default SessionForm;
