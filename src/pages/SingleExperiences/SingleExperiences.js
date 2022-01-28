import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';

const SingleExperiences = () => {
    const [singleExp, setSingleExp] = useState({})
    const params = useParams();
    const id = params.id

    const {name,img,description,booking, placeRank, cost, rating, _id} = singleExp

    useEffect( ()=>{
        fetch(`https://secure-fortress-87123.herokuapp.com/experiences/${id}`)
        .then(res => res.json())
        .then(data => {
            setSingleExp(data)
        })
    } ,[])

    console.log("data is here", singleExp);
    console.log("darating is here", rating);
    return (
        <div>
             <Container>
                 <div className='text-center my-5'>
                     <h2 style={{color:"rgb(139, 81, 70)"}}>This Plane deteils is here.</h2>
                 </div>
             <Row className='border'>
                <Col className=''md={4}><img src={img} className='w-100 h-100 ' alt="" /></Col>
                <Col md={8} className='p-4'>
                    <h3 style={{color:"rgb(77, 77, 10)", display:"inline-block",marginBottom:"0px"}}>{name}</h3><br />
                    <small className='smallText' >{placeRank}</small>
                    <p className='text-justify mt-3'>{description}</p>
                    <h5 style={{color:"tomato"}}>Price: {cost} BDT</h5>
                    <h5 style={{color: 'rgb(73, 73, 240)'}}>Booking date: {booking}</h5>
                </Col>
            </Row>
            {/* <Row className='border'> */}
                {
                    rating ? <Row className='border '>
                        <Row xs={1} md={3} className="g-4 mb-5">
                            {rating.map(ratings =><Col>
                            <Card>
                                <Card.Body className='text-center'>
                                <Card.Title style={{fontSize:"30px"}}>{ratings.name}</Card.Title>
                                <Rating
                                style={{color:"#FDCC0D", fontSize:"25px"}}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                    initialRating={ratings.rating}
                                    readonly
                                    />
                                <Card.Text>
                                {ratings.text}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                             
                             </Col>)}
                         </Row>
                    </Row>: <Spinner animation="border" />
                }
                {/* {rating.map(ratings =>console.log("ha ha ha ha",ratings))} */}
                {/* <Col md={12} className='p-4'>
                    <h3 style={{color:"rgb(77, 77, 10)", display:"inline-block",marginBottom:"0px"}}>{name}</h3><br />
                    <small className='smallText' >{placeRank}</small>
                    <p className='text-justify mt-3'>{description}</p>
                    <h5 style={{color:"tomato"}}>Price: {cost} BDT</h5>
                    <h5 style={{color: 'rgb(73, 73, 240)'}}>Booking date: {booking}</h5>
                </Col> */}
            {/* </Row> */}
             </Container>
        </div>
    );
};

export default SingleExperiences;