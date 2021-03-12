import React from 'react'
import Nav from '../nav/nav'
import NavContainer from '../nav/nav_container'


class Profile extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(props);
        console.log(this.props);

        this.props.currentUser;
        console.log(this.props.logout)
        this.props.logout();
    }
    render(){
        return(
            <>

                <div> Am i in {this.props.currentUser.username}'s' profile!</div>
                <span> profile pic -- username -- # subscribers</span>
                <span> do we want multiple tabs?</span>
                <span> Videos you've uploaded | Videos you've liked or commented on</span>

            
            </>
        )
    }
}

export default Profile