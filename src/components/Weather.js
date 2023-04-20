import React from 'react';
import { Row, Container, Col, Card } from 'react-bootstrap';



class Weather extends React.Component {
    render() {
        let weatherForecast;
        if (this.props.weatherData) {
            weatherForecast = this.props.weatherData.map((weather) => {
                return <Col xs={3}>
                    <Card style={{width:'18rem'}}>
                        <h6>{weather.date}</h6>
                    <p>{weather.description}.</p>
                    </Card>
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