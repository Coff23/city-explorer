import { Component } from "react";
import { Container, Row } from "react-bootstrap";

class WeatherDay extends Component {
    render() {
        return (
            <Container>
            <Row>{this.props.weatherForecast}</Row>
        </Container>
        );
    }
}

export default WeatherDay;