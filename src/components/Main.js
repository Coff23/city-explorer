import { Component } from "react";
import axios from "axios";
import { Col, Image } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      cityData: [],
      mapUrl: "",
      error: false,
      errorMsg: "",
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

  render() {
    return (
      <>
        <h2>City Data</h2>
        <form onSubmit={this.getCityData}>
          <label>
            Enter City Name
            <input type="text" onInput={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>
        {this.state.error ? (
          <Alert variant="primary">
          <p>{this.state.errorMsg}</p>
          </Alert>
        ) : (
          <p>{this.state.cityData.display_name}</p>
        )}
        <p>
          {this.state.cityData.display_name}
          {this.state.cityData.lat}
          {this.state.cityData.lon}
        </p>
        <Col className="city-map">
          {this.state.mapUrl && (
            <Image src={this.state.mapUrl} alt="Map of the city" />
          )}
        </Col>
      </>
    );
  }
}

export default Main;
