import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Tab, Nav } from "react-bootstrap";
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
    const [selectedChatData, setSelectedChatData] = useState({ username: "", _id: "", image: "" });
    const [sender, setSender] = useState(true);
    const [chats, setChats] = useState([]);
    const [messages, setMessages] = useState([]);
    const [onlineList, setOnlineList] = useState({});
    const [selectedChat, setSelectedChat] = useState(1);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const chatBox = document.querySelector("#chat-box");
        chatBox.scrollTop = chatBox.scrollHeight;

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
                                                <svg
                                                    data-name="Layer 1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={347.997}
                                                    height={227.305}
                                                    viewBox="0 0 847.997 727.305"
                                                >
                                                    <path
                                                        d="M651.568 506.704a7.006 7.006 0 01-6.98-6.548l-1.04-15.874a7.006 7.006 0 016.533-7.448l124.364-8.145a14.96 14.96 0 111.955 29.856l-124.363 8.144q-.235.015-.469.015z"
                                                        fill="#396cf0"
                                                    />
                                                    <path
                                                        d="M676.09 508.75a7.015 7.015 0 01-6.997-6.744l-.886-23.71a7.005 7.005 0 016.74-7.261l102.267-3.822a7.006 7.006 0 017.262 6.739l.886 23.71a7.005 7.005 0 01-6.74 7.261l-102.266 3.822a6.38 6.38 0 01-.265.006zM795.932 727.305h-15.908a7.014 7.014 0 01-7.006-7.005V587.716a7.014 7.014 0 017.006-7.005h15.908a7.014 7.014 0 017.005 7.005V720.3a7.014 7.014 0 01-7.005 7.005zM757.932 727.305h-15.908a7.014 7.014 0 01-7.006-7.005V587.716a7.014 7.014 0 017.006-7.005h15.908a7.014 7.014 0 017.005 7.005V720.3a7.014 7.014 0 01-7.005 7.005z"
                                                        fill="#2f2e41"
                                                    />
                                                    <circle cx={771.771} cy={387.379} r={54.967} fill="#396cf0" />
                                                    <path
                                                        d="M742.018 406.146a13.036 13.036 0 01-4.76-2.794 8.766 8.766 0 01-2.563-6.94 5.897 5.897 0 012.621-4.539c1.966-1.26 4.595-1.264 7.272-.085l-.101-21.458 2.155-.01.12 25.226-1.662-1.044c-1.926-1.21-4.676-2.061-6.62-.814a3.787 3.787 0 00-1.64 2.93 6.624 6.624 0 001.906 5.175c2.38 2.273 5.853 2.984 9.813 3.62l-.342 2.128a35.528 35.528 0 01-6.2-1.395zM721.986 371.385l.282-2.137 11.51 1.52-.282 2.137zM758.313 376.18l.282-2.137 11.51 1.52-.282 2.136zM807.614 623.289h-82.635a9.177 9.177 0 01-8.895-6.962 8.998 8.998 0 01-.12-3.32s16.141-90.643 24.126-134.176a27.575 27.575 0 0127.128-22.6 59.612 59.612 0 0159.612 59.612v88.23a19.216 19.216 0 01-19.216 19.216z"
                                                        fill="#2f2e41"
                                                    />
                                                    <path
                                                        d="M791.679 611.312a7.017 7.017 0 01-6.565 3.875l-15.894-.67a7.005 7.005 0 01-6.704-7.294l5.245-124.519a14.96 14.96 0 1129.892 1.26l-5.245 124.518a6.967 6.967 0 01-.73 2.83z"
                                                        fill="#396cf0"
                                                    />
                                                    <path
                                                        d="M799.814 578.296a7.016 7.016 0 01-6.565 3.875l-27.147-1.144a7.014 7.014 0 01-6.705-7.294l4.308-102.248a7.005 7.005 0 017.294-6.705l27.147 1.144a7.005 7.005 0 016.704 7.294l-4.307 102.248a6.975 6.975 0 01-.729 2.83zM768.716 351.675c-11.856 4.675-29.772 9.645-37.589-4.236a22.686 22.686 0 01-1.286-18.638c2.36-6.549 7.383-11.944 13.106-15.757 10.72-7.142 24.285-9.086 36.77-6.326a50.165 50.165 0 0117.548 7.541c6.04 4.14 10.291 9.73 14.566 15.578 4.37 5.98 9.317 12.011 16.498 14.63 5.871 2.143 13.233 1.05 17.387-3.935a12.177 12.177 0 002.194-3.935c.623-1.832-2.273-2.618-2.893-.797-2.183 6.414-10.217 7.851-15.89 5.775-7.49-2.741-12.22-9.862-16.711-16.01-4.294-5.877-9.042-11.051-15.243-14.95a52.93 52.93 0 00-18.205-7.107c-12.999-2.473-26.998-.282-38.014 7.27a36.719 36.719 0 00-13.668 16.336 25.894 25.894 0 00.178 19.644 20.849 20.849 0 0015.098 12.303c7.263 1.472 14.81-.221 21.704-2.555a113.67 113.67 0 005.248-1.938c1.775-.7 1.002-3.603-.798-2.893z"
                                                        fill="#2f2e41"
                                                    />
                                                    <path
                                                        d="M48.125 0h376.318a48.18 48.18 0 0148.125 48.125v205.876a48.18 48.18 0 01-48.125 48.125H48.125A48.18 48.18 0 010 254.001V48.125A48.18 48.18 0 0148.125 0z"
                                                        fill="#f2f2f2"
                                                    />
                                                    <path
                                                        d="M48.125 13.854h376.318a34.31 34.31 0 0134.271 34.271v205.876a34.31 34.31 0 01-34.27 34.27H48.123a34.31 34.31 0 01-34.27-34.27V48.125a34.31 34.31 0 0134.27-34.27z"
                                                        fill="#fff"
                                                    />
                                                    <path
                                                        d="M51.797 375.837a8.63 8.63 0 01-3.307-.67 8.368 8.368 0 01-5.247-7.852v-71.17l94.882-3.192-80.372 80.372a8.383 8.383 0 01-5.956 2.512z"
                                                        fill="#f2f2f2"
                                                    />
                                                    <rect
                                                        x={73.826}
                                                        y={65.063}
                                                        width={324}
                                                        height={41.028}
                                                        rx={20.514}
                                                        fill="#f2f2f2"
                                                    />
                                                    <rect
                                                        x={74.284}
                                                        y={130.549}
                                                        width={324}
                                                        height={41.028}
                                                        rx={20.514}
                                                        fill="#f2f2f2"
                                                    />
                                                    <rect
                                                        x={74.743}
                                                        y={196.035}
                                                        width={324}
                                                        height={41.028}
                                                        rx={20.514}
                                                        fill="#f2f2f2"
                                                    />
                                                    <path
                                                        d="M642.36 105H266.042a48.18 48.18 0 00-48.125 48.125v205.876a48.18 48.18 0 0048.125 48.125H642.36a48.18 48.18 0 0048.125-48.125V153.125A48.18 48.18 0 00642.36 105z"
                                                        fill="#e6e6e6"
                                                    />
                                                    <path
                                                        d="M642.36 118.854H266.043a34.31 34.31 0 00-34.271 34.271v205.876a34.31 34.31 0 0034.27 34.27h376.32a34.31 34.31 0 0034.27-34.27V153.125a34.31 34.31 0 00-34.27-34.27z"
                                                        fill="#fff"
                                                    />
                                                    <path
                                                        d="M613.732 478.325l-80.372-80.372 94.883 3.192v71.17a8.368 8.368 0 01-5.247 7.853 8.63 8.63 0 01-3.307.668 8.383 8.383 0 01-5.957-2.51z"
                                                        fill="#e6e6e6"
                                                    />
                                                    <circle cx={371.201} cy={256.063} r={26} fill="#396cf0" />
                                                    <circle cx={454.201} cy={256.063} r={26} fill="#396cf0" />
                                                    <circle cx={537.201} cy={256.063} r={26} fill="#396cf0" />
                                                </svg>
                                                <h4>You don???t have a message selected</h4>
                                                <p>Choose one from your existing messages, or start a new.</p>
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
