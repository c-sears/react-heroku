import React, { Component } from 'react';
import SurveyList from '../components/SurveyList/SurveyList';

class Home extends Component {
    render() {
        return (
            <div id="homeContainer" className="container">
                <h1>Welcome to Kwiri!</h1>
                <h2>Please select a survey from the list below:</h2>
                <hr />
                <SurveyList />
            </div>
        );
    }
}

export default Home;