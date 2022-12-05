import React,{useEffect, useState} from 'react'
import Nav from '../../components/Layout/nav'
import {useRouter} from 'next/router'
function Details() {
    const [userData, setUserData] = useState({});
    var id = useRouter()
    useEffect(() => {
        
        // declare the data fetching function
        const fetchData = async () => {
            
          const data = await fetch(`https://api.unsplash.com/users/${id.query.id}?client_id=9Sjn9OGQl4ykQETozpGZxvVyRwci9MqYWJuf3RMEj-w`);
          let jsonData = await data.json();
          console.log(jsonData);
          setUserData(jsonData)
        }
        fetchData()
          .catch(console.error);
      }, [])  
  return (
    <>
      <Nav/>
      <div className='container'>
        <div className='post-detail'>
          <div className='row'>
            <div className='col-12 col-md-6 post-data'>
              <h4 className='detail-heading'>
                {userData?.first_name}  {userData?.last_name}
              </h4>
              <p>{userData?.alt_descritpion} {userData?.user?.bio}</p>
              <p>
                <span className = "post-sponsor">Followers:</span>
                <span>{userData?.followers_count}</span>
              </p>
              <p>
                <span className = "post-sponsor">Instagram Id:</span>
                <span>{userData?.id}</span>
              </p>
              <p><span className = "post-sponsor">Following:</span>
               <span>{userData?.following_count}</span>
              </p>
              <p><span className = "post-sponsor">Description:</span>
                  Take advantage of this character limit every now and then. Some days you might choose to write an Instagram caption with a string of emojis.
              </p>
              <p><span className = "post-sponsor">Bio:</span>
                 {userData?.bio}
              </p>
              <p><span className = "post-sponsor">Updated Date:</span>
                 {userData?.updated_at}
              </p>
            </div>
            <div className='col-12 col-md-6 image-display'>
              <img src = {userData?.profile_image?.large} alt = ""/></div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Details
