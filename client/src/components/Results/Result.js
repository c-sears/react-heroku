import React, { Component } from 'react';
import ParseRes from './ParseRes';


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        };
        this.surveykey = require('../../assets/survey1answerkey.json');
    }

    componentWillMount() {
        fetch('/api/estResults')
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            this.setState({response: data[0]});
        })
    }

    render() {
        // console.log(this.props);
        // console.log(this.props.survey);
        // console.log(this.props.answers);
        // console.log(this.state.response);
        if (this.state.response === null) {
            return (
                <div />
            );
        }
        return(
            <ParseRes survey={this.surveykey} answers={this.props.answers} response={this.state.response} />
        )
    }
}

export default Result;