
const FeaturesItem = (props) => {
  return (
    <div className="sec-features__feature">
      {props.children}
      <h2 className="t3 sec-features__heading">{props.h2}</h2>
      <p className="s1 sec-features__p">{props.p}</p>
    </div>
  );
};

export default FeaturesItem;
