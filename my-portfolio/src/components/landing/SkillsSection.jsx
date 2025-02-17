import CardIcon from "../ui/CardIcon";
import HeadingText from "../ui/HeadingText";
import techIcons from "../../utils/icon";

const SkillsSection = () => {
  const skills = [
    { id: 1, label: "HTML5", icon: techIcons.htmlIcon },
    { id: 2, label: "CSS3", icon: techIcons.cssIcon },
    { id: 3, label: "JavaScript", icon: techIcons.jsIcon },
    { id: 4, label: "TypeScript", icon: techIcons.tsIcon },
    { id: 5, label: "React.js", icon: techIcons.reactIcon },
    { id: 6, label: "Next.js", icon: techIcons.nextIcon },
    { id: 7, label: "Vite", icon: techIcons.viteIcon },
    { id: 8, label: "Tailwind CSS", icon: techIcons.tailwindIcon },
    { id: 9, label: "Material UI", icon: techIcons.muiIcon },
    { id: 10, label: "Figma", icon: techIcons.figmaIcon },
    { id: 11, label: "Git & GitHub", icon: techIcons.gitIcon },
  ];
  return (
    <div id="skills" className="holder my-16 flex flex-col gap-10">
      <HeadingText className="text-center">My Skills</HeadingText>
      <div className="grid grid-cols-12 gap-7">
        {skills.map((value, index) => {
          return <CardIcon value={value} key={index} />;
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
