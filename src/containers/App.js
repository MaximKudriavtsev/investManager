import React, { Component } from "react"

import List from "../containers/List"
import Add from "../components/Add"

import "../styles/app.css"

export default class App extends Component {
    render() {
        return <div className="im">
            <List />
            <Add />
        </div>
    }
}