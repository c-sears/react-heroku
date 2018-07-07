import React, { Component } from 'react';
import Question from '../components/Question/Question';

class Survey extends Component {
    render() {
        return (
            <div id="surveyContainer" className="container">
                <Question />
            </div>
        );
    }
}

export default Survey;