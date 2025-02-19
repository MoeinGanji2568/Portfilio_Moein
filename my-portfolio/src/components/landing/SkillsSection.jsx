import CardIcon from "../ui/CardIcon";
import HeadingText from "../ui/HeadingText";
import MySkills from "@/constants/data/mySkills";

const SkillsSection = () => {
  return (
    <div id="skills" className="holder my-16 flex flex-col gap-10">
      <HeadingText className="text-center">My Skills</HeadingText>
      <div className="grid grid-cols-12 gap-7">
        {MySkills.map((value, index) => {
          return <CardIcon value={value} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
