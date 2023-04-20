import { Component } from "react";
import Button from 'react-bootstrap/Button'

class Form extends Component {
    render() {
        return (
            <form className="mb-4" onSubmit={this.props.getCityData}>
            <label>
              <h6>Enter City Name</h6>
              <input type="text" onInput={this.props.handleCityInput} style={{height: '2.25rem'}} />
            </label>
            <Button variant="info" type="submit">Explore!</Button>
          </form>
        )
    }
}

export default Form;