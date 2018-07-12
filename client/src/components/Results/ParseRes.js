import React, { Component } from 'react';
import Visualization from './Visualization';

class ParseRes extends Component {
    constructor(props) {
        super(props);

        this.parseRes = this.parseRes.bind(this);

        this.title = this.props.survey[0]['title'];
        this.parsedRes = {};

    }

    parseRes(){
        // CREATE PARSEDRES OBJECT
        // Check each item in survey
        for (let code in this.props.survey[1]) {
            console.log(this.props.survey[1]);

            let surveyChoices = this.props.survey[1][code]['choices'];
            let answersObj = {}
            console.log(surveyChoices);
            console.log(code);

            // Find any matching keys in response
            if (this.props.response[code]) {

                // Add matching keys from survey & values from response to new object
                for (let i=1; i<Object.keys(this.props.response[code]).length + 1; i++) {
                    console.log(surveyChoices[i]);
                    answersObj[surveyChoices[i]] = this.props.response[code][parseInt(i)];
                }

                // Add answers object as value for parsedRes
                this.parsedRes[code] = answersObj;
            }

        }
    }

    render() {
        this.parseRes();
        return(
            <Visualization survey={this.props.survey} parsedRes={this.parsedRes} answers={this.props.answers} />
        )
    }
}

export default ParseRes;
