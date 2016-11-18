import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import * as mainActions from "../actions/mainActions"

class NewComponent extends Component {
    render() {

        return <div>
                Some text in NewComponent...
            </div>
    }
}

function mapStateToProps(state) {
    return {
        state: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        mainActions: bindActionCreators(mainActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComponent);