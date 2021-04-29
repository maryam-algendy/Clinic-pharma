import React from "react";

//style
import "./style/LatestBlogs.scss";

export default function LatestBlogs(props) {
    const blogs = props?.blogs?.slice((props?.blogs?.length - 3), props?.blogs?.length) || [];
    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return (
        <div id="latest-blogs">
            <div className="inner-text">
                <h3>Latest Blogs</h3>
                {
                    blogs?.map((blog, id) => {
                        let month = blog?.updated_at?.slice(5, 7);
                        let day = blog?.updated_at?.slice(8, 10);
                        return (
                            <div key={id} className="blog">
                                <a className="title" href={`/blogs/${blog.slug}`}>{blog?.title}</a>
                                <span className="date">
                                    <i className="far fa-calendar-alt"> </i>
                                    {day} {monthsName[month - 1]}
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