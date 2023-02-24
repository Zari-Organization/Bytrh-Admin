import React, { useContext, useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import '../chat.scss'
import { Form, Nav, NavDropdown } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import Icons from '../../../constants/Icons';
import Img from '../../../assets/Img';
import ScrollToBottom from 'react-scroll-to-bottom';
import Component from '../../../constants/Component';
import { PostData, apiheader } from './../../../utils/fetchData';
import { Outlet, useParams } from 'react-router-dom';
import { ChatContext } from '../../../context/ChatStore';

const ChatDoctors = () => {
  const { id } = useParams();
  let { setUserReplied, userReplied } = useContext(ChatContext);
  const [clientChatSupport, setClientChatSupport] = useState([])
  const clientlist = async () => {
    let { data } = await PostData(`https://bytrh.com/api/admin/chat/doctor/list`, {}, apiheader)
    console.log(data.Response);
    setClientChatSupport(data.Response.DoctorChatSupport)
  }

  const adminSendMess = async (value) => {
    let data = await PostData(`https://bytrh.com/api/admin/chat/doctor/reply`,
      {
        IDDoctorChatSupport: id,
        ChatSupportMessage: value,
        ChatSupportType: 'TEXT'
      }
      , apiheader);
    // console.log(data);
  }
  useEffect(() => {
    clientlist()
  }, [id])


  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handeAdminMess = () => {
    const value = inputRef.current.value;
    // console.log(value);
    // TODO: Send the value to the server
    adminSendMess(value)
    setInputValue('');
    inputRef.current.value = '';
  };

  const [selectedFile, setSelectedFile] = useState(null);

  async function handleFileSelect(event) {
    console.log(event.target.files);
    setSelectedFile();
    if (selectedFile !== null) {  
      let data = await PostData(`https://bytrh.com/api/admin/chat/doctor/reply`,
      {
        IDDoctorChatSupport: id,
        ChatSupportMessage:event.target.files[0]  ,
        ChatSupportType: 'IMAGE'
      }
      , apiheader);
      console.log(data);
    }
  }

  

  return (
    <div className='app__chat'>
      <Row className="app__chat__container ">
        <Component.DoctorList clientChatSupport={clientChatSupport} />
        <Col xl={8} lg={8} md={6} sm={12} className='app__chat_messages '>
          <div className='shadow app__chat_list-card'>
            <div className={`app__Live_chat chat-body  ${id ? '' : 'bg-dark'}`} style={{ background: '#d9d9d998' }}>
              {
                id ?
                  <Outlet></Outlet> :
                  <div className="empty_chat   w-100 h-100 d-flex justify-content-center align-items-center flex-column">
                    <img src={Img.empty_chat} className='w-50' />
                    <h2 className={` ${id ? '' : 'text-light'}`}>
                      Welcome, <span style={{ color: '#313bac' }}>admin!</span>
                    </h2>
                    <h4 className={` ${id ? 'text-light' : 'text-light text-light'}`}>Please select a chat to Start messaging.</h4>
                  </div>
              }
            </div>
            {
              userReplied === 0 ?
                <>
                  {
                    id ?
                      <div className="app__send">
                        <input type="text" className="form-control" ref={inputRef} />
                        <button className='btn shadow-lg bgChatBtn' onClick={handeAdminMess} >
                          <Icons.send color='#fff' size={20} />
                        </button>

                        <input type="file" id="file-input" accept="image/*" onChange={handleFileSelect} style={{ display: 'none' }} />
                        <label htmlFor="file-input" className="btn btn-info bgChatBtn shadow" style={{ pointerEvents: 'all' }}>
                          <Icons.imageUpload color='#fff' size={20} />
                        </label> 

                      </div>
                      :
                      ''
                  }
                </> :
                <>
                  {
                    id ?
                      <div className="app__send d-flex justify-content-center align-items-center">
                        <h6> Another user already replied</h6>
                      </div> : ''
                  }
                </>
            }


          </div>

        </Col >

      </Row >
    </div >
  )
}

export default ChatDoctors