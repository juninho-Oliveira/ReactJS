import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  className={styles.avatar} src="https://avatars.githubusercontent.com/u/2254731?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Juninho Oliveira</strong>
                        <span>Web Develiper</span>
                    </div>
                </div>

                <time title='05 de julho às 11:09h' >Piblicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 {' '}<a href="#">jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>{' '}
                </p>
            </div>


            <form className={styles.contentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentario' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               <Comment />

               <Comment />
               
            </div>
        </article>
    )
}