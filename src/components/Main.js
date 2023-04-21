import { Component } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Weather from './Weather';
import Movies from "./Movies";
import Map from "./Map";
import AlertMsg from "./Error";
import Form from "./Form";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
      mapUrl: "",
      error: false,
      errorMsg: "",
      weatherData: [],
      showWeather: false,
      movies: [],
      showMovie: false
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

      this.handleWeather(cityData.data[0].lat, cityData.data[0].lon);
      this.handleMovie(this.state.city);
      console.log(cityData.data[0]);

      this.setState({
        cityData: cityData.data[0],
        city: cityData.data[0].display_name,
        mapUrl: mapUrl,
        error: false,
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMsg: error.message,
        city: "",
        cityData: [],
        mapUrl: "",
        weatherData: [],
        showWeather: false
      });
    }
  };

  handleWeather = async (lat, lon) => {
    try {

      let weatherUrl = `${process.env.REACT_APP_SERVER}/forecast?searchQuery=${this.state.city}&lon=${lon}&lat=${lat}`;

      let weatherData = await axios.get(weatherUrl);

      console.log(weatherData.data);

      this.setState({
        weatherData: weatherData.data,
        showWeather: true
      });
    } catch (error) {
      console.log(error.message);

      this.setState({
        showWeather: false,
      })
    }
  }

  handleMovie = async (city) => {
    try {

      let movieUrl = `${process.env.REACT_APP_SERVER}/movies?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&city=${this.state.city}`;

      let movieData = await axios.get(movieUrl);

      console.log(movieData.data);

      this.setState({
        movies: movieData.data,
        showMovie: true
      });
    } catch (error) {
      this.setState({
        showMovies: false
      });
    }
  }

  render() {
    return (
      <Container className="my-4">
        <Row>
          <h2 style={{ color: 'white' }}>City Data</h2>
      <Form getCityData={this.getCityData} handleCityInput={this.handleCityInput}/>
            {this.state.error ? (
              <AlertMsg errorMsg={this.state.errorMsg} style={{ color: 'white' }} />
            ) : (
              <p style={{ color: 'white' }}>{this.state.cityData.display_name}</p>
            )}

            {this.state.showWeather ? <Weather weatherData={this.state.weatherData} /> : <p style={{ color: 'white' }}>None Found</p>}
            <ul style={{ color: 'white' }}>
              <li>Latitude: {this.state.cityData.lat}</li>
              <li>Longitude: {this.state.cityData.lon}</li>
            </ul>
              <Map mapUrl={this.state.mapUrl}/>
            <Movies movies={this.state.movies} />
        </Row>
      </Container>
    );
  }
}

export default Main;
