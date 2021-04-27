import React, {useEffect, useState} from 'react';

// style
import './style/AllDoctors.scss';

// component
import PageHeader from "./component/PageHeader";

// block
import DoctorBlock from "./component/Block/DoctorBlock";
import API from "../utilize/API";

export default function AllDoctor()
{
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        API("doctors", "GET")
            .then(({data, status}) => {
                if (status === 200) {
                    setData(data?.doctors);
                    setLoading(false);
                } else {
                    setError(data?.message);
                    setLoading(false);
                }
            })
    }, [])

    return(
        <div id="all-doctors">
            <PageHeader title="All Doctors" firstLocation="All Doctors" />
            <div className="container">
                {error ? <div className="alert-danger">{error}</div> : null}
                {!loading ? <>
                    <div className="header-content">
                        <h2 className="title">Find A Doctor</h2>
                        <span className="description">Our find a doctor tool assists you in choosing from our diverse pool of health specialists.</span>
                    </div>
                    <div className="department">
                        <ul className="department-list">
                            <li>
                                <button className="active">All</button>
                            </li>
                            <li>
                                <button>Dental</button>
                            </li>
                            <li>
                                <button>Gynaecology</button>
                            </li>
                            <li>
                                <button>Eye</button>
                            </li>
                            <li>
                                <button>Cardiology</button>
                            </li>
                            <li>
                                <button>Orthopaedics</button>
                            </li>
                            <li>
                                <button>Gastroenterology</button>
                            </li>
                            <li>
                                <button>Neurology</button>
                            </li>
                            <li>
                                <button>Medicine</button>
                            </li>
                        </ul>
                        <div className="sidebar">
                            <nav>
                                <input type="checkbox" id="check"/>
                                <label htmlFor="check" className="check-btn">
                                    <i className="fas fa-filter"> </i>
                                    Filter
                                </label>
                                <ul>
                                    <li>
                                        <h1>Departments</h1>
                                        <div className="line"></div>
                                    </li>
                                    <li>
                                        <a className="active" href="/">All</a>
                                    </li>
                                    <li>
                                        <a href="/">Dental</a>
                                    </li>
                                    <li>
                                        <a href="/">Gynaecology</a>
                                    </li>
                                    <li>
                                        <a href="/">Eye</a>
                                    </li>
                                    <li>
                                        <a href="/">Cardiology</a>
                                    </li>
                                    <li>
                                        <a href="/">Orthopaedics</a>
                                    </li>
                                    <li>
                                        <a href="/">Gastroenterology</a>
                                    </li>
                                    <li>
                                        <a href="/">Neurology</a>
                                    </li>
                                    <li>
                                        <a href="/">Medicine</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        {data?.map((doctors, i) => {
                            return (
                                <div key={i} className="col-12 col-md-6 col-lg-3">
                                    <DoctorBlock doctors={i + 1} image={doctors.image} alt={doctors.alter}
                                                 name={doctors.name} specialization={doctors.specialization}/>
                                </div>
                            );
                        })}
                    </div>
                </>  :<div id="loading">
                    <div className="spinner-border text-primary m-auto" role="status">
                        <span className="visually-hidden sr-only">Loading...</span>
                    </div>
                </div>}
            </div>
        </div>
    );
}