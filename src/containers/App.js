import React, { Component } from "react"

import List from "../containers/List"
import Add from "../components/Add"
import ChartBox from "../components/ChartBox"
import InfoBox from "../components/InfoBox"

import "../styles/app.css"

export default class App extends Component {
    render() {
        return <div className="im">
            <InfoBox />
            <List />
            <Add />
            <ChartBox />
        </div>
    }
}