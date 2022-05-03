import styles from "./Comment.module.css";
const Comment = ({ comment }) => {
    const date=new Date(comment.created_at);
  return <div className={styles.comment}>
    <div className={styles.avatar}>
        <img src={comment.user.avatar_url} alt="avatar" />
    </div>
    <div className={styles.content}>
        <div className={styles.content_header}>
            <div className={styles.name}>
                {comment.user.login}
            </div>
            <div className={styles.date}>
                {date.toLocaleDateString()}
            </div>
        </div>
        <div className={styles.content_body}>
            {comment.body}
        </div>
    </div>
  </div>;
};
export default Comment;
