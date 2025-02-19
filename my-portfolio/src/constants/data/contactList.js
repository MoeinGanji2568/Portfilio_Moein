import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const ContactList = [
  {
    id: 1,
    label: "Linkedin",
    icon: <FaLinkedin />,
    address: "https://www.linkedin.com/in/moein-mohsenzadeh-ganji-a808142b8/",
  },
  {
    id: 2,
    label: "Email",
    icon: <MdEmail />,
    address: "mailto:moeinganji2004@gmail.com",
  },
  {
    id: 3,
    label: "Telegram",
    icon: <FaTelegramPlane />,
    address: "https://t.me/mohsenzadeh_moein",
  },
  {
    id: 4,
    label: "GitHub",
    icon: <FaGithubSquare />,
    address: "https://github.com/MoeinGanji2568",
  },
];
export default ContactList;
