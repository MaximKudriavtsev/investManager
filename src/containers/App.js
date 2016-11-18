import React, { Component } from "react"

import List from "../containers/List"

import "../styles/app.css"

export default class App extends Component {
    render() {
        return <div className="im">
            <List />
        </div>
    }
}