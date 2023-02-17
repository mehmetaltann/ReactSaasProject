
const SectionHeader = (props) => {
  return (
    <div className={props.divClassName}>
      <h1 className={props.h1ClassName}>{props.h1Content}</h1>
      <p className={props.pClassName}>{props.pContent}</p>
    </div>
  );
};

export default SectionHeader;
