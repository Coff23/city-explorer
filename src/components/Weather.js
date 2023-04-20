import React from 'react';
import { Col, Card } from 'react-bootstrap';
import WeatherDay from './WeatherDay';



class Weather extends React.Component {
    render() {
        // let weatherForecast;
        if (this.props.weatherData) {
            this.weatherForecast = this.props.weatherData.map((weather) => {
                return <Col xs={3}>
                    <Card style={{width:'18rem'}}>
                        <h6>{weather.date}</h6>
                    <p>{weather.description}.</p>
                    </Card>
                </Col>
            });
        }
        return (
            <WeatherDay weatherForecast={this.weatherForecast}/>
        )
    }
}

export default Weather;