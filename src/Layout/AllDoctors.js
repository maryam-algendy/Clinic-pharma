import React from 'react';
import {NavDropdown} from 'react-bootstrap';

// style
import './style/AllDoctors.scss';

// component
import PageHeader from "./component/PageHeader";

// block
import DoctorBlock from "./component/Block/DoctorBlock";

export default function AllDoctor()
{
    const allDoctors = [
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team11_xvpcka.png", alter: "Zinia", title: "Dr. Zinia Zara", span: "Gynaecology"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team12_njoetd.png", alter: "Nadim", title: "Dr. Nadim Kamal", span: "Orthopaedics"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573404/Assets/team/team13_stxxn5.png", alter: "Rihana", title: "Dr. Rihana Roy", span: "Lense Expert"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573392/Assets/team/team14_lxncqp.png", alter: "Steven", title: "Dr. Steven Jobs", span: "Cardiology"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team10_fb2mmd.png", alter: "Zinia", title: "Dr. Zinia Zara", span: "Gynaecology"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team08_r24q5v.png", alter: "Nadim", title: "Dr. Nadim Kamal", span: "Orthopaedics"}
    ]

    return(
        <div id="all-doctors">
            <PageHeader />
            <div className="container">
                <div className="header-content">
                    <h2 className="title">Find A Doctor</h2>
                    <span className="description">Our find a doctor tool assists you in choosing from our diverse pool of health specialists.</span>
                </div>
                <div className="department">
                    <ul className="department-list">
                        <li><button className="active">All</button></li>
                        <li><button>Dental</button></li>
                        <li><button>Gynaecology</button></li>
                        <li><button>Eye</button></li>
                        <li><button>Cardiology</button></li>
                        <li><button>Orthopaedics</button></li>
                        <li><button>Gastroenterology</button></li>
                        <li><button>Neurology</button></li>
                        <li><button>Medicine</button></li>
                    </ul>
                    <div className="dropdown-btn">
                        <NavDropdown className="dropdown" title="Filter" id="basic-nav-dropdown">
                            <div className="dropdown-list">
                                <a href="/" className="active">All</a>
                                <a href="/">Dental</a>
                                <a href="/">Gynaecology</a>
                                <a href="/">Eye</a>
                                <a href="/">Cardiology</a>
                                <a href="/">Orthopaedics</a>
                                <a href="/">Gastroenterology</a>
                                <a href="/">Neurology</a>
                                <a href="/">Medicine</a>
                            </div>
                        </NavDropdown>
                    </div>
                </div>
                <div className="row">
                        {allDoctors?.map((doctors, i) => {
                            return (
                                <div key={i} className="col-12 col-md-4 col-lg-3">
                                    <DoctorBlock doctors={i + 1} img={doctors.image} alt={doctors.alter} title={doctors.title} span={doctors.span} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}