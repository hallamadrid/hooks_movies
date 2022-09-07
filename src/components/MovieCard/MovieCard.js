import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../MovieCard/MovieCard.css';

const MovieCard = ({ elm, remove }) => {
	return (
		<div className="elm">
			<Card className="card">
				<Card.Img variant="top" src={elm.posterURL} className="card-img" />
				<Card.Body>
					<Card.Title style={{ color: 'orange' }}>{elm.title}</Card.Title>
					<Card.Text style={{}} className="discription">
						{elm.description}
					</Card.Text>
					<Card.Body className="info">
						<Link to = {`/description/${elm.Id}`} > 
						    <Button variant="primary" onClick={() => elm.removeCardMovie()}>
							    Movie
						    </Button>
						</Link>
						<Card.Text className="note">
						</Card.Text>
					</Card.Body>
				</Card.Body>
			</Card>
		</div>
	);
};

export default MovieCard;