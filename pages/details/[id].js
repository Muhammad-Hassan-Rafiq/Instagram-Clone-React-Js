import React,{useEffect, useState} from 'react'
import Nav from '../../components/Layout/nav'
import {useRouter} from 'next/router'
function Details() {
    const [apiData, setApiData] = useState({});
    var id = useRouter()
    useEffect(() => {
        
        // declare the data fetching function
        const fetchData = async () => {
            
          const data = await fetch(`https://api.unsplash.com/photos/${id.query.id}?w=300&client_id=9Sjn9OGQl4ykQETozpGZxvVyRwci9MqYWJuf3RMEj-w`);
          let jsonData = await data.json();
          console.log(jsonData);
          setApiData(jsonData)
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
                {apiData?.user?.first_name +" " + apiData?.user?.last_name}
              </h4>
              <p>{apiData?.alt_descritpion} {apiData?.user?.bio}</p>
              <p><span className = "post-sponsor">Sponsor:</span>
                <a target = "_blank" href = {apiData.sponsorship?apiData?.sponsorship?.sponsor?.portfolio_url:apiData?.links?.self} rel="noreferrer">
                  {apiData.sponsorship?apiData?.sponsorship?.sponsor?.portfolio_url:apiData?.links?.self}
                </a>
              </p>
              <p><span className = "post-sponsor">Created By:</span>
                <a target = "_blank" href = {apiData?.user?.profile_image} rel="noreferrer">
                  {apiData.sponsorship?apiData?.sponsorship?.sponsor?.portfolio_url:apiData?.links?.self}
                </a>
              </p>
              <p><span className = "post-sponsor">Description:</span>
                  Take advantage of this character limit every now and then. Some days you might choose to write an Instagram caption with a string of emojis, but other days you might decide to share a story. 2,200 characters are enough to clearly communicate the context of your post.
              </p>
              <p><span className = "post-sponsor">Created Date:</span>
                 {apiData?.promoted_at}
              </p>
              <p><span className = "post-sponsor">Updated Date:</span>
                 {apiData?.updated_at}
              </p>
            </div>
            <div className='col-12 col-md-6 image-display'>
              <img src = {apiData?.urls?.regular} alt = ""/></div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Details
