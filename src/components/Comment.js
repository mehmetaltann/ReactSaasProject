const Comment = (props) => {
  return (
    <div className="comment">
      <img
        className="comment__img"
        src={require(`../assets/images/${props.imgUrl}.png`)}
        alt={`${props.imgUrl}`}
      />
      <div className="comment__shadow">
        {/* gölge vermek için eklediğimiz div*/}
        <div className="comment__content">
          <div className="comment__text">{props.text}</div>
          <div className="comment__author">{props.author}</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
