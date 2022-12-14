import Head from 'next/head' 
import styles from '../styles/Home.module.css'
import Nav from '../components/Layout/nav'
import Main from '../components/main'

export const getStaticProps  = async ()=>{
  const response = await fetch(`https://api.unsplash.com/photos/random?count=6&client_id=9Sjn9OGQl4ykQETozpGZxvVyRwci9MqYWJuf3RMEj-w`)
  const data = await response.json(); 
  console.log(data, response);
  return { props: { data } }
}
export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>Clone | Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <Nav/>
          <Main data= {data}/>
      </div>
    </div>
  )
}
