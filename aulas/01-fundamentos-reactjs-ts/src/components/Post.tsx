import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


// Estados = variaveis que eu quero que o componente monitore 

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType  {
    id: number
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}


export function Post({ post }: PostProps) {

    const [comments, setComments] = useState([
        'Post muito bacana, hein?'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        // imutabilidade

        setNewCommentText('');

    }

    function handleCreateNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function onDeleteComment(commentToDelete: string) {
        // imutabilidade => as variáveis não sofrem  mutação, nós criamos ( um novo espaço na memoria )

        const commentsWithouDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithouDeleteOne);
    }

    const isNweCommentEmpty = newCommentText.length === 0;



    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>  {line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}>{line.content}</p>
                    }
                })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.contentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleCreateNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required />

                <footer>
                    <button type='submit'
                        disabled={isNweCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (<Comment
                        key={comment}
                        content={comment}
                        onDeleteComment={onDeleteComment} />)
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


----------------------------------------------------------------

# Key no React 

## Por que única ?

3 Momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;


## Por que não posso usar o indice do array ?

const post = [1,2,3,4,5]

*/