import React from "react";
import {Button, Form, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import DOMPurify from 'dompurify';

//style
import "./style/BlogDetails.scss";


export default function BlogDetails(props) {

    const blog = props.details[0];
    const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = blog.updated_at.slice(5, 7);
    const day = blog.updated_at.slice(8, 10);

    const createMarkup = (html) => {
        return {
            __html: DOMPurify.sanitize(html)
        }
    }

    return (
        <div id="blog-detail">
            <div className="img-side">
                <Image src={blog.thumbnail}/>
                <span>{day} {monthsName[month - 1]}</span>
            </div>

            <h3>
                {blog.title}
            </h3>
            <div className="blog-info">
                <p>
                    <i className="far fa-user"> </i> by <span>admin</span>
                </p>
                <p>
                    <i className="fas fa-tag"> </i> by <span>{blog.category.name}</span>
                </p>
                <p>
                    <i className="far fa-comments"> </i> 15
                </p>
            </div>
            <div className="content" dangerouslySetInnerHTML={createMarkup(blog.content)}>
            </div>
            <div className="share">
                <span>share this post</span>
                <Button>
                    <i className="fab fa-facebook-square"> </i>facebook
                </Button>
                <Button>
                    <i className="fab fa-twitter-square"> </i>twitter
                </Button>
                <Button>
                    <i className="fab fa-google-plus-square"> </i>google plus
                </Button>
            </div>
            <div className="about-author row">
                <div className="col-sm-2 img-side text-center">
                    <Image src="/blog7.jpg"/>
                </div>
                <div className="col-sm-10 text-side">
                    <h5>about the author</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis cum doloremque ipsum,
                        maiores natus non quaerat repellat.
                        Distinctio doloribus impedit laborum officiis perferendis quae quas quos, unde! At, earum.</p>
                    <Link to="/">
                        <i className="fab fa-facebook-f"> </i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-twitter"> </i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-linkedin-in"> </i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-pinterest-p"> </i>
                    </Link>
                    <Link to="/">
                        <i className="fab fa-skype"> </i>
                    </Link>

                </div>
            </div>
            <div className="comments">
                <h4>03 comments</h4>
                <div className="row my-4">
                    <div className="col-sm-2 col-3 img-side">
                        <Image src="/blog8.jpg"/>
                    </div>
                    <div className="col-9 col-sm-8 text-side">
                        <h5>about the author</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis cum doloremque ipsum,
                            maiores natus non quaerat repellat.
                            Distinctio doloribus impedit laborum officiis perferendis quae quas quos, unde! At,
                            earum.</p>
                    </div>
                    <div className="col-sm-2 text-center"><Button>reply</Button></div>
                </div>
                <div className="row my-3 reply">
                    <div className="col-sm-2 col-3 img-side">
                        <Image src="/blog7.jpg"/>
                    </div>
                    <div className="col-9 col-sm-8 text-side">
                        <h5>about the author</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis cum doloremque ipsum,
                            maiores natus non quaerat repellat.
                            Distinctio doloribus impedit laborum officiis perferendis quae quas quos, unde! At,
                            earum.</p>
                    </div>
                    <div className="col-sm-2 text-center"><Button>reply</Button></div>
                </div>
            </div>

            <div className="leave-us-message">
                <h4>leave us comment</h4>
                <Form>
                    <div className="row group">
                        <div className="col-lg-4 col-md-6 input">
                            <Form.Control placeholder="Name*"/>
                        </div>
                        <div className="col-lg-4 col-md-6 input">
                            <Form.Control placeholder="E-Mail*"/>
                        </div>
                        <div className="col-lg-4 col-md-6 input">
                            <Form.Control placeholder="Website*"/>
                        </div>
                    </div>
                    <Form.Control placeholder="Message *" as="textarea" rows="6"/>
                    <Button>leave comment</Button>
                </Form>
            </div>
        </div>
    )
}