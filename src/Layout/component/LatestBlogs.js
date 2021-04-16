import React from "react";
import {Link} from "react-router-dom";

//style
import "./style/LatestBlogs.scss";

export default function LatestBlogs() {
    return (
        <div id="latest-blogs">
            <div className="inner-text">
                <h3>Latest Blogs</h3>
                {
                    [1, 2].map((blog, id) => {
                        return (
                            <div key={id} className="blog">
                                <p>My dental office need a blog area galley printingdern care to ailing dear.</p>
                                <span className="date">
                                    <i className="far fa-calendar-alt"></i>
                                    12 july ,2018
                                </span>
                                <span className="author">
                                    <i className="fas fa-user"></i>
                                    posted by
                                    <span> admin</span>
                                </span>
                            </div>
                        )
                    })
                }
                <Link to="/">
                    see all news
                    <i className="fas fa-chevron-right"></i>
                </Link>
            </div>
        </div>
    )
}