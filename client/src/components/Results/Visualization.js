import React, { Component } from 'react';
import Chart from 'chart.js';


class Vizualization extends Component {
    constructor(props) {
        super(props);

        this.createPanels = this.createPanels.bind(this);
        this.chartBuilder = this.chartBuilder.bind(this);

        this.panelsBuilt = false;
    }

    componentDidMount() {
        if (this.panelsBuilt === true){
            this.chartBuilder();
        }
    }

    createPanels() {
        let panelsBuild = [];

        let resCodes = Object.keys(this.props.parsedRes);
        let newAnswers = [].concat.apply([],this.props.answers);
        let codeArr = [];
        for (let j=0;j<newAnswers.length;j+=2) {
            codeArr.push(newAnswers[j]);
        }
        for (let i=0;i<codeArr.length;i++) {
            // Code for current Q
            // let code = Object.keys(this.props.parsedRes)[i];

            let code = codeArr[i];
            console.log(code);

            // User response for current Q
            // newAnswers is array from answers object
            let answerCodes = Object.keys(this.props.parsedRes[code]);
            let response = answerCodes[eval(newAnswers[newAnswers.indexOf(code)+1])-1];            

            // Body text for current Q
            let text = this.props.survey[1][code].text;

            // Create base panels
            let newPanel = '\
            <div style="clear:both" /> \
                <div class="panel panel-default" style="overflow:auto"> \
                    <div class="panel-heading"> \
                        <h3 class="panel-title">'+text+'</h3> \
                    </div> \
                    <div class="panel-body"> \
                        <div class="container" style="float:left;width:50%;text-align:center;"> \
                            <h3 style="font-size:3em;">Your answer:</h3> \
                            <h2 style="font-size:4.5em;">'+response+'</h2> \
                        </div> \
                        <div class="chart-container" style="position: relative; height:20vw; width:30vw; float:right; margin-right:30px"> \
                        <canvas id="'+code+'">&nbsp;</canvas> \
                        </div> \
                    </div> \
                </div>';
            
            panelsBuild.push(newPanel);
        }
        let panels = panelsBuild.join('')
        this.panelsBuilt = true;
        return(
            {__html: panels}
        )
    }

    chartBuilder(){
        console.log('building charts');

        let resCodes = Object.keys(this.props.parsedRes);
        let newAnswers = [].concat.apply([],this.props.answers);
        let codeArr = [];
        for (let j=0;j<newAnswers.length;j+=2) {
            codeArr.push(newAnswers[j]);
        }
        for (let i=0;i<codeArr.length;i++) {
            // Code for current Q
            let code = codeArr[i];

            // this.multiSubCheck(code);

            // Type of current Q
            let type = this.props.survey[1][code].type;

            // Create array of answers from response
            let answerCodes = Object.keys(this.props.parsedRes[code]);
            let answersArr = [];
            let chartData = [];
            for (let j=0;j<answerCodes.length;j++) {
                answersArr.push(answerCodes[j]);
                chartData.push(this.props.parsedRes[code][answerCodes[j]]);
            }
            console.log(chartData);
            console.log(answersArr);

            if (answersArr.includes('undefined')) {
                let index = answersArr.indexOf('undefined');
                answersArr.splice(index,1,"No answer");
            }

            // Chart type check
            if (type === 'multi') {
                const ctx = document.getElementById(code);
                const newChart = new Chart(ctx, {
                    type: 'horizontalBar',
                    data: {
                        labels: answersArr,
                        datasets: [{
                            data: chartData,
                            backgroundColor: [
                                'rgba(162,206, 66,1)',
                                'rgba(219,185, 70,1)',
                                'rgba( 47,115,137,1)',
                                'rgba(236,249,209,1)',
                                'rgba(255,228,136,1)',
                                'rgba(183,208,216,1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        title: {
                            display: true,
                            text: 'Pew Research Data'
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    min: 0,
                                    max: 100
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    display: false
                                }
                            }]
                        }
                    }
                });
            }
        }
    }

    multiSubCheck(code) {
        let alpha = 'abcdefghijklmnopqrstuvwxyz';
        if (alpha.indexOf(code[code.length-1])) {
            code = code - code[code.length-1];
            console.log(code);
        }
    }

    render() {
        return(
            <div dangerouslySetInnerHTML={this.createPanels()} />
        )
    }
}

export default Vizualization;