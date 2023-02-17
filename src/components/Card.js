import Button from "./UI/Button";

const Card = (props) => {
  return (
    <div className="card">
      <div className={`card__top ${props.cardModifier}`}>
        {props.children}
        <div className="card__texts">
          <span className="card__title">{props.title}</span>
          <span className="card__price">
            {props.price}
            <sup>TL</sup>
          </span>
          <span className="card__text">yıllık</span>
        </div>
      </div>
      <div className="card__bottom">
        <ul className="card__list">
          {props.listData.map(({ title, content }, index) => {
            return (
              <li key={index} className="card__item">
                <span>{title}</span>
                <span>{content}</span>
              </li>
            );
          })}
        </ul>
        <Button className={`button--middle ${props.buttonModifier}`}>Satın Al</Button>
      </div>
    </div>
  );
};

export default Card;
