import React, { Component } from 'react';
import UserForm4 from '../components/UserForm4';

class UserInfo extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="well">
              <UserForm4 />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInfo;