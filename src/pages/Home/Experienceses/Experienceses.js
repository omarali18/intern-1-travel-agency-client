import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Experienceses = () => {
    const [experiences, setExperiences] = useState([])

    useEffect( ()=>{
        fetch("https://secure-fortress-87123.herokuapp.com/experiences")
        .then(res => res.json())
        .then(data=> {
            setExperiences(data)
        })
    } ,[])


    return (
        <div style={{}}>
            <Container className='border'>
                <Row>
                    <Col className='border ' md={12} sm={8}>sm=8</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Experienceses;