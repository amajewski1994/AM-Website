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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    works_restaurant,
    works_coffeehouse,
    works_fcbarcelona,
    threejs,
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
    {
      title: "AR Developer",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
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
    {
      title: "JavaScript / AR Developer",
      company_name: "Lens That",
      icon: false,
      iconBg: "#E6DEDD",
      date: "April 2022 - Present",
      points: [
        "Creating and maintaining Augmented Reality effects for social media (Facebook, Instagram, Snapchat, TikTok) using JavaScript technology.",
        "Creating and maintaining Augmented Reality effects for browsers using JavaScript / React technology.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Online Food Ordering",
      description:
        "Web application that allows users to order restaurant dishes online, which is very convenient.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: works_restaurant,
      source_code_link: "https://sklep.niepospolita-lublin.com/#/",
    },
    {
      name: "Coffeehouse Website",
      description:
        "A simple website for polish coffeehouse created using Wordpress with Elementor plugin.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "elementor",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: works_coffeehouse,
      source_code_link: "https://trzymiotly.com/",
    },
    {
      name: "FC Barcelona",
      description:
        "Github project that shows my skills as MERN developer. FC Barcelona web app that contains store, blog, authentication and many others.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: works_fcbarcelona,
      source_code_link: "https://amajewski1994.github.io/fcbarcelona-website/",
    },
  ];
  
  export { services, technologies, experiences, projects };