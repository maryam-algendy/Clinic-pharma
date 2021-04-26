import React from "react";
import {Image,Nav,Tab} from "react-bootstrap";

//style
import "./style/About.scss";
import AboutUsBlock from "./component/Block/AboutUsBlock";

export default function About(){
    return(
        <div id="about" className="container py-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <div className="row">
                    <div className="col-lg-3 text-center">
                        <div className="side-bar">
                            <Nav variant="pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="1">
                                        who we are
                                        <i className="fas fa-chevron-right"> </i>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="2">
                                        our mission
                                        <i className="fas fa-chevron-right"> </i>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="3">
                                        experience
                                        <i className="fas fa-chevron-right"> </i>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="4">
                                        awards
                                        <i className="fas fa-chevron-right"> </i>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="5">
                                        success story
                                        <i className="fas fa-chevron-right"> </i>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="emergency d-none d-lg-flex row">
                            <div className="col-3">
                                <Image src="/figure6.png"/>
                            </div>
                            <div className="col-9">
                                <p>emergency cases</p>
                                <span>2-800-700-6200</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <Tab.Content>
                            <Tab.Pane eventKey="1">
                                <AboutUsBlock/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                                <AboutUsBlock/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                                <AboutUsBlock/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="4">
                                <AboutUsBlock/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="5">
                                <AboutUsBlock/>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </Tab.Container>
            <div className="emergency d-lg-none row">
                <div className="col-3">
                    <Image src="/figure6.png"/>
                </div>
                <div className="col-9">
                    <p>emergency cases</p>
                    <span>2-800-700-6200</span>
                </div>
            </div>
        </div>
    );
}