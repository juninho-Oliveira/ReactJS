import { Header } from "./components/Header.jsx"
import { Post, PostType} from "./components/Post.jsx"
import { Sidebar } from "./components/Sidebar.jsx"

import './global.css'
import styles from './App.module.css'

// author: {avatar_url: "", name: "", role: ""}
// publishedAt: Date
// content: String


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/123269234?v=4",
      name: "Junior Oliveira",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' },
    ],

    publishedAt: new Date('2024-07-11 11:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat."
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },

      { type: 'link', content: 'jane.design/doctorcare' },
    ],

    publishedAt: new Date('2023-07-11 11:00:00')
  },
];


export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}

        </main>
      </div>

    </div>
  )
}



