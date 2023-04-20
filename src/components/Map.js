import { Component } from "react";
import { Col, Image } from 'react-bootstrap';

class Map extends Component {
    render() {
        return (
            <Col className="city-map">
            {this.props.mapUrl && (
              <Image src={this.props.mapUrl} alt="Map of the city"/>
            )}
          </Col>
        );
    }
}

export default Map;