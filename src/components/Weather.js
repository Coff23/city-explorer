import React from 'react';



class Weather extends React.Component {
    render() {
        let weatherForecast;
        if (this.props.weatherData) {
            weatherForecast = this.props.weatherData.map((weather) => {
                return (
                    <p>On {weather.date} it will be {weather.description}.</p>
                );
            });
        }
        return (
            <>
                {weatherForecast}
            </>
        )
    }
}

export default Weather;