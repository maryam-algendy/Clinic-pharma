import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import API from "../utilize/API";
import PageHeader from "./component/PageHeader";

//style
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "./style/NewBlog.scss";



export default function NewBlog() {
    const [keywords, setKeywords] = useState({});
    const [form, setForm] = useState({title:"", content:"", thumbnail:"", category:"", keywords: ""});
    const [error, setError] = useState();

    function addToBlogs() {
        API("blog", "POST", form)
            .then(({data, status}) => {
                if (status === 200) {
                    setError("You just added a new blog successfully");
                } else {
                    setError(data?.message);
                    window.scrollTo(0, 0);
                }
            })
    }

    //text editor
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty(),);
    const [convertedContent, setConvertedContent] = useState(null);

    const handleEditorChange = (state) => {
        setEditorState(state);
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
        setForm({...form, content: convertedContent});
    }

    const [category,setCategory]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        document.title = "Clinic Pharma - Add Blog";

        API("blog/category","GET")
            .then(({data, status}) => {
                if (status === 200) {
                    setCategory(data?.categories);
                    setLoading(false);
                } else {
                    setError(data.message);
                    setLoading(false);
                }
            });
        },[])

    return (
        <div id="new-blog">
            <PageHeader title="Add New Blog" firstLocation="Blogs" secondLocation="Create Blog"/>
            {!loading?
                <div className="container py-5">
                    <Form method="post">
                        {error ? <div className={error.includes("You just added a new blog successfully") ? "alert-success" : "alert-danger"}>{error}</div> : null}
                        <Form.Group controlId="title">
                            <Form.Label><h3>write your blog's title</h3></Form.Label>
                            <Form.Control type="text" placeholder="Title"
                                          onChange={(e)=>{setForm({...form,title: e.target.value})}}/>
                        </Form.Group>

                        <div>
                            <h3>write blog's content</h3>
                            <div id="text-editor">
                                <Editor
                                    editorState={editorState}
                                    onEditorStateChange={handleEditorChange}
                                    wrapperClassName="wrapper-class"
                                    editorClassName="editor-class"
                                    toolbarClassName="toolbar-class"
                                />
                            </div>
                        </div>

                        <Form.Group controlId="image">
                            <Form.Label>
                                <h3>select an image</h3>
                                </Form.Label>
                            <label className="upload" htmlFor="profile">
                                <span>{form.thumbnail ? form.thumbnail.name: "No file uploaded"}</span>
                                <i className="fa fa-upload"> </i>
                            </label>
                            <input type="file" name="profile" placeholder="Choose Image" id="profile"  onChange={(e)=>{setForm({...form,thumbnail: e.target.files[0]})}}/>
                        </Form.Group>

                        <Form.Group controlId="keywords">
                            <Form.Label><h3>add keywords</h3></Form.Label>
                            <Form.Control type="text" placeholder="Keywords" onChange={(e) => {setKeywords((e.target.value).split(/\s/));setForm({...form,keywords: keywords});}} />
                        </Form.Group>
                        <Form.Group controlId="ControlSelect1">
                            <Form.Label><h3>Select Category</h3></Form.Label>
                            <Form.Control as="select" onChange={(e)=>{setForm({...form,category: e.target.value ,slug: e.target.value})}}>
                                {category.map((item,id)=>{
                                    return(
                                        <option key={id} value={item.slug}>{item.name}</option>
                                    )
                                })}
                            </Form.Control>
                        </Form.Group>
                        <div className="post text-center" >
                            <Button onClick={() => {
                                addToBlogs();
                                console.log(form);
                            }}>post</Button>
                        </div>
                    </Form>

                </div>
                : <div id="loading">
                    <div className="spinner-border text-primary m-auto" role="status">
                    <span className="visually-hidden sr-only">Loading...</span>
                    </div>
                </div>
            }
        </div>
    )
}