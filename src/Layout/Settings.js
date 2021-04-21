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
    return(
        <div id="settings">
            <PageHeader title="Settings" firstLocation="Setting" secondLocation="Appointment" />
            <div className="container">
                <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                    <div className="row">
                        <div className="col-lg-3 text-center">
                            <div className="side-bar-settings">
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="1">
                                            Profile
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="2">
                                            Appointment
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="3">
                                            Payments
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="4">
                                            Orders
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="5">
                                            Social Media
                                            <i className="fas fa-chevron-right"> </i>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <Tab.Content>
                                <Tab.Pane eventKey="1">
                                    <Profile />
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                    <Appointment />
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                    <Payments />
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <NotFound />
                                </Tab.Pane>
                                <Tab.Pane eventKey="5">
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