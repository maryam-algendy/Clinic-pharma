import React from "react";

//style
import "./style/LatestBlogs.scss";
import dateConverter from "../../utilize/dateConverter";

export default function LatestBlogs(props) {
    const blogs = props?.blogs?.slice((props?.blogs?.length - 3), props?.blogs?.length) || [];
    return (
        <div id="latest-blogs">
            <div className="inner-text">
                <h3>Latest Blogs</h3>
                {
                    blogs?.map((blog, id) => {
                        return (
                            <div key={id} className="blog">
                                <a className="title" href={`/blogs/${blog.slug}`}>{blog?.title}</a>
                                <span className="date">
                                    <i className="far fa-calendar-alt"> </i>
                                    {dateConverter(blog?.updated_at).replace("-", "").substr(0, 7)}
                                </span>
                                <span className="author">
                                    <i className="fas fa-user"> </i>
                                    posted by
                                    <span> admin</span>
                                </span>
                            </div>
                        )
                    })
                }
                <a href="/blogs">
                    see all blogs
                    <i className="fas fa-chevron-right"> </i>
                </a>
            </div>
        </div>
    )
}
