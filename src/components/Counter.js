const Counter = (props) => {
  return (
    <div className="counter">
      {props.children}
      <span className="counter__number">{props.spanNumber}</span>
      <p className="counter__name">{props.counterName}</p>
    </div>
  );
};

export default Counter;
