const Button = (props) => {
  return (
    <button className={`button ${props.className}`}>
      <span>{props.children}</span>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
