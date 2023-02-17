import { Fragment } from "react";
import InfoSection from "../sections/InfoSection";
import FeaturesSection from "../sections/FeaturesSection";
import WorkflowSection from "../sections/WorkflowSection";
import CounterSection from "../sections/CounterSection";
import CardSection from "../sections/CardsSection";
import IdeaSection from "../sections/IdeaSection";
import CommentSection from "../sections/CommentSection";

const HomePage = () => {
  return (
    <Fragment>
      <InfoSection />
      <FeaturesSection />
      <WorkflowSection />
      <CounterSection />
      <CardSection />
      <IdeaSection />
      <CommentSection />
    </Fragment>
  );
};

export default HomePage;
