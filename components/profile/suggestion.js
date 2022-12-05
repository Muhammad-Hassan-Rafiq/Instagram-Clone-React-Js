import { MdVerified } from 'react-icons/md' 
import Link from 'next/link';

function Suggestion({data}) {
   
  return (
    <div className='suggestion'>
        <h3 className='text-center'><b>Suggestions For You</b></h3>
        <div className='suggestion-data'>
             {data?.map(res =>{
                return (
                    <Link href = {`/user/${res?.user?.username}`}>
                    <div className='suggestion-display'>
                        <img src={res?.user?.profile_image?.large} alt = ''/>
                        <ul className = 'suggest-list'>
                            <li><b>{res?.user?.first_name}</b> <MdVerified className='fa-x' /></li>
                            <li>Followed By 
                            <span style={{color:"#ff4800"}}> {res?.user?.total_likes}</span></li>
                        </ul>
                    </div>
                    </Link>
                )
             })} 
        </div>
    </div>
  )
}

export default Suggestion
