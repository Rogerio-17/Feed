import {format, formatDistanceToNow} from 'date-fns'
import ptBr from "date-fns/locale/pt-BR"
import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";


export function Post({author, content, publishedAt}) {
  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })


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

      <form className={styles.commentForm}>
        <strong>Deixe seu comentario</strong>

        <textarea placeholder="Digite seu comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
