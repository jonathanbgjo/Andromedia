import React from 'react';
import { Link } from 'react-router-dom';

const Side = ()=>{

    return (
        <div className="sideBarContainer">
            <div className="sideBar">
                <ul>
                    <li>
                        <img src={window.home} alt="home" className="sideImg" />
                        <Link to={`/user/`}>Home</Link>
                    </li>
                    <li>
                        <img src={window.upload} alt="upload" className="sideImg" />
                        <Link to="/videos/new">Upload</Link>
                    </li>
                    <li>
                        <img src={window.gh} alt="gh" className="sideImg" />

                        <a href="https://jonathanbgjo.com/">Portfolio</a>
                    </li>

                    <li>
                        <img src={window.gh} alt="gh" className="sideImg" />
                        <a href="https://www.linkedin.com/in/jonjo0721/">LinkedIn</a>
                    </li>
                    <li>
                        <img src={window.ln} alt="ln" className="sideImg" />
                        <a href="https://github.com/jonathanbgjo">Github</a>
                    </li>
                    <li>
                        <img src={window.ln} alt="ln" className="sideImg" />
                        <a href="https://angel.co/u/jon-jo">Angel List</a>
                    </li>
                    
                </ul>
            </div>
            
        </div>
    )
}

export default Side