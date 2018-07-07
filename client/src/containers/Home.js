import React, { Component } from 'react';
import SurveyList from '../components/SurveyList/SurveyList';
import { Panel } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div id="homeContainer" className="container">
                <Panel className="panel panel-default">
                    <Panel.Heading>
                        <Panel.Title><h1>Welcome to Kwiri!</h1></Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <p className="introText">Kwiri is a survey portal which takes input on a topic of user interest, supplied by nationally conducted surveys, to generate a picture of how the views of the user compare/contrast to that of a large sample of the general public.</p>
                        <h2>Surveys currently availalble to Kwiri</h2>
                        <SurveyList />
                        <SurveyList />
                        <SurveyList />
                    </Panel.Body>
                </Panel>          
            </div>
        );
    }
}

export default Home;