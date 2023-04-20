import { Component } from "react";
import { Alert } from "react-bootstrap";

class AlertMsg extends Component {
    render() {
        return (
            <Alert variant="danger">
            <p>{this.props.errorMsg}</p>
          </Alert>
        );
    }
}

export default AlertMsg;