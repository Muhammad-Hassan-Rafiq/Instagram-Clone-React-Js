/* eslint-disable react/jsx-key */
import Card from './card'
import React, { useState,useEffect } from 'react'; 


function Posts({data}) {
   const [post, setPost] = useState(data); 
    let status = [
      {
          img:'https://www.cnet.com/a/img/resize/74c8092eeb1a00c11ea4f0d8cde274c4f5aefa6c/hub/2022/04/11/395b6eeb-ce0c-41d4-99b1-3e6a4f040efc/img-4114.png?auto=webp&width=1200',
          name:'Ali',
      },
      {
          img:'https://www.fbstatusquotes.com/wp-content/uploads/2021/05/Best-Instagram-Captions-For-Girls.jpg',
          name:'Arzoo',
      },
      {
          img:'https://i.pinimg.com/236x/01/aa/bd/01aabd04a4b8753f4535a3258d2ef401.jpg',
          name:'Alisha',
      },
      {
          img:'https://www.quotesprince.com/wp-content/uploads/2021/10/Attitude-Instagram-Captions-For-Girls.webp',
          name:'Zuni',
      },
      {
          img:'https://i.pinimg.com/736x/b7/1b/06/b71b06ecf8ee449021681c372bb082d3.jpg',
          name:'Usman',
      },
      {
          img:'https://whatsappstatusmarket.com/wp-content/uploads/2022/02/instagram-captions-1.webp',
          name:'Haider',
      }
      ]
  return (
    <>
      <span style={{width:"50%"}} className = "posts"> 
        <div className='status'>
          
            <div className='stat'>
            {status.map(res =>{
              return (
                <span className = "status_data">
                    <img src = {res.img} alt = "" width={40}/>
                    <span>{res.name}</span>
                </span>
              )
            })
          }</div>
          
        </div>    
          {
            post.map(res =>{
              return (
                <>
                  <Card data = {res}/>
                </>
              )
            })
          }
      </span>
    </>
    
  )
}

export default Posts
