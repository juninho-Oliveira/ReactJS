import styles from './Post.module.css'

export function Post () {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/123269234?v=4" />
                    <div className={styles.authorInfo}>
                        <span>Web Develiper</span>
                    </div>
                </div>

                <time title='05 de junho às 11:09h' datetime="2024-07-05 00:13:30">Piblicado a</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

 <p>👉 <a href="#">jane.design/doctorcare</a></p>

<p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}