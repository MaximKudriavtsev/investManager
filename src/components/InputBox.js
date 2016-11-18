import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as mainActions from "../actions/mainActions"

class InputBox extends Component {
    onDeleteClick() {
        var props = this.props;
        props.mainActions.deleteWindow(props.data.id);
    }

    onIncomeChange(e) {
        var props = this.props,
            data = props.data,
            addInfo = props.mainActions.addInfo,
            target = e.target,
            value = target.value;

        switch (target.id) {
            case "income":
                return addInfo(data.id, value, data.invSum, data.credit);
            case "invSum":
                return addInfo(data.id, data.income, value, data.credit);
            case "credit":
                return addInfo(data.id, data.income, data.invSum, value);
        }
    }
    render() {
        return <div className="im_list_importBox">
            <div className="im_list_importBox_header">
                <div className={"close"} onClick={:: this.onDeleteClick}></div>
            </div>
            <div className="im_list_importBox_block">
                <div className="im_list_importBox_block_info">
                    Income
                </div>
                <div className="im_list_importBox_block_field">
                    <input type="text" id="income" onChange={:: this.onIncomeChange} />
                </div>
            </div>
            <div className="im_list_importBox_block">
                <div className="im_list_importBox_block_info">
                    Investment
                </div>
                <div className="im_list_importBox_block_field">
                    <input type="text" id="invSum" onChange={:: this.onIncomeChange} />
                </div>
            </div>
            <div className="im_list_importBox_block">
                <div className="im_list_importBox_block_info">
                    Credit
                </div>

                <div className="im_list_importBox_block_field">
                    <input type="text" id="credit" onChange={:: this.onIncomeChange} />
                </div>
                <button onClick={::this.onDeleteClick}>Delete</button>
            </div>
            
        </div >
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mainActions: bindActionCreators(mainActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(InputBox);