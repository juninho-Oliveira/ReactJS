import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react';


// Estados = variaveis que eu quero que o componente monitore 


export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Post muito bacana, hein?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText])
        // imutabilidade

        setNewCommentText('');

    }

    function handleCreateNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p>{line.link}</p>
                    }
                })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.contentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleCreateNewCommentChange} />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>
        </article>
    )
}







/* 

# Programação imperativa

- O que deve ser feito (passo-a-passo).


### Receita de bolo 

1- Ligar o forno a 180;
2- Abrir a porta do forno;
3- Colocar a massa numa forma;
4- Colocar a forma com a massa no dentro do forno;

# Programação declarativa 

Quais as condições para eu ter o resultado final.

### Rceita de bolo 

1- O forno precisa está a 180;
2- Quando o forno estiver quente, eu posso colocar a massa para assar;
3- Quando a massa estiver pronta, eu posso retira-la do forno;


*/