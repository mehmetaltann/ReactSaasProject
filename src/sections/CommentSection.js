import Comment from "../components/Comment";
import { commentSectionData as DATA } from "../Data";

const CommentSection = () => {
  return (
    <section className="sec-comment">
      <div className="sec-comment__top">
        <h1 className="t2 t2--white">Müşterilerimizin Yorumları</h1>
      </div>
      <div className="sec-comment__bottom">
        {DATA.map(({ imgUrl, text, author }, index) => (
          <Comment
            key={index}
            imgUrl={imgUrl}
            text={text}
            author={author}
          ></Comment>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
