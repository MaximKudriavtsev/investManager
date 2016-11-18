import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as mainActions from "../actions/mainActions"

class ImportBox extends Component {
    onButtonClick(){
        this.props.mainActions.addWindow();
    }

    render() {

        return <div className="im_list_add">
            <button className="im_list_add_button" type="button" onClick={:: this.onButtonClick}>Add</button>
        </div>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mainActions: bindActionCreators(mainActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(ImportBox);