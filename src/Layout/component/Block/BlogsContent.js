import React from 'react';
import DOMPurify from 'dompurify';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

// style
import "./style/BlogsContent.scss";

export default function BlogsContent() {
    const blogs = useSelector(state => state.portal.blogs);
    const loading = useSelector(state => state.portal.loading);
    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let error = useSelector(state => state.portal.error);
    if (error === "Unauthorized") {
        error = null;
    }

    setTimeout(() => {
        if (!loading && blogs?.length === 0) {
            error = "There are no blogs found";
        }
    }, 10000)

    const createMarkup=(html)=>{
        return{
            __html:DOMPurify.sanitize(html)
        }
    }

    return (
        <div className="single-blog-container">
            {error ? <div className="alert-danger">{error}</div> : null}
            {
                blogs?.length !== 0 ?

                    blogs?.map(blog => {
                        let month = blog.updated_at.slice(5, 7);
                        let day = blog.updated_at.slice(8, 10);
                        return(
                            <div className="blog-item" key={blog._id}>
                                <div className="img-side">
                                    <img alt="not found" className="img-fluid" src={blog.thumbnail.includes("https") ? blog.thumbnail : blog.thumbnail?.replace("http", "https")}/>
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