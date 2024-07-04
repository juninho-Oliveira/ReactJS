import { Header } from "./components/Header"
import { Post } from "./Post"
import './global.css'


export function App() {

  return (
    <>
      <Header />
    <h1>Hello World</h1>
    <Post 
      author="Junior Oliveira" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis optio. Culpa iste excepturi, similique fugit illum esse error tempore. Facere fugit perferendis non placeat debitis esse nihil dolorum nobis!"/>
    
    <Post 
      author="Julio silva" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
    
    </>
  )
}



