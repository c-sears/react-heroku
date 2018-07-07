import React, { Component } from 'react';
import CurrentQ from './CurrentQ';
import Results from '../../containers/Results';

class ParseQ extends Component {
    constructor(props) {
        super(props);
        this.current = 1;
        this.conditionCheck = this.conditionCheck.bind(this);
        this.updateAnswers = this.updateAnswers.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    conditionCheck() {
        const survey = this.props.survey;
        const current = this.current;
        const total = Object.keys(survey[1]).length;

        // console.log('current: '+current);
        // console.log('total: '+total);
        // END OF SURVEY CHECK
        if (current > total) {
            this.props.endSurvey();
            return(
                console.log('Survey ending')
            )
        }


        const keys = Object.keys(survey[1]);
        const code = (keys[current-1]);
        const qBody = survey[1][code];
        let relation = 'none';

        // Turn answers array back into an object
        let answersRaw = this.props.answers;
        let answers = answersRaw.reduce(function(prev,curr){prev[curr[0]]=curr[1];return prev;},{});

        // CONDITIONS

        // console.log('current ' + current);
        // console.log('code ' + code);
        // console.log('qBody: ');
        // console.log(qBody);

        // If conditions exist
        if (qBody.conditions) {
            // If relation exists, save it
            if (qBody.conditions['relation']) {
                relation = qBody.conditions['relation'];
                // console.log('relation exists');
            }
            // Save condition keys
            let conditionKeys = Object.keys(qBody.conditions);
            // console.log(relation)

            // If no relation
            if (relation === 'none') {
                // console.log('answers ' + answers);
                // console.log('saved answer ' + answers[conditionKeys[0]]);
                // console.log('condition key ' + qBody.conditions[conditionKeys[0]]);

                // If the answer with the same key as the condition exists
                if (answers[conditionKeys[0]]) {
                    // If conditional check fails
                    if (answers[conditionKeys[0]] !== qBody.conditions[conditionKeys[0]]) {
                        this.current += 1;
                        this.conditionCheck();
                    }
                } 
                // If the answer with the same key does not exist
                else {
                    this.current += 1;
                    this.conditionCheck();
                }
            }

            // If relation is OR
            if (relation === 'or') {
                let pass = false;
                for(let i=0;i<(conditionKeys.length - 1);i++) {
                    // console.log('answers ' + answers);
                    // console.log('saved answer ' + answers[conditionKeys[i]]);
                    // console.log('condition key ' + qBody.conditions[conditionKeys[i]]);

                    // If the answer with the same key as the condition exists
                    if (answers[conditionKeys[i]]) {
                        // If conditional check fails
                        if (answers[conditionKeys[i]] === qBody.conditions[conditionKeys[i]]) {
                            pass = true;
                        }
                    }                  
                }
                if (pass !== true) {
                    this.current += 1;
                    this.conditionCheck();
                }
            }

            // If relation is GREATER THAN
            if (relation === 'greater than') {
                for(let i=0;i<(conditionKeys.length - 1);i++) {
                    // If answer with same key as condition is LTE to 0
                    if (answers[conditionKeys[i]] >= 0) {
                        // If conditional check fails
                        if (answers[conditionKeys[i]] <= qBody.conditions[conditionKeys[i]]) {
                            this.current += 1;
                            this.conditionCheck();
                        }
                    }
                }
            }
        }
    }

    updateAnswers(answer) {
        this.props.updateAnswers(answer);       
    }

    nextQuestion() {
        this.current += 1;
    }

    render() {
        // CONDITION CHECK
        this.conditionCheck();

        const survey = this.props.survey;
        const current = this.current;
        const keys = Object.keys(survey[1]);
        const code = (keys[current-1]);
        const qBody = survey[1][code];

        // console.log(`code loading ${code}`)
        // console.log(qBody);

        if(!qBody) {
            this.props.endSurvey();
            return(
                <Results survey={this.props.survey} answers={this.props.answers} />
            )
        }

        // TYPES
        if (qBody.type === 'multi') {
            return (
                <CurrentQ number={this.current} code={code} type="multi" text={qBody.text} choices={Object.entries(qBody.choices)} updateAnswers={this.props.updateAnswers} nextQuestion={this.nextQuestion} />
            )
        }

        if (qBody.type === 'number') {
            return (
                <CurrentQ number={this.current} code={code} type="number" text={qBody.text} updateAnswers={this.props.updateAnswers} nextQuestion={this.nextQuestion} />
            )
        }

        if (qBody.type === 'multi-sub') {
            return (
                <CurrentQ number={this.current} code={code} type="multi-sub" text={qBody.text} choices={Object.entries(qBody.choices)} subChoices={Object.entries(qBody.sub_choices)} updateAnswers={this.props.updateAnswers} nextQuestion={this.nextQuestion}/>
            )
        }

        return(
           <div>Question type check fail</div>
        );
    }

}

export default ParseQ;