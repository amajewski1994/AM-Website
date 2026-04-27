import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  Heineken_Linkpost,
  Rossmannia,
  Philips_Linkpost,
  threejs,
  aframe,
  lensStudio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AR Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Aframe",
    icon: aframe,
  },
  {
    name: "Lens Studio",
    icon: lensStudio,
  },
];

const experiences = [
  {
    title: "AR Developer",
    company_name: "Lens That",
    icon: false,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Develop and maintain Augmented Reality experiences for social media platforms and the web using JavaScript, React and modern AR tools.",
      "Build interactive WebAR applications with a strong focus on real time performance, usability and cross platform compatibility.",
      "Collaborate with designers and developers to deliver polished, production ready interactive experiences.",
    ],
  },
  {
    title: "Web Developer",
    company_name: false,
    icon: false,
    iconBg: "#383E56",
    date: "September 2021 - April 2022",
    points: [
      "Creating and maintaining websites using WordPress and its plugins.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Collaborating with clients and providing them constructive feedback.",
    ],
  },
];

const projects = [
  {
    name: "Heineken “Pub Museums”",
    description:
      `Built location based WebAR experiences that transformed physical spaces into interactive virtual environments, optimized for real world performance and awarded at Cannes Lions.`,
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Lens Studio",
        color: "green-text-gradient",
      },
      {
        name: "Target Tracking",
        color: "pink-text-gradient",
      },
    ],
    image: Heineken_Linkpost,
    source_code_link: "https://blog.lensthat.com/2024/07/17/heinekens-pub-museums-by-lepub-publicis-thinkhouse-and-lens-that/",
  },
  {
    name: "Rossmania",
    description:
      `Designed and developed interactive AR mini games with real time gameplay mechanics, integrating face tracking, world tracking and reward driven systems within a mobile application`,
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mobile",
        color: "green-text-gradient",
      },
      {
        name: "webView",
        color: "pink-text-gradient",
      },
    ],
    image: Rossmannia,
    source_code_link: "https://blog.lensthat.com/2026/01/22/rossmania-how-rossmann-builds-customer-loyalty-with-augmented-reality/",
  },
  {
    name: "Philips Refurb",
    description:
      `Built a large scale public WebAR experience visualizing environmental impact in real world space, optimized for high traffic usage and recognized with a Cannes Lions Grand Prix.`,
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "8th wall",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Philips_Linkpost,
    source_code_link: "https://blog.lensthat.com/2024/08/27/refurb-editions-better-than-new-for-philips-bags-grand-prix-at-cannes-lions/",
  },
];

export { services, technologies, experiences, projects };