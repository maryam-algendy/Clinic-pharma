import React from "react";


import BlogDetails from "./component/BlogDetails";
import PageHeader from "./component/PageHeader";

export default function SingleBlog() {
    return (
        <div id="single-blog">
            <PageHeader title="Shop Your Medicines & Products" firstLocation="Shop Medicine"/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-9">
                        <BlogDetails/>
                    </div>
                    <div className="col-md-3">
                        search keyword
                    </div>
                </div>
            </div>
        </div>
    )
}