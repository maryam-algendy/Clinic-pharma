import React from 'react';
import PageHeader from "./component/PageHeader";
import SingleBlog from "./component/Block/SingleBlog";
import RelatedPosts from "./component/Block/RelatedPosts";
import {Button} from "react-bootstrap";

// style
import "./style/Blogs.scss";

export default function Blogs ()
{
    return (
        <div id="blogs">
            <PageHeader title="Standard List News" firstLocation="Blogs" />
            <div className="container blog-container">
                <div className="row">
                    <div className="col-lg-9">
                        {[1, 2, 3].map(blog => <SingleBlog key={blog} />)}
                    </div>
                    <div className="col-lg-3">
                        <div className="search">
                            <h3>Search Keywords</h3>
                            <input type="text" placeholder="search here ..."/>
                            <i className="flaticon-search"> </i>
                        </div>

                        <div className="categories">
                            <h3>Categories</h3>
                            <ul>
                                <li>
                                    <a href="/">
                                        <i className="fas fa-chevron-right"> </i>
                                        Cardiology
                                        <span>15</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fas fa-chevron-right"> </i>
                                        Dental
                                        <span>10</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fas fa-chevron-right"> </i>
                                        Laboratory
                                        <span>14</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fas fa-chevron-right"> </i>
                                        Research
                                        <span>13</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                     <i className="fas fa-chevron-right"> </i>
                                        Eye
                                        <span>19</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="related-posts">
                            <h3>Related Posts</h3>
                            <RelatedPosts
                             avatar="/blog3.jpg"
                             date="June 27 , 2018"
                             text="Achieving Better Health Cancer Treatment For"
                            />
                            <RelatedPosts
                              avatar="/blog4.jpg"
                              date="June 27 , 2018"
                              text="Achieving Better Health Cancer Treatment For"
                            />
                            <RelatedPosts
                              avatar="/blog5.jpg"
                              date="June 27 , 2018"
                              text="Achieving Better Health Cancer Treatment For"
                            />
                            <RelatedPosts
                              avatar="/blog6.jpg"
                              date="June 27 , 2018"
                              text="Achieving Better Health Cancer Treatment For"
                            />
                        </div>

                        <div className="links">
                            <h3>Links</h3>
                            <>
                                <Button variant="outline-primary" size="sm">
                                    Dental
                                </Button>
                                <Button variant="outline-primary" size="sm">
                                    Eye Care
                                </Button>
                                <Button variant="outline-primary" size="sm">
                                    Laboratory
                                </Button>
                                <Button variant="outline-primary" size="sm">
                                    Care
                                </Button>
                                <Button variant="outline-primary" size="sm">
                                    Health
                                </Button>
                                <Button variant="outline-primary" size="sm">
                                    Modern Clinic
                                </Button>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}