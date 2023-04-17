import { Component } from "react";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      lat: "",
      lon: "",
      cityData: [],
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

      console.log(cityData.data[0]);

      this.setState({
        cityData: cityData.data[0],
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
          <p>{this.state.errorMsg}</p>
        ) : (
          <p>{this.state.cityData.display_name}</p>
        )}
        <p>
          {this.state.cityData.display_name}
          {this.state.cityData.lat}
          {this.state.cityData.lon}
        </p>
        
      </>
    );
  }
}

export default Main;
