import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Experiences from "../Experiences/Experiences"

const Experienceses = () => {
    const [experienceses, setExperienceses] = useState([])

    useEffect( ()=>{
        fetch("https://secure-fortress-87123.herokuapp.com/experiences")
        .then(res => res.json())
        .then(data=> {
            setExperienceses(data)
        })
    } ,[])


    return (
        <div style={{}}>
            <Container className=''>
                <Row className="g-5">
                    {
                        experienceses.map(experiences=><Experiences 
                            key={experiences._id}
                            experiences={experiences}
                            />)
                    }
                    {/* <Col className='border ' md={12} sm={8}>sm=8</Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default Experienceses;