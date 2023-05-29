import InnovativeTeaching from "./section/innovativeTeaching";
import Reception from "./section/reception";
import RoselandiaFamily from "./section/roselandiaFamily";
import Welcome from "./section/welcome";

const SchoolAttributes = ({ data }: any) => {
  return (
    <div className="topics">
      <Welcome data={data[0]} />
      <RoselandiaFamily data={data[1]} />
      <InnovativeTeaching data={data[2]} />
      <Reception data={data[3]} />
    </div>
  );
};

export default SchoolAttributes;
