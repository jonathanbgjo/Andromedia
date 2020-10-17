import React from 'react'
import Nav from '../nav/nav'
import NavContainer from '../nav/nav_container'


class Profile extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.currentUser)
    }
    componentDidMount(){
    }
    render(){
        return(
            <div> Am i in {this.props.currentUser.username}'s' profile!</div>
        )
    }
}

export default Profile