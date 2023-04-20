import { Component } from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';

class Movies extends Component {
    render() {
        let movieRender;
        if (this.props.movies) {
            movieRender = this.props.movies.map((movie) => {
                let imageRender = `https://image.tmdb.org/t/p/w500/${movie.imgUrl}`;
                return <Col xs={6} md={4}>
                        <p>{movie.title}</p>
                        <Image src={imageRender} alt={movie.title} fluid/>
                    </Col>
                
            })
        }
        return (
            <Container>
            <Row>
                {movieRender}
            </Row>
            </Container>
        )
    }
}

export default Movies;