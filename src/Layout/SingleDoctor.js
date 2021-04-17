import React from "react";
import {Button, Image, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

//style
import "./style/SingleDoctor.scss";
import PageHeader from "./component/PageHeader";

// todo: create request onLoad to get doctor data
export default function SingleDoctor() {
    return (
        <div id="single-doctor">
            <PageHeader title="Doctor Name" firstLocation="Doctor Name" />
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-3 lhs">
                        <div className="name-card">
                            <Image src="https://res.cloudinary.com/medical-pharma/image/upload/v1618573380/Assets/figures/figure7_rm6aie.png"/>
                            <h4>Dr. zinia zara</h4>
                            <span>Cardiology</span>
                            <p>MBBS, M.D of medicine</p>
                        </div>
                        <div className="personal-info">
                            <h4>personal info</h4>
                            <p>phone: <span className="text-md-left">+ (123) 1800-567</span></p>
                            <p>office: <span>+ 88500-567</span></p>
                            <p>e-mail: <span>ziniazara@gmail.com</span></p>
                            <p>social:
                                <span>
                                    <Link to="/">
                                        <i className="fab fa-facebook-f"> </i>
                                    </Link>
                                    <Link to="/">
                                    <i className="fab fa-twitter"> </i>
                                    </Link>
                                    <Link to="/">
                                    <i className="fab fa-linkedin-in"> </i>
                                    </Link>
                                    <Link to="/">
                                    <i className="fab fa-skype"> </i>
                                    </Link>
                            </span>
                            </p>
                        </div>
                        <div className="emergency row">
                            <div className="col-3">
                                <Image src="https://res.cloudinary.com/medical-pharma/image/upload/v1618573353/Assets/figures/figure1_bxuaga.png"/>
                            </div>
                            <div className="col-9">
                                <p>emergency cases</p>
                                <span>2-800-700-6200</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 rhs">
                        <div className="about-me">
                            <h4>about me:</h4>
                            <p>
                                Efficiently myocardinate market-driven innovation via open-source alignments.
                                Dramatically engage high Phosfluorescently expedite impactful supply chains via focused
                                results.
                                Holistically. Compellingly supply just in time catalysts for change through..
                            </p>

                            <h4>education:</h4>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>year</th>
                                        <th>degree</th>
                                        <th>institute</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>2006</td>
                                    <td>MBBS, M.D</td>
                                    <td>University of Wyoming</td>
                                </tr>
                                <tr>
                                    <td>2010</td>
                                    <td>M.D of medicine</td>
                                    <td>Netherland Medical College</td>
                                </tr>
                                </tbody>
                            </Table>

                            <h4>experienced:</h4>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>year</th>
                                        <th>department</th>
                                        <th>position</th>
                                        <th>hospital</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>2007 - 2008</td>
                                    <td>MBBS, M.D</td>
                                    <td>Senior prof.</td>
                                    <td>University of Wyoming</td>
                                </tr>
                                    <tr>
                                        <td>2010 - 2018</td>
                                        <td>M.D of medicine</td>
                                        <td>Associate prof.</td>
                                        <td>Netherland Medical College</td>
                                    </tr>
                                </tbody>
                            </Table>

                            <h4>appointment schedules:</h4>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>day</th>
                                        <th>time</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>saturday</td>
                                    <td>10.00 am - 12.00 pm</td>
                                    <td className="book"><Button>appointment</Button></td>
                                </tr>
                                <tr>
                                    <td>monday</td>
                                    <td>05.00 pm - 09.00 pm</td>
                                    <td className="book"><Button>appointment</Button></td>
                                </tr>
                                <tr>
                                    <td>wednesday</td>
                                    <td>07.00 pm - 10.00 pm</td>
                                    <td className="book"><Button>appointment</Button></td>
                                </tr>
                                <tr>
                                    <td>friday</td>
                                    <td>08.00 am - 11.00 pm</td>
                                    <td className="book"><Button>appointment</Button></td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}