import React, { Component } from 'react';
import ParseRes from './ParseRes';
import Filter from './Filter';


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null,
            filterData: null
        };
        this.filterState = this.filterState.bind(this);
        this.surveykey = require('../../assets/survey1answerkey.json');
    }

    componentWillMount() {
        if (this.state.filterData !== null) {
            fetch('/api/getResults', {
                method: 'POST',
                body: this.state.filterData
            }).then(data =>{
                console.log(data);
                this.setState({response: data[0]});
            });
        }
        
        fetch('/api/estResults')
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            this.setState({response: data[0]});
        });
    }

    filterState(filterData) {
        this.setState({
            filterData: filterData
        });
    }

    render() {
        
        if (this.state.response === null) {
            return (
                <div />
            );
        }
        return(
            <div>
            <Filter filterState={this.filterState}/>
            <ParseRes survey={this.surveykey} answers={this.props.answers} response={this.state.response} />
            </div>
        )
    }
}

export default Result;