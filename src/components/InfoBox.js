import React, { Component } from "react"

export default class InfoBox extends Component {
    render() {
        return <div className="im_info">
            <div className="im_info_label">
            <b><font color="#b10058">Invest</font>manager</b>
            </div>
            <div className="im_info_text">
                Evaluate the investment attractiveness of the project clearly and simply. 
                Make a comprative analisys of several investment projects and obtain graphical view of return on investment.
                Fill total expected profit of the project, it's investment and the bank loan (if taken).
            </div>
        </div>
    }
}