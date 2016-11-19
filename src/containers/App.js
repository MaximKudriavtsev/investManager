import React, { Component } from "react"

import List from "../containers/List"
import Add from "../components/Add"
import ChartBox from "../containers/ChartBox"

import "../styles/app.css"

export default class App extends Component {
    render() {
        return <div className="im">
            <List />
            <Add />
            <ChartBox />
        </div>
    }
}