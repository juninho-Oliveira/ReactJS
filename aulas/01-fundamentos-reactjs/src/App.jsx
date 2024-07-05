import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'



export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post
            author="Junior Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis optio. Culpa iste excepturi, similique fugit illum esse error tempore. Facere fugit perferendis non placeat debitis esse nihil dolorum nobis!" />

          <Post
            author="Junior Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, blanditiis optio. Culpa iste excepturi, similique fugit illum esse error tempore. Facere fugit perferendis non placeat debitis esse nihil dolorum nobis!" />

        </main>
      </div>

    </div>
  )
}



