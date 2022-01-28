import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./Experiences.css"

const Experiences = (props) => {
    console.log("props=", props.experiences);
    const {name,img,description,booking} = props.experiences
    return (
        <div>
            <Col className='border ' md={12} sm={8}>
                    <Row >
                        <Col className=''md={4}><NavLink to="/addExperience"><img src={img} className='w-100 itemImg' alt="" /></NavLink></Col>
                        <Col md={8} className='p-4'>
                        <NavLink to="/addExperience" className="text-decoration-none "><h3 className='linkText'>{name}</h3></NavLink>
                        <p className='text-justify'>{description}</p>
                        <h5 style={{color: 'rgb(73, 73, 240)'}}>Booking date: {booking}</h5>
                        </Col>
                    </Row>
            </Col>
        </div>
    );
};

export default Experiences;