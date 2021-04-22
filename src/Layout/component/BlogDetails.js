import React from "react";
import {Button, Form, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

//style
import "./style/BlogDetails.scss";


export default function BlogDetails() {
    return (
        <div id="blog-detail">
            <div className="img-side">
                <Image src="/blog1.jpg"/>
                <span>20 june</span>
            </div>

            <h3>
                My Dental Office Blo Aret Are Building A Healthy And Cousderty Cmunity One Individual
                At A Timeveniam Quis Laore Nostrud.
            </h3>
            <div className="blog-info">
                <p>
                    <i className="far fa-user"> </i> by <span>admin</span>
                </p>
                <p>
                    <i className="fas fa-tag"> </i> by <span>Clinic Pharma</span>
                </p>
                <p>
                    <i className="far fa-comments"> </i> 15
                </p>
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aut cumque, eligendi error
                fugit,
                iste minima modi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aperiam consequuntur
                fuga,
                iste iure neque numquam repellat. Alias excepturi id iusto. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit.
                A accusantium consequatur enim molestias nihil, nisi possimus quasi tempora.
                Architecto asperiores dolorem ducimus enim error in ipsam laborum odio pariatur suscipit.
                Adipisci cumque itaque maiores neque nulla placeat veritatis!
                nulla quibusdam rerum vel. Dicta distinctio dolorem doloremque itaque porro, quo quod.
            </p>

            <div className="quote">
                <i className="fas fa-quote-left"> </i>
                <i>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum dignissimos dolor,
                    expedita illo labore maiores nostrum similique.
                    Alias dolores incidunt officiis praesentium voluptate. Exercitationem ipsum laborum obcaecati quae
                    vitae!
                </i>
            </div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aut cumque, eligendi error
                fugit,
                iste minima modi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad aperiam consequuntur
                fuga,
                Adipisci cumque itaque maiores neque nulla placeat veritatis!
                nulla quibusdam rerum vel. Dicta distinctio dolorem doloremque itaque porro, quo quod.
            </p>
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