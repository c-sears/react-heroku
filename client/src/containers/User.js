import React, { Component } from 'react';
import UserInfo from '../components/UserInfo';

class User extends Component {
    render() {
        return (
            <div id="userSurveyContainer" className="userContainer">
                <UserInfo />
            </div>
        );
    }
}

export default User;