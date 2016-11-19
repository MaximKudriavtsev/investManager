import React, { Component } from "react"
import { connect } from "react-redux"
import ReactDOM from "react-dom"

import Chart from "chart.js/src/chart"

class ChartBox extends Component {
    componentDidMount() {
        var that = this,
            myData = [],
            myLabels = [];

        that.myChart = new Chart(ReactDOM.findDOMNode(that.refs["myChart"]), {
                type: "bar",
                data: {
                    labels: myLabels,
                    datasets: [{
                        label: "Profitability",
                        data: myData,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
    }

    componentWillUpdate(nextProps) {
        var that = this,
            dataById = nextProps.main.dataById,
            myLabels = [],
            myData = [],
            res, count=0;

        that.isChart = false;

        for (let key in dataById) {
            var invSum = dataById[key].invSum;

            count++;
            if (!isFinite(invSum) || invSum == "" || invSum == 0)
                continue;
            res = (dataById[key].income - dataById[key].credit) / dataById[key].invSum * 100;
            myLabels.push(key);
            myData.push(res);
        }

        if (myData.length && count) {
            that.myChart.data.datasets[0].data = myData;
            that.myChart.data.labels = myLabels;
            that.myChart.update();
            that.isChart = true;
        }
    }
    render() {
        var postfixClass = this.isChart ? "" : "-hide" ;

        return <div className={"im_chart" + postfixClass }>
            <canvas id="myChart" ref="myChart" width="400" height="300"></canvas>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        main: state
    };
}

export default connect(mapStateToProps)(ChartBox);