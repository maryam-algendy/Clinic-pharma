import React, {useEffect, useState} from "react";
import {Button, Image, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

//style
import "./style/SingleDoctor.scss";
import PageHeader from "./component/PageHeader";
import API from "../utilize/API";

// todo: create request onLoad to get doctor data
export default function SingleDoctor() {
    const [loading, setLoading] = useState(true);
    const [doctor, setDoctor] = useState({});
    const [error, setError] = useState();
    const [role, setRole] = useState();
    const [rate, setRate] = useState();

    useEffect(() => {
        API(`doctors/?name=${window.location.pathname.replace("/doctor/", "")}`)
            .then(({data, status}) => {
                if (status === 200) {
                    setDoctor(data?.doctor);
                    setRole(data?.doctor?.education[0]?.degree);
                    setLoading(false);
                } else {
                    setError(data?.message);
                    setLoading(false);
                }
            })
    }, []);

     const handleChange = () => {
         if (rate === [1]) {
            document.querySelector('.rate').style.cssText = 'fill: #396cf0, stroke: #396cf0';
         } else {
             return;
         }
    }

    return (
        <div id="single-doctor">
            <PageHeader title="Doctor Name" firstLocation="Doctor Name" />
            {error ? <div className="alert-danger">{error}</div> : null}
            {!loading ? <>
                {doctor?.name && <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-3 lhs">
                            <div className="name-card">
                                <Image src={doctor?.image?.replace("http", "https")}/>
                                <div className="doctor-rate">
                                    {[1, 2, 3, 4, 5].map(id =>
                                        <svg
                                            className="rate"
                                            key={id}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20.936" height="20.382"
                                            viewBox="1 -1 10.936 14.382"
                                            onClickCapture={() => setRate(id)}
                                            onChange={handleChange}
                                        >
                                            <path className="a" d="M7.216.43l-1.579,3.2L2.1,4.146a.774.774,0,0,0-.428,1.32L4.232,7.957l-.6,3.518a.773.773,0,0,0,1.122.815l3.16-1.661,3.16,1.661a.774.774,0,0,0,1.122-.815l-.6-3.518,2.556-2.491a.774.774,0,0,0-.428-1.32l-3.533-.515L8.6.43a.774.774,0,0,0-1.388,0Z" transform="translate(-1.441 0.001)"/>
                                        </svg>
                                    )}
                                </div>
                                <h4>Dr. {doctor?.name}</h4>
                                <span>{doctor?.specialization}</span>
                                <p>{role}</p>
                            </div>
                            <div className="personal-info">
                                <h4>personal info</h4>
                                <p>phone: <span className="text-md-left">+ (20) {doctor?.phone}</span></p>
                                <p>office: <span>+ {doctor?.officeNumber}</span></p>
                                <p>e-mail: <span>{doctor?.email}</span></p>
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
                                    <Image
                                        src="https://res.cloudinary.com/medical-pharma/image/upload/v1618573353/Assets/figures/figure1_bxuaga.png"/>
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
                                    {doctor?.aboutDoctor}
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
                                    {doctor?.education?.map(e => {
                                        return <tr key={e._id}>
                                            <td>{e.year}</td>
                                            <td>{e.degree}</td>
                                            <td>{e.school}</td>
                                        </tr>
                                    })}
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
                                {doctor?.availableDates?.length >= 1 ? <Table>
                                    <thead>
                                    <tr>
                                        <th>day</th>
                                        <th>time</th>
                                        <th> </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {doctor?.availableDates?.map(date => <tr key={date._id}>
                                        <td>{date.date}</td>
                                        <td>{date?.time}</td>
                                        <td className="book"><Button>appointment</Button></td>
                                    </tr>)}
                                    </tbody>
                                </Table> : <div>There are no appointments available for this doctor!</div>}
                            </div>
                        </div>
                    </div>
                </div>}
                {!doctor?.name && <div className="container p-4">There is no data for this doctor</div>}
            </> : <div id="loading">
                <div className="spinner-border text-primary m-auto" role="status">
                    <span className="visually-hidden sr-only">Loading...</span>
                </div>
            </div>}
        </div>
    )
}
