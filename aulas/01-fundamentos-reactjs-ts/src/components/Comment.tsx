import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment() {
        setLikeCount(likeCount+1)
    }



    function handleDeleteComment () {
        onDeleteComment(content)
        
    }

    /*
    Sempre que você for atualizar uma informação que
    depende dela mesmo é sempre legal fazer atualições usando esse tipo de função
    
        setLikeCount((state)=> {
        return state+1
    })
*/


    return (
        <div className={styles.comment}>
            <Avatar 
            hasBorder={false} 
            src="https://img.freepik.com/vetores-premium/meditacao-de-pessoas-indianas-masculinas-fofas-conceito-de-icone-isolado-vetor-premium_551187-31.jpg" 
            alt='' 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>

                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>

                            <time title='05 de julho às 11:09h' >Cerca de 1h atrás</time>

                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}