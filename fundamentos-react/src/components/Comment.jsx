import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./comment.module.css";
import { Trash, ThumbsUp } from "phosphor-react";

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function countLike() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Rogerio-17.png"></Avatar>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Rogério José</strong>
              <time title="11 de Maio ás 08:13" dateTime="2022-05-11 08:13:30">
                Publicado há 1h
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
            <button onClick={countLike}>
                <ThumbsUp/>
                Curtir <span>{likeCount}</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
