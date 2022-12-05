import React from 'react'
import Nav from '../../components/Layout/nav'
import Sidebar from '../../components/sidebar/sidebar'
import { BsPersonCircle } from 'react-icons/bs'
import { MdOutlineSettings } from 'react-icons/md'
import { FiSave } from 'react-icons/fi'
import { BsGrid3X3 } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { BsFacebook } from 'react-icons/bs'
import { IoCallOutline} from 'react-icons/io5'
import { MdOutlinePhotoCamera} from 'react-icons/md'
function Profile() {
  return (
    <>
    <Nav/>
    <Sidebar/>
     <div className='user-profile' 
        style={{width:"72%",height:"84vh",  marginLeft:"25%",marginTop:"60px",
        boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px", padding:"20px"}}>
      <div className='profile-data'>
        <div className='container'>
            <div className = "row">
                <div className = "col-4 d-flex align-items-center justify-content-center">
                    <BsPersonCircle className='profile_icon'/>
                </div>
                <div className = "col-8 profile-list">
                    <ul style={{listStyleType:"none"}}>
                        <li>
                            <span>SaadiShabbir</span>
                            <span style={{marginLeft:"20px", marginRight:"20px",padding:"5px", border:"1px solid #f1f1f1"}}>Edit profile</span>
                            <span><MdOutlineSettings className='fs-3'/></span>
                        </li>
                        <li>
                            <span>0 </span>
                            <span style = {{marginRight:"20px"}}>posts</span>
                            <span>143 </span>
                            <span style = {{marginRight:"20px"}}>followers</span>
                            <span>16 </span>
                            <span style = {{marginRight:"20px"}}>
                            following</span>
                        </li>
                        <li>
                            <span>Saadi</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
      </div>
      <div className='profile-edit'>
        <div style = {{width:"100%"}} className = "mt-4">
            <ul style={{width:"50%",marginLeft:"24%",listStyleType:"none"}} className="d-flex justify-content-between align-items-center">
                <li>
                    <span><BsGrid3X3 className='fs-5'/>  Posts</span>
                </li>
                <li>
                    <span><FiSave/>  Saved</span>
                </li>
                <li>
                    <span><GrInstagram/>  Tagged</span>
                </li>
            </ul>
        </div>
        <div className = "container mt-4">
            <div className = "row">
                <div className = "col-4">
                <div class="card text-center">
                    <div className= "mt-3 card-icon">
                        <MdOutlinePhotoCamera className='fs-3'/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-titles" style={{fontSize:"12px"}}>Share Photos</h5>
                        <p class="card-text" style={{color:"#8e8e8e",fontSize:"9px"}}>When you share photos, they will appear on your profile.</p>
                        <a href="#" style={{width:"70%"}} class="btn btn-primary">See First Photo</a>
                    </div>
                </div>
                </div>
                <div className = "col-4">
                <div class="card  text-center">
                    <div className= "mt-3 card-icon">
                        <BsFacebook className='fs-3'/>
                    </div>
                    <div class="card-body">   
                        <h5 class="card-titles" style={{fontSize:"12px"}}>Find  Friends</h5>
                        <p  style={{color:"#8e8e8e",fontSize:"9px"}} class="card-text">When you share photos, they will appear on your profile.</p>
                        <a href="#" style={{width:"70%"}} class="btn btn-primary">Connect to Friend</a>
                    </div>
                </div>
                </div>
                <div className = "col-4">
                <div class="card  text-center">
                    <div className= "mt-3 card-icon">
                        <IoCallOutline className='fs-3'/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-titles">Add phone number</h5>
                        <p style={{color:"#8e8e8e",fontSize:"9px"}} class="card-text">
                        When you share photos, they will appear on your profile.
                        </p>
                        <a href="#" style={{width:"70%"}} class="btn btn-primary">
                            Add Phone Number
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Profile
