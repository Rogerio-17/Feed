import {format, formatDistanceToNow} from 'date-fns'
import ptBr from "date-fns/locale/pt-BR"
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";
import { useState } from 'react';


export function Post({author, content, publishedAt}) {
  const [comments, setComments] = useState(["Muito bom Devon, parabéns!! 👏👏"])
  const [newCommentText, setNewCommentText] = useState('')
  // Biblioteca para formatar datas de forma muito simples date-fns
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src={author.avatarUrl}></Avatar>

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if(line.type === 'paragraph'){
            return (
              <p>{line.content}</p>
            )
          } else if (line.type === 'link') {
            return(
              <p> <a href='#'>{line.content}</a> </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>

        <textarea 
        name="comment"
        placeholder="Digite seu comentário"
        value={newCommentText}
        onChange={handleNewCommentChange}
        ></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return(
            <Comment
            content={comment}
            />
          )
        })}
      </div>
    </article>
  );
}
