import CardIcon from "../ui/CardIcon";
import HeadingText from "../ui/HeadingText";

const SkillsSection = () => {
  const skills = [
    { id: 1, label: "JavaScript", icon: "" },
    { id: 2, label: "TypeScript", icon: "" },
    { id: 3, label: "React.js", icon: "" },
    { id: 4, label: "Next.js", icon: "" },
  ];
  return (
    <div id="skills" className="my-16 flex flex-col gap-6">
      <HeadingText className="text-center">My Skills</HeadingText>
      <div className="flex justify-center gap-5">
        {skills.map((value, index) => {
          return <CardIcon value={value} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
