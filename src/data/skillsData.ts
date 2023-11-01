import { FaReact, FaAngular, FaNodeJs, FaHtml5 } from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

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
        name: "Rect Js",
        icon: FaReact,
      },
      {
        name: "Angular",
        icon: FaAngular,
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
        name: "Node Js",
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
