import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const buttonStyle = {
  float: 'right'
};

class Panels extends Component {
    render() {
      return (
        <div>
            <Panel className="panel panel-info">
                <Panel.Heading>
                    <Panel.Title>{this.props.title}</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    {this.props.summary}
                    <br />
                    <br />
                    <Button className="btn btn-info" style={buttonStyle} href="/#/survey">Go</Button>
                </Panel.Body>
            </Panel>          
        </div>
      );
    }
  }
  
  export default Panels;
