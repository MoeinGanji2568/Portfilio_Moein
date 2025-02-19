import HeadingText from "../ui/HeadingText";
import Link from "next/link";
import ContactList from "@/constants/data/contactList";
const aboutMe =
  "Front-End Developer | React.js & Next.js Enthusiast - Passionate about building high-performance, scalable, and user-friendly web applications, with over 3 years of experience in front-end development specializing in React.js, Next.js, JavaScript, and TypeScript. Skilled in state management using Redux Toolkit, Context API, and React Query, as well as performance optimization with SSR, SSG, Lighthouse, and lazy loading. Experienced in UI/UX enhancement with Tailwind CSS, Framer Motion, and Material UI, and proficient in API integration and authentication using RESTful APIs, Axios, and next-auth. Previously worked at Sepehr Academy (2022-2024), developing scalable React & Next.js applications, mentoring junior developers, and optimizing performance, and at Apanco (2020-2022), building educational web apps, implementing multilingual support, and refactoring legacy codebases. Passionate about collaboration, exploring new technologies, and continuous learning to stay ahead in the fast-evolving front-end landscape. If you're looking for a dedicated, results-driven developer.";

export default function AboutSection() {
  return (
    <div id="about" className="holder my-20 flex flex-col gap-5">
      <HeadingText className="text-center">About me</HeadingText>
      <p className="text-secondary-600 text-lg leading-loose text-justify">
        {aboutMe}
      </p>
      <div
        id="contact"
        className="flexGroup justify-between md:justify-evenly text-secondary-900 my-10"
      >
        {ContactList.map((contact) => {
          return <ContactCard contact={contact} key={contact.id} />;
        })}
      </div>
    </div>
  );
}

function ContactCard({ contact }) {
  return (
    <Link href={contact.address} target={"_blank"}>
      <div className="flex flex-col gap-2 text-center hoverTransition hover:scale-105">
        <div
          className="w-[62px] h-[62px] rounded-full 
        bg-secondary-100 flexGroup text-greenBase text-2xl"
        >
          {contact.icon}
        </div>
        <span>{contact.label}</span>
      </div>
    </Link>
  );
}
