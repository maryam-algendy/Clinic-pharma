import React from 'react';
import PageHeader from "./component/PageHeader";
import BlogsContent from "./component/Block/BlogsContent";

import SearchKeywords from "./component/Block/SearchKeywords";

// style
import "./style/Blogs.scss";

export default function Blogs() {

    return (
        <div id="blogs">
            <PageHeader title="Standard List News" firstLocation="Blogs"/>
            <div className="container blog-container">
                <div className="row">
                    <div className="col-lg-9">
                        <BlogsContent/>
                    </div>
                    <div className="col-lg-3">
                        <SearchKeywords/>
                    </div>
                </div>
            </div>
        </div>
    );
}