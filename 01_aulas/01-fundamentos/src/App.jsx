import Post from "./components/Post/Post"
import { Header } from "./components/Header/Header"
function App() {
  return (
    <>
    <Header />
      <Post 
        author="Leirisson" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officiis ea tempora suscipit, officia perferendis, sunt aut libero atque qui, numquam excepturi aspernatur tempore corrupti esse necessitatibus soluta aliquid voluptatibus."
      />
            <Post 
        author="Raimundo" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus officiis ea tempora suscipit, aspernatur tempore corrupti esse necessitatibus soluta aliquid voluptatibus."
      />
     
    </>
  )
}

export default App
