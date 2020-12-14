import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
	
class DishDetail extends Component {
	
	renderDish(dish){
			return (
				<div className="col-12 col-md-5 m-1">
					<Card>
						<CardImg top src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
							<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
			);
			
	}
	renderComments(comments){
		
		if(comments != null)
			return(
				<div className ="col-12 col-md-5 m-1">
					<h1>Comments</h1>
					<ul className="list-unstyled">
						{comments.map((comment) => {
								return(
									<li key={comment.id}>
										<p>{comment.comment}</p>
										<p> -- {comment.author}</p>
									</li>
								);
							})
						}
					</ul>
				</div>
			);
	}	
	
	

	render(){
		if(this.props.dish != null)
			return(
				<div className="container">
					<div className="row">
							{this.renderDish(this.props.dish)}
							{this.renderComments(this.props.dish.comments)}
							
					</div>
				</div>
				);
			else
				return(
					<div></div>
				);
		
	}
}


export default DishDetail;