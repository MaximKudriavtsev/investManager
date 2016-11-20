import React, { Component } from "react"

export default class InfoBox extends Component {
    render() {
        return <div className="im_info">
            <div className="im_info_label">
            <b><font color="#b10058">Invest</font>manager</b>
            </div>
            <div className="im_info_text">
                Estimate the investment project attractivity clearly and simply. 
                Make a comprative analisys of several investment projects and receive graphical view of return on investment.
                Fill in the «estimated project profit», the «personal investments» and the «total loan payments» fields.
            </div>
        </div>
    }
}