import React, { Component } from 'react';
import Panels from './ControlledPanelGroup';

class SurveyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            title: '',
            summary: ''
        };
    }

    componentDidMount() {
        fetch('/api/questions',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
            .then(results => {
                return results.json();
            }).then(data => {
                console.log(data);
                this.setState({ title: data[0].title, summary: data[0].summary});
            });
    }
    
    render() {
        return (
            <Panels title={this.state.title} summary={this.state.summary} />
        );
    }
}

export default SurveyList;