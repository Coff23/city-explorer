import { Component } from "react";
import axios from "axios";
import { Col, Image } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Weather from './Weather';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
      mapUrl: "",
      error: false,
      errorMsg: "",
      weatherData: '',
      showWeather: false,
      dateData: '',
    };
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  
  getCityData = async (event) => {
    event.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
      
      let cityData = await axios.get(url);
      
      let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${cityData.data[0].lat},${cityData.data[0].lon}&zoom=11&size=600x400&format=png`;
      
      this.handleWeather();
      console.log(cityData.data[0]);

      this.setState({
        cityData: cityData.data[0],
        mapUrl: mapUrl,
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMsg: error.message,
      });
    }
  };

  handleWeather = async () => {
    try {
      let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?searchQuery=${this.state.city}`;

      let weatherData = await axios.get(weatherUrl);

      console.log(weatherData.data);

      this.setState({
        weatherData: weatherData.data.description,
        dateData: weatherData.data.valid_date,
        showWeather: true,
      });
    } catch (error) {
      console.log(error.message);

      this.setState({
        showWeather: false,
      })
    }
  }

  render() {
    return (
      <>
        <div>
          <h2>City Data</h2>
          <Col xs={3} md={6}>
            <form onSubmit={this.getCityData}>
              <label>
                Enter City Name
                <input type="text" onInput={this.handleCityInput} />
              </label>
              <Button variant="info" type="submit">Explore!</Button>
            </form>
          </Col>
          <Col>
            {this.state.error ? (
              <Alert variant="danger">
                <p>{this.state.errorMsg}</p>
              </Alert>
            ) : (
              <p>{this.state.cityData.display_name}</p>
            )}
            {
              this.state.showWeather ? <Weather weatherData={this.state.weatherData} dateData={this.state.dateData} /> : <></>
            }
            <ul>
              <li>City: {this.state.cityData.display_name}</li>
              <li>Latitude: {this.state.cityData.lat}</li>
              <li>Longitude: {this.state.cityData.lon}</li>
            </ul>
          </Col>
          <Col className="city-map">
            {this.state.mapUrl && (
              <Image src={this.state.mapUrl} alt="Map of the city" />
            )}
          </Col>
        </div>
      </>
    );
  }
}

export default Main;
