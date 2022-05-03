import Comment from "./Comment";
import styles from "./Comments.module.css";
const Comments = ({ comments }) => {
  return (
    <div className={styles.comments}>
      {comments.length>0 ? comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      )) : <h1 className={styles.noComments}>No comments found</h1>}
    </div>
  );
};
export default Comments;
