
import Contact from './components/Contact'
import CreatePost from './components/CreatePost'
import MyPosts from './components/MyPosts'
import NavBar from './components/NavBar'
import PostFeed from './components/PostFeed'

function App() {
  return (
    <> 
    <NavBar name = 'MyName' />
    <div className="flex font-poppins">
      <div className="w-1/4 p-4 bg-white rounded-md m-1 shadow-2xl">
        <Contact/>
      </div>
      <div className="w-1/2 p-4  bg-white rounded-md m-1 shadow-2xl">
        <CreatePost/>
        <MyPosts/>
      </div>
      <div className="w-1/4 p-4 bg-white rounded-md m-1 shadow-2xl">
        <PostFeed/>
      </div>
    </div>
    </>
  )
}

export default App
