import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import c1 from "./image/c1.jpg";
import c2 from "./image/c2.jpg";
import c3 from "./image/c3.jpg";
import { Link } from "react-router-dom";
import { fontSize } from "@mui/system";

const Banner = () => {
    return (
        <>
        <div id="banner">
          <br />
          <br />
          <Carousel fade id="main-banner" variant="dark">
            <Carousel.Item>
              <div id="first-img">
                <img style={{width:"30%", margin:"0 20vh", padding:"10vh 0"}} src={c1} />
  
                <div id="caption">
                  <p style={{ color: "orange", fontSize:"5vh" }}>Rome</p>
                  <h2 style={{ fontWeight: "bold" }}>
                    Are you ready <p></p> for this?
                  </h2>
                  <p></p>
                  <button>
                    <Link to="/">view this</Link>
                  </button>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div id="second-img">
                <div id="caption" style={{merdingLeft:"1vh"}}>
                  <p style={{ color: "orange", fontSize:"5vh" }}>Glacier National Park</p>
                  <h2 style={{ fontWeight: "bold" }}>
                    Up to 20% less <br /> only this month
                  </h2>
                  <p></p>
                  <button>
                    <Link to="/">view this</Link>
                  </button>
                </div>
                <img style={{width:"30%", marginRight:" 20vh", padding:"10vh 0"}} src={c2} />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div id="first-img">
                <img style={{width:"30%", margin:"0 20vh", padding:"10vh 0"}} src={c3} />
  
                <div id="caption">
                  <p style={{ color: "orange", fontSize:"5vh" }}>Tokyo</p>
                  <h2 style={{ fontWeight: "bold" }}>
                    Are you ready <p></p> for this?
                  </h2>
                  <p></p>
                  <button>
                    <Link to="/">view this</Link>
                  </button>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <br />
        <br />
        <br />
        <br />
        
      </>
    );
};

export default Banner;