import Link from 'next/link'; 

import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineModeComment } from 'react-icons/md'
import { RiSendPlaneLine } from 'react-icons/ri'
import { FiSave } from 'react-icons/fi'
function Card({data}) {
  return (
    <div className='sections'>
      <div className='cards'>
        <div className = "card-title">
            <Link href= {`/user/${data.user.username}`} key= {data.user.username}>
              <img src = {data.user.profile_image.medium} alt = "user" className='post-user'/>
            </Link>
          <h4 style = {{fontWeight: 'bold'}}>{data.user.first_name} {data.user.last_name}</h4>
        </div>
        <div className = "card-img">
          <Link href ={`/details/${data.id}`} key = {data.id}>
            <img src = {data.urls.small} alt = "" />
          </Link>
        </div>
        <div className="post-icons">
            <div className='py-3' style={{paddingLeft:"10px"}}>
              <AiOutlineHeart className='fs-2' />

              <MdOutlineModeComment className='fs-2 ms-3' />

              <RiSendPlaneLine className='fs-2 ms-3' />
            </div>
            <span className='py-3' style={{paddingRight:"10px"}}>
                <FiSave className='fs-3' />
            </span>
          </div>        
          <div class = "card-content">
          {/* <span className='user'><span> */}
          <span className='post_text'>
            {data.user.bio}{data.alt_description}
          </span>
        </div>  
      </div>    
    </div>
  )
}

export default Card
