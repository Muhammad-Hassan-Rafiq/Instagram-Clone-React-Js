import React from 'react'
import Nav from '../../components/Layout/nav' 
import Sidebar from '../../components/sidebar/sidebar'

import { IoCallOutline } from 'react-icons/io5'
import { BiVideo } from 'react-icons/bi'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineImage } from 'react-icons/md'
import { MdKeyboardArrowDown} from 'react-icons/md'

function Messages() {
  return (
    <>
    <Nav/>
    <div className = "containers">
                <Sidebar/>
            <div className = "messages">
                <div className = "recieveMsg">
                  <div className = "recieveMsgHeader">
                    <div className = "container">
                      <div className = "row">
                        <div style = {{height:"10vh"}} className = "col-9 d-flex justify-centent-center align-items-center">
                         <div style={{fontSize:"12px",textAlign:"right",width:"100%"}}>saadishabbir1435 <MdKeyboardArrowDown className='fs-3'/> </div>
                         
                        </div>
                        <div style = {{height:"10vh"}} className = "col-3 d-flex justify-content-center align-items-center">
                          <BiEdit className='fs-3'/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className = "msg d-flex align-items-center">
                    <span><BsPersonCircle className='fs-2 ms-3'/></span>
                    <span style={{marginLeft:"12px"}} className = "msg_data d-flex flex-column justify-content-start align-items-start">
                      <span style={{fontSize:"9px"}}>Person 2</span>
                      <span style={{fontSize:"8px", color:"#ff4800"}}>Message sent by person 2</span>
                    </span>
                  </div>
                </div>
                <div className = "sendMsg">
                  <div style = {{width:"100%", padding:"0px 10px 0px 10px"}} className = "sendMsgHeader d-flex justify-content-between align-items-center">
                    <div>
                      <span><BsPersonCircle className='fs-2 ms-3'/></span>
                      <span style = {{paddingLeft: "14px",fontSize:"12px"}} className=''>Person 2</span>
                    </div>
                    <div style={{paddingRight:"10px"}}> 
                    <span><IoCallOutline className='fs-4 ms-3'/></span> 
                    <span><BiVideo className='fs-4 ms-3'/></span> 
                    <span><AiOutlineInfoCircle className='fs-4 ms-3'/></span> 
                    </div>
                  </div>
                  <div className="sendMsgBar" style={{marginTop:"50%",width:"100%",textAlign:"right",padding:"20px"}}>
                    <div>
                      <span style = {{width:"60%",padding:"14px",borderRadius:"50px",backgroundColor:"#f1f1f1"}}> Message Already Sent</span>
                    </div>
                    <div className="form-group has-search">
                      <span className="fa fa-search form-control-feedback" style={{paddingLeft:"10px", paddingTop:"4px"}}>
                        <BsEmojiSmileFill className='fs-3'/>
                        <span className="fa fa-search" style={{marginLeft:"70%"}}>
                          <MdOutlineImage className='fs-3 ms-3'/>
                          <AiOutlineHeart className='fs-3 ms-3'/>
                        </span>
                      </span>
                      <input type="text" class="form-control" placeholder="Search"/>
                      
                    </div>
  
                  </div>
                </div>
            </div>    
        
      </div>
    </>    
  )
}

export default Messages
