import React from 'react';
import {Nav, Tab} from "react-bootstrap";

// style
import './style/Settings.scss';

// component
import PageHeader from "./component/PageHeader";
import Profile from "./component/Profile";
import Appointment from "./component/Appointment";
import Payments from "./component/Payments";
import NotFound from "./NotFound";

export default function Settings()
{
    function detectPage() {
        let page = window.location.pathname.replace("/settings/", "");
        switch (page) {
            case "profile":
                return "profile";

            case "appointments":
                return "appointments";

            case "orders":
                return "orders";

            case "payments":
                return "payments";

            default:
                return "profile";
        }
    }

    return(
        <div id="settings">
            <PageHeader title="Settings" firstLocation="Setting" secondLocation="Appointment" />
            <div className="container inner-settings">
                <Tab.Container id="left-tabs-example" defaultActiveKey={detectPage()} onSelect={(e) => window.location.href = e}>
                    <div className="row">
                        <div className="col-lg-3 text-center">
                            <div className="side-bar-settings">
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="profile">
                                            Profile
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="appointments">
                                            Appointments
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="payments">
                                            Payments
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="orders">
                                            Orders
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="social">
                                            Social Media
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <Tab.Content>
                                <Tab.Pane eventKey="profile">
                                    <Profile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="appointments">
                                    <Appointment />
                                </Tab.Pane>
                                <Tab.Pane eventKey="payments">
                                    <Payments />
                                </Tab.Pane>
                                <Tab.Pane eventKey="orders">
                                    <NotFound />
                                </Tab.Pane>
                                <Tab.Pane eventKey="social">
                                    <NotFound />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </div>
        </div>
    );
}