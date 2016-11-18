import React, { Component } from "react"

import NewComponent from "../components/NewComponent"

import "../styles/app.css"

export default class App extends Component {
    render() {
        return <div>
            <div>Some text in App...</div>
            <NewComponent />
        </div>
    }
}