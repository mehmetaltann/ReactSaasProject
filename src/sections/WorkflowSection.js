import SectionHeader from "../components/SectionHeader";
import {
  workflowSectionData1 as DATA1,
  workflowSectionData2 as DATA2,
} from "../Data";

const WorkflowSection = () => {
  return (
    <section className="sec-workflow">
      <SectionHeader
        divClassName={"sec-workflow__top"}
        h1ClassName={"t2"}
        h1Content={"Nasıl Yapıyoruz ?"}
        pClassName={"t4"}
        pContent={
          "In ut elit id massa aliquet porta at vel urna. Proin quis nisi quis quam tempus ultrices quis sit amet elit. Cras vel sollicitudin est. Mauris laoreet a ligula vel cursus. Integer neque ex, hendrerit et molestie sed, vulputate eu lacus."
        }
      />
      <div className="sec-workflow__bottom">
        <div className="sec-workflow__left">
          {DATA1.map(({ title, content, Icon }, index) => {
            return (
              <div className="sec-workflow__box" key={index}>
                <h2 className="t3 sec-workflow__heading u-text-align-right">
                  {title}
                </h2>
                {Icon && <Icon className="sec-workflow__icon u-float-right" />}
                <p className="s1 sec-workflow__p u-text-align-right">{content}</p>
              </div>
            );
          })}
        </div>
        <div className="sec-workflow__lineBox">
          <div className="sec-workflow__line">
            {new Array(5).fill(0).map((i, index) => (
              <span className="sec-workflow__circle" key={index}></span>
            ))}
          </div>
        </div>
        <div className="sec-workflow__right">
          {DATA2.map(({ title, content, Icon }, index) => {
            return (
              <div className="sec-workflow__box" key={index}>
                <h2 className="t3 sec-workflow__heading">{title}</h2>
                {Icon && <Icon className="sec-workflow__icon" />}
                <p className="s1 sec-workflow__p">{content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
