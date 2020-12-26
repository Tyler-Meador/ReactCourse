import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
	
	function RenderDish({dish}){
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
	
	function RenderComments({comments}){
		
		if(comments != null)
			return(
				<div className ="col-12 col-md-5 m-1">
					<h1>Comments</h1>
					<ul className="list-unstyled">
						{comments.map((comment) => {
								return(
									<li key={comment.id}>
										<p>{comment.comment} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
										<p> -- {comment.author}</p>
									</li>
								);
							})
						}
					</ul>
				</div>
			);
	}	
	
	

	const DishDetail = (props) => {
		
		console.log('DishDetail Component render invoked');
		
		if(props.dish != null)
			return(
				<div className="container">
					<div className="row">
						<RenderDish dish={props.dish} />
						<RenderComments comments={props.dish.comments} />
							
					</div>
				</div>
				);
			else
				return(
					<div></div>
				);
		
	}



export default DishDetail;