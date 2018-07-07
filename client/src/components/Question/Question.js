import React, { Component } from 'react';
import ParseQ from './ParseQ';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            survey: null,
            answers: {}
        };
        this.updateAnswers = this.updateAnswers.bind(this);
        this.endSurvey = this.endSurvey.bind(this);
    }

    componentWillMount() {
        fetch('/api/questions')
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data);
                this.setState({ survey: data });
            });
    }

    updateAnswers(answer) {
        let newAnswers = Object.assign(answer, this.state.answers);

        this.setState({
            answers: newAnswers
        },
        function() {
            console.log('Updated answers:');
            console.log(this.state.answers);
        }
        );
    }

    endSurvey() {
        // Send data
        fetch('/api/sendResults', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.answers)
        })
        .then(function(res){ console.log(res) })
        .catch(function(res){ console.log(res) })
    }
    
    render() {
        if (!this.state.survey) {
            return <div>No fetched data</div>
        }

        return (
            <div>
                <ParseQ survey={this.state.survey} answers={Object.entries(this.state.answers)} updateAnswers={this.updateAnswers} nextQuestion={this.nextQuestion} endSurvey={this.endSurvey} />
            </div>
        );
    }
}

export default Question;