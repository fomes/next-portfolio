import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

import { FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

export const email = {
  address: "fgomesdeluna@gmail.com",
};

export const skills = {
  frontend: {
    title: "Frontend",
    stacks: [
      {
        name: "HTML5",
        icon: FaHtml5,
      },
      {
        name: "Javascript",
        icon: SiJavascript,
      },
      {
        name: "ReactJS",
        icon: FaReact,
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
    ],
  },

  backend: {
    title: "Backend",
    stacks: [
      {
        name: "NodeJS",
        icon: FaNodeJs,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
    ],
  },
};

export const socialLinks = [
  {
    href: "https://www.instagram.com/fgomesdeluna/",
    icon: AiOutlineInstagram,
  },
  {
    href: "https://www.linkedin.com/in/fgomesdeluna/",
    icon: AiOutlineLinkedin,
  },
  {
    href: "https://github.com/fomes",
    icon: AiOutlineGithub,
  },
];
