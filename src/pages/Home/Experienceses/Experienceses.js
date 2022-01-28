import React, { useEffect, useState } from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import Experiences from "../Experiences/Experiences"
import "./Experienceses.css"

const Experienceses = () => {
    const [experienceses, setExperienceses] = useState([])
    const[page, setPage] = useState(0)
    const[pageCount, setPageCount] = useState(0)

    const size = 10;

    useEffect( ()=>{
        fetch(`https://secure-fortress-87123.herokuapp.com/experiences?page=${page}&&size=${size}`)
        .then(res => res.json())
        .then(data=> {
            setExperienceses(data.experiences)
            const count = data.count
            const pageNumber = Math.ceil(count/size)
            setPageCount(pageNumber);
        })
    } ,[page])

    console.log('page', page);
    console.log('pageCount', pageCount);


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
                    <Container className="pagination my-5">
                        <Pagination className='border '>
                                {/* <Pagination.First /> */}
                                <Pagination.Prev onClick={ page === 0 ? ()=>setPage(page): ()=>setPage(page-1) } />
                                {
                                   [...Array(pageCount).keys()].map(number =><Pagination.Item
                                   className={number === page ? "active": ""}
                                   key={number}
                                   onClick={()=>setPage(number)}
                                   >{number + 1}</Pagination.Item>)
                                }
                                <Pagination.Next 
                                onClick={pageCount-1 === page ? ()=>setPage(page): ()=>setPage(page+1) }
                                
                                />
                                {/* <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item disabled>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next /> */}
                                {/* <Pagination.Last /> */}
                        </Pagination>
                    </Container>
                </Row>
            </Container>
        </div>
    );
};

export default Experienceses;