import { Component } from 'react';
import { Col, Image, Card } from 'react-bootstrap';
import Movie from './Movie';

class Movies extends Component {
    render() {
        // let movieRender;
        if (this.props.movies) {
            this.movieRender = this.props.movies.map((movie) => {
                let imageRender = `https://image.tmdb.org/t/p/w500/${movie.imgUrl}`;
                return <Col xs={6} md={4}>
                    <Card style={{width:'25rem'}}>
                        <h6>{movie.title}</h6>
                        <Image src={imageRender} alt={movie.title} fluid/>
                        </Card>
                    </Col>
                
            })
        }
        return (
            <Movie movieRender={this.movieRender} />
        )
    }
}

export default Movies;