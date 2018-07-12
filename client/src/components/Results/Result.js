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
        this.filterRender = this.filterRender.bind(this);
        this.surveykey = require('../../assets/survey1answerkey.json');
    }

    componentWillMount() {
        
        fetch('/api/estResults')
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            this.setState({response: data[0]});
        });
    }



    filterState(filterData) {
        console.log(filterData);
        this.setState({
            filterData: filterData,
            response: null
        }, function() {
            console.log(this.state.filterData);
            console.log(this.state.response);
        });
    }

    filterRender() {
        if (this.state.filterData !== null && this.state.response === null) {
            fetch('/api/getResults', {
                method: 'POST',
                body: JSON.stringify(this.state.filterData),
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json; charset=utf-8"
                }
            }).then(function(response){
                return response.json();
            }).then(data =>{
                console.log(data);
                this.setState({response: data[0]});
            }, function() {
                console.log(this.state.response);
            });
        }
    }

    render() {
        this.filterRender();
        
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