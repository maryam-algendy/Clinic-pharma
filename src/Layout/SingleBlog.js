import React, {useEffect, useState} from "react";


import BlogDetails from "./component/BlogDetails";
import PageHeader from "./component/PageHeader";
import SearchKeywords from "./component/Block/SearchKeywords";
import API from "../utilize/API";

export default function SingleBlog() {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState({});
    const [error, setError] = useState();

    useEffect(() => {
        API(`blog/?slug=${window.location.pathname.replace("/blogs/", "")}`)
            .then(({data, status}) => {
                if (status === 200) {
                    setBlog(data?.blog);
                    setLoading(false);
                } else {
                    setError(data?.message);
                    setLoading(false);
                }
            })
    }, [])
    return (
        <div id="single-blog">
            <PageHeader title="Shop Your Medicines & Products" firstLocation="Shop Medicine"/>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-9">
                        {error ? <div className="alert-danger">{error}</div> : null}
                        {
                            !loading ?
                                <BlogDetails details={blog}/>
                                :
                                <div id="loading">
                                    <div className="spinner-border text-primary m-auto" role="status">
                                        <span className="visually-hidden sr-only">Loading...</span>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="col-md-3">
                        <SearchKeywords/>
                    </div>
                </div>
            </div>
        </div>
    )
}