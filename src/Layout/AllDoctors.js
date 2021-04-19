import React from 'react';

// style
import './style/AllDoctors.scss';

// component
import PageHeader from "./component/PageHeader";

// block
import DoctorBlock from "./component/Block/DoctorBlock";

export default function AllDoctor()
{
    const allDoctors = [
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573384/Assets/team/team01_yttlb4.png", alter: "Zinia", title: "Dr. Zinia Zara", span: "Gynaecology"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573404/Assets/team/team13_stxxn5.png", alter: "Nadim", title: "Dr. Nadim Kamal", span: "Orthopaedics"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573382/Assets/team/team03_neii3v.png", alter: "Rihana", title: "Dr. Rihana Roy", span: "Lense Expert"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573386/Assets/team/team04_sal7db.png", alter: "Steven", title: "Dr. Steven Jobs", span: "Cardiology"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573385/Assets/team/team02_x1btip.png", alter: "Johora", title: "Dr. Johora Ray", span: "Dental Consult"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573386/Assets/team/team06_mhot7v.png", alter: "Jason", title: "Dr. Jason Roy", span: "Associate Eye"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573384/Assets/team/team05_qfsdl3.png", alter: "Maria", title: "Dr. Maria", span: "Gastroenterology"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573386/Assets/team/team07_et2olk.png", alter: "Tina", title: "Dr. Tina Rahman", span: "Gastroenterology"},
        {image: "/team08.png", alter: "Mark", title: "Dr. Mark Willy", span: "Gastroenterology"},
        {image: "/team14.png", alter: "Zinia", title: "Dr. Zinia Zara", span: "Associate Eye"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team09_zzi6bf.png", alter: "Nadim", title: "Dr. Nadim Kamal", span: "Associate Eye"},
        {image: "https://res.cloudinary.com/medical-pharma/image/upload/v1618573387/Assets/team/team10_fb2mmd.png", alter: "Johora", title: "Dr. Johora Ray", span: "Associate Eye"}
    ]

    return(
        <div id="all-doctors">
            <PageHeader title="All Doctors" firstLocation="All Doctors" />
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
                    <div className="sidebar">
                        <nav>
                            <input type="checkbox" id="check" />
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
                        {allDoctors?.map((doctors, i) => {
                            return (
                                <div key={i} className="col-12 col-md-6 col-lg-3">
                                    <DoctorBlock doctors={i + 1} image={doctors.image} alt={doctors.alter} title={doctors.title} span={doctors.span} />
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}