import React, { Component } from "react"
import { connect } from "react-redux"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

import InputBox from "../components/InputBox"

class List extends Component {
    render() {
        var props = this.props.main,
            data = props.dataById,
            inputBoxTemplate = [];

        for (let keyField in data) {
            inputBoxTemplate.push(
                <div key={keyField}>
                    <InputBox data={data[keyField]} />
                </div>
            );
        }

        return <div className="im_list">
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {inputBoxTemplate}
            </ReactCSSTransitionGroup>
        </div>
    }
}


function mapStateToProps(state) {
    return {
        main: state
    };
}

export default connect(mapStateToProps)(List);
