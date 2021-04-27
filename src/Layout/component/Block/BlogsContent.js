import React, {useEffect, useState} from 'react';
import DOMPurify from 'dompurify';

// style
import "./style/BlogsContent.scss";
import {Link} from "react-router-dom";
import API from "../../../utilize/API";

export default function BlogsContent() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const createMarkup=(html)=>{
        return{
            __html:DOMPurify.sanitize(html)
        }
    }

    useEffect(() => {
        API("blog", "GET")
            .then(({data, status}) => {
                if (status === 200) {
                    setBlogs(data?.blogs);
                    setLoading(false);
                    if (data?.blogs?.length < 1) {
                        setError("There are no blogs found");
                    }
                } else {
                    setError(data.message);
                    setLoading(false);
                }
            })
    }, []);

    return (
        <div className="single-blog-container">
            {error ? <div className="alert-danger">{error}</div> : null}
            {
                !loading ?

                    blogs?.map(blog => {
                        let month = blog.updated_at.slice(5, 7);
                        let day = blog.updated_at.slice(8, 10);
                        return(
                            <div className="blog-item" key={blog._id}>
                                <div className="img-side">
                                    <img alt="not found" className="img-fluid" src={blog.thumbnail}/>
                                    <span className="date">{day} {monthsName[month - 1]}</span>
                                </div>
                                <div className="content">
                                    <Link className="title" to={`blogs/${blog.slug}`}> <h3>{blog.title}</h3></Link>
                                    <div className="blog-content" dangerouslySetInnerHTML={createMarkup(blog.content)}>
                                    </div>
                                    <div>
                                    <span className="author">
                                        <i className="flaticon-people"> </i>
                                        by
                                        <Link to="/">admin</Link>
                                        </span>
                                        <span className="comment">
                                        <i className="flaticon-interface"> </i>
                                        15
                                        </span>
                                    </div>
                                </div>

                            </div>

                        )
                    })
                    :
                    <div id="loading">
                        <div className="spinner-border text-primary m-auto" role="status">
                            <span className="visually-hidden sr-only">Loading...</span>
                        </div>
                    </div>}
        </div>
    );
}