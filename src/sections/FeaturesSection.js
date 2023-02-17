import FeaturesItem from "../components/FeaturesItem";
import SectionHeader from "../components/SectionHeader";
import { faturesSectionData as DATA } from "../Data";

const FeaturesSection = () => {
  return (
    <section className="sec-features">
      <SectionHeader
        divClassName={"sec-features__top"}
        h1ClassName={"t2"}
        h1Content={"Neler Yapıyoruz ?"}
        pClassName={"t4"}
        pContent={
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
      />
      <div className="sec-features__bottom">
        {DATA.map(({ title, content, Icon }, index) => (
          <FeaturesItem key={index} h2={title} p={content}>
            <Icon className="sec-features__icon" />
          </FeaturesItem>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
