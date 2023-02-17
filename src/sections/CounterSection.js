import SectionHeader from "../components/SectionHeader";
import Button from "../components/UI/Button";
import Counter from "../components/Counter";
import {counterSectionData as DATA} from "../Data"

const CounterSection = () => {
  return (
    <section className="sec-counter">
      <div className="sec-counter__container">
        <div className="sec-counter__top">
          <SectionHeader
            divClassName={"sec-features__top"}
            h1ClassName={"t2"}
            h1Content={"Neler Yaptık"}
            pClassName={"t4"}
            pContent={
              "Quisque et rutrum mauris. Donec sit amet risus sodales, porttitor ex at, sagittis ante. Aliquam at nisl tortor. In sit amet scelerisque magna.Aliquam erat volutpat. Integer at ante urna."
            }
          />
        </div>
        <div className="sec-counter__bottom">
          {DATA.map(({ Icon, spanNumber, counterName }, index) => (
            <Counter
              key={index}
              spanNumber={spanNumber}
              counterName={counterName}
            >
              <Icon className="counter__icon" />
            </Counter>
          ))}
        </div>
        <Button className="button--middle">Detaylar</Button>
      </div>
    </section>
  );
};

export default CounterSection;
