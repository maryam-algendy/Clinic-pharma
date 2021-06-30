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
    const [selectedSpecialization, setSelectedSpecialization] = useState("All");
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (selectedSpecialization === "All"){
            loadDoctors()
        }
    }, [selectedSpecialization])

    function loadDoctors() {
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
    }

    function customSpecializations(specialization) {
        setSelectedSpecialization(specialization);
        if (specialization === "All") {
            loadDoctors();
        } else {
            API(`doctors/?specialization=${specialization}`, "GET")
                .then(({data, status}) => {
                    if (status === 200) {
                        console.log(data)
                        setData(data?.doctor);
                        setLoading(false);
                    } else {
                        setError(data?.message);
                        setLoading(false);
                    }
                })
        }
    }

    function activeSpecialization(specialization) {
        return selectedSpecialization === specialization ? "active" : "";
    }

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
                                <button onClick={(e) => customSpecializations("All")} className={activeSpecialization("All")}>All</button>
                            </li>
                            <li>
                                <button onClick={(e) => customSpecializations("Dental")} className={activeSpecialization("Dental")}>Dental</button>
                            </li>
                            <li>
                                <button onClick={(e) => customSpecializations("Gynaecology")} className={activeSpecialization("Gynaecology")}>Gynaecology</button>
                            </li>
                            <li>
                                <button onClick={(e) => customSpecializations("Eye")} className={activeSpecialization("Eye")}>Eye</button>
                            </li>
                            <li>
                                <button onClick={(e) => customSpecializations("Cardiology")} className={activeSpecialization("Cardiology")}>Cardiology</button>
                            </li>
                            <li>
                                <button onClick={(e) => customSpecializations("Orthopaedics")} className={activeSpecialization("Orthopaedics")}>Orthopaedics</button>
                            </li>
                            <li>
                                <button onClick={(e) => customSpecializations("Gastroenterology")} className={activeSpecialization("Gastroenterology")}>Gastroenterology</button>
                            </li>
                            <li>
                                <button onClick={(e) => customSpecializations("Neurology")} className={activeSpecialization("Neurology")}>Neurology</button>
                            </li>
                            <li>
                                <button onClick={(e) => customSpecializations("Medicine")} className={activeSpecialization("Medicine")}>Medicine</button>
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
                                        <div className="line"> </div>
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
                        {data.length >= 1 ? data?.map((doctors, i) => {
                            return (
                                <div key={i} className="col-12 col-md-6 col-lg-3">
                                    <DoctorBlock doctors={i + 1} image={doctors.image} alt={doctors.alter}
                                                 name={doctors.name} specialization={doctors.specialization}/>
                                </div>
                            );
                        }) : <div className="alert-danger w-100 d-flex align-items-center">
                            <h6 className="p-0 m-0">There is no doctor with this specialization yet!</h6>
                            <button onClick={(e) => customSpecializations("All")} className="text-primary p-0 m-0 ml-2 border-0" style={{ background: "transparent" }}>Get All doctors.</button>
                        </div>}
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
