import React, { Component } from 'react';
import Result from '../components/Results/Result';

class Results extends Component {
    render() {
        return (
            <Result survey={this.props.survey} answers={this.props.answers} />
        );
    }
}

export default Results;