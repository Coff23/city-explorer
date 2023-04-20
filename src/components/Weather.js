import React from 'react';
import { Row, Container, Col} from 'react-bootstrap';



class Weather extends React.Component {
    render() {
        let weatherForecast;
        if (this.props.weatherData) {
            weatherForecast = this.props.weatherData.map((weather) => {
                return <Col xs={3}>
                    <p>On {weather.date} it will be {weather.description}.</p>
                </Col>
            });
        }
        return (
            <Container>
                <Row>{weatherForecast}</Row>
            </Container>
        )
    }
}

export default Weather;