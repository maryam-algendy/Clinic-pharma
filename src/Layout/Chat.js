import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Tab, Nav, Modal } from "react-bootstrap";
// style
import "./style/Chat.scss";
import storage from "../utilize/storage";
import ChatBox from "./component/Block/ChatBox";
import MessageBox from "./component/Block/MessageBox";
import API from "../utilize/API";
import dateConverter from "../utilize/dateConverter";

export default function Chat () {
    const client = useRef();
    client.current = io(process.env.REACT_APP_BETA_AI_API_BASE_URL);
    const [show, setShow] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [selectedChatData, setSelectedChatData] = useState({ username: "", _id: "", image: "" });
    const [sender, setSender] = useState(true);
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [onlineList, setOnlineList] = useState({});
    const [error, setError] = useState();
    const [selectedChat, setSelectedChat] = useState(1);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const chatBox = document.querySelector("#chat-box");
        chatBox.scrollTop = chatBox.scrollHeight;

        API("doctors")
        .then(({ data, status }) => {
            if (status === 200) {
                setDoctors(data?.doctors);
            } else {
                console.log(data)
            }
        })

        if (storage("access-token")) {
            API("chat")
                .then(({ data, status }) => {
                    if (status === 200) {
                        setSender(data?.sender);
                        setChats(data?.chats);
                    } else {
                        console.log(data);
                    }
            })

            client.current.on("connect", () => {
                console.log("Connected to server");
                client.current.emit("goOnline", storage("access-token"));

                client.current.emit("getOnlineList");

                client.current.on("onlineList", (list) => {
                    setOnlineList(list);
                })

                client.current.on("ErrorMessage", (e) => {
                    console.log(e);
                })

                client.current.on("chat", (msgs) => {
                    if(msgs.length > 0) {
                        setMessages(msgs)
                    }
                    const chatBox = document.querySelector("#chat-box");
                    chatBox.scrollTop = chatBox.scrollHeight;
                })

            })
        }
    }, []);
    window.onbeforeunload = () => {
        client.current.emit("goOffline", storage("access-token"));
    };

    function startNewChat(data)
    {
        API("chat", "POST", data)
            .then(({ data, status }) => {
                if (status === 200) {
                    window.location.reload();
                } else {
                    setError(data?.message);
                }
        })
    }

    function getAllMessages(chatID) {
        client.current.emit("joinChat", chatID);
        client.current.emit("getMessages", chatID);

        client.current.on("chat", (msgs) => {
            setMessages(msgs)
            const chatBox = document.querySelector("#chat-box");
            chatBox.scrollTop = chatBox.scrollHeight;
        })
    }

    function sendNewMessage(chatID) {
        if (newMessage && newMessage.length > 1) {
            client.current.emit("sendMessage", { chatId: chatID, content: newMessage, sender: storage("access-token")});
            getAllMessages(chatID);
            setNewMessage("");
        }
    }

    return (
        <div id="chat-container" className="py-3 px-4">
            <div className="container">
                <Tab.Container id="left-tabs-example" defaultActiveKey={selectedChat} onSelect={(c) => {
                    setSelectedChat(c);
                    getAllMessages(c);
                }}>
                    <div className="row rounded-lg overflow-hidden shadow m-0 p-0">
                        <div className="col-md-5 col-xl-4 px-0">
                            <div className="bg-white">

                                <div className="bg-gray px-4 py-2 bg-light">
                                    <p className="h5 mb-0 py-1">Messages</p>
                                </div>

                                <div className="messages-box">
                                    <div className="list-group rounded-0">
                                        <Nav variant="pills" className="flex-column">
                                            {chats.map(chat => {
                                                return<Nav.Item key={chat?._id} id="single-chat-block" onClick={() => setSelectedChatData({ ...selectedChatData, username: sender ? chat?.receiver?.name : chat?.sender?.name, _id: sender ? chat?.receiver?._id : chat?.sender?._id, image: sender ? chat?.receiver?.image : chat?.sender?.image })}>
                                                    <Nav.Link eventKey={chat?._id} className={chat === selectedChat ? "list-group-item list-group-item-action active  text-white rounded-0" : "list-group-item list-group-item-action list-group-item-light rounded-0"}>
                                                        <ChatBox
                                                            avatar={sender ? chat?.receiver?.image : chat?.sender?.image}
                                                            name={sender ? chat?.receiver?.name : chat?.sender?.name}
                                                            lastMsgDate={dateConverter(chat?.updated_at).replace("-", "").substr(0, 7)}
                                                            lastMsg={chat?.lastMessage}
                                                        />
                                                    </Nav.Link>
                                                </Nav.Item>
                                            })}
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Chat Box */}
                        <div className="col-md-7 col-xl-8 px-0">
                            {selectedChat === 1 ? null : <div className="bg-gray px-4 py-2 bg-light d-flex justify-content-start align-items-center" id="user-data">
                                <img src={selectedChatData.image}
                                     alt="user" width="30" className="rounded-circle"/>
                                <div className="inner-data">
                                    <p className="mb-0 px-3 py-0">{selectedChatData.username}</p>
                                    <span className="mb-0 px-3 py-0">{selectedChatData._id in onlineList && onlineList[selectedChatData._id] === true ? "Online" : "Offline"}</span>
                                </div>
                            </div>}

                            <div className="px-4 chat-box bg-white" id="chat-box">

                                <div id="msgs">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="1">
                                            <div className="empty-flag">
                                                <h4>You don’t have a message selected</h4>
                                                <p>Choose one from your existing messages, or start a new.</p>
                                                <button onClick={(e) => {
                                                    e.stopPropagation();
                                                    setShow(true);
                                                }}>New Message</button>

                                                {/* list of new chats */}
                                                <Modal show={show} onHide={() => setShow(false)}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>New Message</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        {error ? <div className="alert-danger">{error}</div> : null}
                                                        <div className="doctors-container">
                                                            {doctors?.map(doctor => {
                                                                return (
                                                                    <div id="doctor" key={doctor?._id} onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        startNewChat({ receiver: doctor?._id });
                                                                    }}>
                                                                        <div className="img">
                                                                            <img src={doctor?.image} alt="user" className="img-fluid"/>
                                                                        </div>
                                                                        <div className="doctor-block">
                                                                            <h4>{doctor?.name}</h4>
                                                                            <p>{"@" + doctor?.username}</p>
                                                                        </div>
                                                                </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                        </Tab.Pane>
                                        {chats?.map(chat => <Tab.Pane eventKey={chat?._id} key={chat?._id}>
                                            {/*Sender Message*/}
                                            {messages?.map((msg, id) => {
                                                return <div key={id}>
                                                    <MessageBox
                                                        sender={msg.sender?._id !== storage("m_ph_uu") || false}
                                                        msg={msg.content}
                                                        msgTime={msg.created_at || chat?.created_at || "12:00 PM | Aug 13"}
                                                        image={selectedChatData?.image}
                                                    />
                                                </div>
                                            })}
                                        </Tab.Pane>)}
                                    </Tab.Content>
                                </div>

                            </div>

                            {/*Typing area*/}
                            {selectedChat === 1 ? <div style={{ height: "48px", background: "#FFFFFF" }}> </div> : <form action="#" className="bg-light">
                                <div className="input-group msg-container">
                                    <input onKeyPress={(e) => e.key === "Enter" ? sendNewMessage(selectedChat) : null} type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
                                    <div className="input-group-append">
                                        <button id="button-addon2" type="submit" className="btn btn-link" onClickCapture={(e) => {
                                            e.preventDefault();
                                            sendNewMessage(selectedChat);
                                        }}>
                                            <i className="fa fa-paper-plane"> </i>
                                        </button>
                                    </div>
                                </div>
                            </form>}

                        </div>
                    </div>
                </Tab.Container>
            </div>

        </div>
    )
}
