import InnovativeTeaching from "./innovativeTeaching";
import Reception from "./reception";
import RoselandiaFamily from "./roselandiaFamily";
import Welcome from "./welcome";

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
