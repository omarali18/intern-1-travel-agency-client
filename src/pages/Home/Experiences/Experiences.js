import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./Experiences.css"

const Experiences = (props) => {
    const {name,img,description,booking, placeRank,_id} = props.experiences
    return (
        <div>
            <Col className='border ' md={12} sm={8}>
                    <Row >
                        <Col className=''md={4}><NavLink to={`/singleExperience/${_id}`}><img src={img} className='w-100 h-100 itemImg' alt="" /></NavLink></Col>
                        <Col md={8} className='p-4'>
                        <NavLink to={`/singleExperience/${_id}`} className="text-decoration-none "><h3 className='linkText'>{name}</h3></NavLink><br />
                        <small className='smallText' >{placeRank}</small>
                        <p className='text-justify mt-3'>{description}</p>
                        <h5 style={{color: 'rgb(73, 73, 240)'}}>Booking date: {booking}</h5>
                        </Col>
                    </Row>
            </Col>
        </div>
    );
};

export default Experiences;