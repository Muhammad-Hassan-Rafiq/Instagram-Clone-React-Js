import Suggestion from './profile/suggestion'
import Posts from './posts/posts'
import Sidebar from './sidebar/sidebar'

function Main({data}) {
  return (
    <div className='main'>
        <Sidebar/>
        <Posts data = {data}/>
        <Suggestion data = {data}/>
       </div>
  )
}

export default Main
