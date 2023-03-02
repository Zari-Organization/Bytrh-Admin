import React, { useState, useContext } from 'react'
import { Form, Col, Nav } from 'react-bootstrap';
import Img from '../../../assets/Img';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { ChatContext } from '../../../context/ChatStore';
import { PostData, apiheader } from '../../../utils/fetchData';
import _ from 'lodash';

const ClientList = () => {
    const [active, setActive] = useState(false);
    const [loadSearch, setloadSearch] = useState(true);
    let { setCChatSupport, cChatSupport } = useContext(ChatContext);

    const handelActive = () => {
        console.log('hmud');
        setActive(!active)
    }

    const handelSearchClientList = (event) => {
        setloadSearch(false)
        console.log(event.target.value);
        clientlist(event.target.value)

    };

    const clientlist = _.debounce(async (clientNAme) => {
        let { data } = await PostData(`https://bytrh.com/api/admin/chat/client/list`, { ClientSearchKey: clientNAme }, apiheader)
        setCChatSupport(data.Response.ClientChatSupport)
        setloadSearch(true)

    }, 3000)
    return (
        <>
            <Col xl={4} lg={4} md={6} sm={12} className='app__chat_list-Users '>
                <div className='shadow app__chat_list-card '>
                    <span className="app__chat_list-search bg-info">
                        <Form.Control
                            placeholder=" Search By Name or Email or Phone"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            className='input__search'
                            onChange={handelSearchClientList}
                        />

                    </span>
                    <div className='d-flex flex-column gap-3 app__chat_list'>

                        {
                            loadSearch ?
                                <>
                                    {
                                        cChatSupport?.length <= 0 ?
                                            <>
                                                <div className="d-flex justify-content-center">
                                                    <img src={Img.searchNotFound} className="w-75" alt="" />
                                                </div>
                                            </> :
                                            <>

                                                {
                                                    cChatSupport?.map((chat, index) => (
                                                        <React.Fragment key={index} >
                                                            <div className='app__chat_list-grid'>
                                                                <LinkContainer to={`/chat/clients/${chat?.IDClientChatSupport}`}  >
                                                                    <Nav.Link
                                                                        eventKey={index}
                                                                        className={`nav-link ${active ? "active user text-dark" : " user text-dark"}`}
                                                                        onClick={() => handelActive}
                                                                    >
                                                                        <div className='d-flex gap-2'>
                                                                            <div className="circle symbol-label">
                                                                                {chat?.ClientName.split(" ").map(word => word.charAt(0).toUpperCase()).join("")}
                                                                            </div>

                                                                            <div className="content">
                                                                                <div className="name">
                                                                                    {chat?.ClientName}
                                                                                </div>
                                                                                <div className="email">
                                                                                    {chat?.ClientPhone}
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <span className={`
                                                ${chat?.ChatSupportStatus == 'PENDING' && 'txt_pending'} 
                                                ${chat?.ChatSupportStatus == 'Shipped' && 'txt_shipped'}
                                                ${chat?.ChatSupportStatus == 'Out For Delivery' && 'txt_delivery'}
                                                ${chat?.ChatSupportStatus == 'ONGOING' && 'txt_delivered'}
                                                ${chat?.ChatSupportStatus == 'ENDED' && 'txt_rejected'}
                                                `} style={{ backgroundColor: 'transparent !important', height: 'fit-content !important', marginRight: '10px' }}>
                                                                            {chat?.ChatSupportStatus.toLowerCase()}
                                                                        </span>
                                                                    </Nav.Link>
                                                                </LinkContainer>



                                                                {/* <span className='chatSupportStatus'> {chat?.ChatSupportStatus.toLowerCase()}</span> */}
                                                            </div>
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </>
                                    }
                                </> :
                                <div className="d-flex justify-content-center">
                                    <img src={Img.search} className="w-75" alt="" />
                                </div>
                        }
                    </div>
                </div>

            </Col>
        </>
    )
}

export default ClientList