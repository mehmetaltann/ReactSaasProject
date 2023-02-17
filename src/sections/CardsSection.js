import Card from "../components/Card";
import { cardSectionData as DATA } from "../Data";

const CardSection = () => {
  return (
    <section className="sec-card">
      <h1 className="t2 t2--green"> Hosting Paketlerimiz </h1>
      <div className="sec-card__cards">
        {DATA.map(
          (
            { Icon, listData, title, price, cardModifier, buttonModifier },
            index
          ) => (
            <Card
              listData={listData}
              title={title}
              price={price}
              key={index}
              cardModifier={cardModifier}
              buttonModifier={buttonModifier}
            >
              <Icon className="card__icon" />
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default CardSection;
