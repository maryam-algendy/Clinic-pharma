import React, {useEffect, useState} from "react";
import {Button, Image, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import swal from "sweetalert";

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

    function rateDoctor(id) {
        API(`doctors/rate/?doctor=${id}&rate=${rate}`, "POST")
            .then(({ data, status }) => {
                if (status === 200) {
                    swal({ icon: "success", text: "Submitted successfully", buttons: false });
                } else {
                    swal({ icon: "error", text: `${data?.message} || An error occurred, try again`, buttons: false });
                }
        })
    }

    function topRatedBadge() {
        return doctor?.rate > 3 ? <svg className="top-rated-badge" viewBox="0 0 200 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
            <defs>
                <polygon id="path-1" points="0 422.631602 652.164698 422.631602 652.164698 0.669042254 0 0.669042254"> </polygon>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="(XL)-&gt;1200---Desktop-Opt-A-2-Copy" transform="translate(-1550, -300.000000)">
                    <g id="Hero" transform="translate(384.000000, 0.000000)">
                        <g id="Hero-Illustration">
                            <g id="Hero-Illustration-Final" transform="translate(906.000000, 182.000000)">

                                <g id="Group-94">

                                    <mask id="mask-2" fill="white">
                                        <use href="#path-1"></use>
                                    </mask>
                                    <g id="Clip-37"></g>
                                    <polygon id="Fill-64" fill="#1D4354" mask="url(#mask-2)" points="314.623619 218.879861 311.714257 218.879861 311.714257 216.941431 319.635431 216.941431 319.635431 218.879861 316.727564 218.879861 316.727564 226.496191 314.623619 226.496191"></polygon>
                                    <path d="M328.161788,221.745543 L328.161788,221.717168 C328.161788,220.080404 326.960387,218.715438 325.267369,218.715438 C323.572857,218.715438 322.398353,220.052029 322.398353,221.69178 L322.398353,221.717168 C322.398353,223.356919 323.601248,224.720391 325.294266,224.720391 C326.987284,224.720391 328.161788,223.3838 328.161788,221.745543 M320.200268,221.745543 L320.200268,221.717168 C320.200268,219.002171 322.343065,216.778501 325.294266,216.778501 C328.243973,216.778501 330.361367,218.975289 330.361367,221.69178 L330.361367,221.717168 C330.361367,224.435152 328.217076,226.658822 325.267369,226.658822 C322.316168,226.658822 320.200268,224.46054 320.200268,221.745543" id="Fill-65" fill="#1D4354" mask="url(#mask-2)"></path>
                                    <path d="M335.788589,221.758684 C336.840561,221.758684 337.45471,221.131457 337.45471,220.311582 L337.45471,220.286194 C337.45471,219.34386 336.798722,218.837598 335.748243,218.837598 L334.122468,218.837598 L334.122468,221.758684 L335.788589,221.758684 Z M332.020017,216.940983 L335.924568,216.940983 C338.206332,216.940983 339.585552,218.292508 339.585552,220.242886 L339.585552,220.272754 C339.585552,222.482982 337.864143,223.629912 335.721346,223.629912 L334.122468,223.629912 L334.122468,226.495743 L332.020017,226.495743 L332.020017,216.940983 Z" id="Fill-66" fill="#1D4354" mask="url(#mask-2)"></path>
                                    <path d="M349.042995,221.582314 C350.066576,221.582314 350.653827,221.035731 350.653827,220.230789 L350.653827,220.203908 C350.653827,219.303389 350.02623,218.837449 349.001155,218.837449 L346.912152,218.837449 L346.912152,221.582314 L349.042995,221.582314 Z M344.809702,216.942327 L349.178974,216.942327 C350.393823,216.942327 351.336713,217.282822 351.965805,217.910049 C352.497768,218.441698 352.78467,219.192878 352.78467,220.09489 L352.78467,220.120278 C352.78467,221.664451 351.950862,222.632173 350.736013,223.083179 L353.071571,226.495593 L350.613482,226.495593 L348.564825,223.438608 L346.912152,223.438608 L346.912152,226.495593 L344.809702,226.495593 L344.809702,216.942327 Z" id="Fill-67" fill="#1D4354" mask="url(#mask-2)"></path>
                                    <path d="M359.95975,222.496722 L358.689613,219.399414 L357.419475,222.496722 L359.95975,222.496722 Z M357.748217,216.872585 L359.686297,216.872585 L363.78361,226.496041 L361.584031,226.496041 L360.709878,224.353015 L356.667853,224.353015 L355.7937,226.496041 L353.650903,226.496041 L357.748217,216.872585 Z" id="Fill-68" fill="#1D4354" mask="url(#mask-2)"></path>
                                    <polygon id="Fill-69" fill="#1D4354" mask="url(#mask-2)" points="366.041914 218.879861 363.132553 218.879861 363.132553 216.941431 371.053727 216.941431 371.053727 218.879861 368.145859 218.879861 368.145859 226.496191 366.041914 226.496191"></polygon>
                                    <polygon id="Fill-70" fill="#1D4354" mask="url(#mask-2)" points="372.451027 216.94158 379.662419 216.94158 379.662419 218.811314 374.54003 218.811314 374.54003 220.749745 379.04827 220.749745 379.04827 222.619479 374.54003 222.619479 374.54003 224.626606 379.731155 224.626606 379.731155 226.494847 372.451027 226.494847"></polygon>
                                    <path d="M383.491061,218.837598 L383.491061,224.597634 L385.116836,224.597634 C386.836752,224.597634 387.999301,223.438757 387.999301,221.745244 L387.999301,221.718363 C387.999301,220.026343 386.836752,218.837598 385.116836,218.837598 L383.491061,218.837598 Z M381.38861,216.940983 L385.116836,216.940983 C388.121832,216.940983 390.197386,219.001872 390.197386,221.691482 L390.197386,221.718363 C390.197386,224.406479 388.121832,226.495743 385.116836,226.495743 L381.38861,226.495743 L381.38861,216.940983 Z" id="Fill-71" fill="#1D4354" mask="url(#mask-2)"></path>
                                    <polygon id="Fill-72" fill="#5AA2C6" mask="url(#mask-2)" points="313.024889 128.268243 313.024889 178.179094 350.873486 204.137336 388.666795 178.179094 388.666795 128.268243"></polygon>
                                    <polygon id="Fill-73" fill="#0B83B2" mask="url(#mask-2)" points="313.295653 178.178945 351.088962 204.137187 388.939053 178.178945 388.939053 128.268094"></polygon>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg> : null;
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
                                <Image src={doctor?.image?.replace("http", "https")} />
                                {topRatedBadge()}
                                <div className="doctor-rate">
                                    {[1, 2, 3, 4, 5].map(r =>
                                        <svg
                                            className={(rate >= r ? "active" : "")}
                                            key={r}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20.936" height="20.382"
                                            viewBox="1 -1 10.936 14.382"
                                            onClickCapture={() => {
                                                setRate(r);
                                                rateDoctor(doctor?._id)
                                            }}
                                        >
                                            <path className="a" d="M7.216.43l-1.579,3.2L2.1,4.146a.774.774,0,0,0-.428,1.32L4.232,7.957l-.6,3.518a.773.773,0,0,0,1.122.815l3.16-1.661,3.16,1.661a.774.774,0,0,0,1.122-.815l-.6-3.518,2.556-2.491a.774.774,0,0,0-.428-1.32l-3.533-.515L8.6.43a.774.774,0,0,0-1.388,0Z" transform="translate(-1.441 0.001)"/>
                                        </svg>
                                    )}
                                </div>
                                <span>Total Rate: {doctor?.rate} <br/></span>
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
