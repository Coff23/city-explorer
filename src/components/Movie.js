import { Component } from "react";
import { Container, Row } from "react-bootstrap";

class Movie extends Component {
    render() {
        return(
            <Container>
            <Row>
                {this.props.movieRender}
            </Row>
            </Container>
        );
    }
}

export default Movie;