import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className=" pt-2 footer-container">
                <div className="p-4  m-5 row  mx-auto footer-qsn">
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 qsn">
                        <h3 className="fst-normal">QUESTIONS? REQUESTS? </h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 col-sm-12 ">
                        <h2 className="float-md-end float-sm-start"><button className="contact-btn job-offers">Contact us <i className="fas fa-arrow-right"></i></button></h2>
                    </div>
                </div>
                <div className="row p-3 mx-auto footer-deatel">
                    <div className=" pt-3 ps-3 pe-3  col-lg-5 col-md-7 col-12 col-sm-12">
                        <h3 className="fw-light">Our service is open 24/7 hours</h3>
                        <p><small className="visits">Visits our website to get the best offer.</small></p>
                        <p><a className="visitor-information" href="#">Service & visitor information <i className="fas fa-arrow-right"></i></a></p>
                        <h6>Find a best offer.</h6>
                        <button className="job-offers">Our job offers</button>
                    </div>
                    <div className="  p-3 col-lg-2 col-md-5 col-12 col-sm-12">
                        <h3>SERVICES</h3>
                        <small><a className="ancor" href="#">Maui</a></small><br />
                        <small><a className="ancor" href="#">Sydney</a></small><br />
                        <small><a className="ancor" href="#">Barcelona</a></small><br />
                        <small><a className="ancor" href="#">Grand Canyon</a></small><br />
                        <small><a className="ancor" href="#">South Island, New Zealand</a></small><br /><br />
                        <h5><a className="display" href="#">Display all</a></h5>
                    </div>
                    <div className=" p-3  col-lg-2 col-md-6 col-12 col-sm-12">
                        <h3>OFFERS</h3>
                        <small><a className="ancor" href="#">Running Offers</a></small><br />
                        <small><a className="ancor" href="#">upcoming Offer</a></small><br />
                        <small><a className="ancor" href="#">Discount with bkash.</a></small><br />
                        <small><a className="ancor" href="#">All service discount.</a></small><br /><br />
                        {/* <h5><a className="display" href="#">Old Offer</a></h5> */}
                    </div>
                    <div className="social-media p-3 col-lg-3 col-md-6 col-12 col-sm-12">
                        <h3>OUR SOCIAL MEDIA</h3>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="Copyright">
                <p>Copyright &copy; 2021 All rights reserved | IT Department .</p>
            </div>
        </div>
    );
};

export default Footer;