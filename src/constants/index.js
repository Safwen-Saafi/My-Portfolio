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
  figma,
  docker,
  cancer,
  jobit,
  tripguide,
  ipeim,
  threejs,
  ensi,
  iies,
  sfm,
  cssm,
  dockerm,
  figmam,
  gitm,
  htmlm,
  javascriptm,
  mongodbm,
  nodejsm,
  reactjsm,
  reduxm,
  tailwindm,
  typescriptm,
  threejsm
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
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
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: creator,
  },
];


const techm = [
  {
    name: "css",
    icon: cssm,
  },
  {
    name: "docker",
    icon: dockerm,
  },
  {
    name: "figma",
    icon: figmam,
  },
  {
    name: "git",
    icon: gitm,
  },
  {
    name: "html",
    icon: htmlm,
  },
  {
    name: "javascript",
    icon: javascriptm,
  },
  {
    name: "mongodb",
    icon: mongodbm,
  },
  {
    name: "nodejs",
    icon: nodejsm,
  },
  {
    name: "reactjs",
    icon: reactjsm,
  },
  {
    name: "tailwind",
    icon: tailwindm,
  },
  {
    name: "typescript",
    icon: typescriptm,
  }
];



const technologies = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const academic = [
  {
    title: "IPEIM",
    company_name: "Preparatory Institute for Engineering Studies Monastir",
    icon: ipeim,
    iconBg: "#e6dedd",
    date: "Sept 2020 - Jul 2022",
    points: [
      "Section PC 'Physics-Chemistry'",
      "Two years of heavy studies including Algebra, Physics, IT, Chemistry.",
      "Ranked 95 Nationally",
    ],
  },
  {
    title: "ENSI",
    company_name: "National School Of Computer Science",
    icon: ensi,
    iconBg: "#ffff",
    date: "Sept 2022 - Jun 2025",
    points: [
      "One of the leading Computer Science Engineering Schools in Tunisia, making over 40 years of excellence in engineering education and research.",
      "Focused on my studies in software engineering and computer science, with a particular interest in modern technologies and innovative solutions",
      "I explored modern web technologies to create dynamic user experiences and delved into ML for intelligent data-driven solutions. Additionally, I embraced DevOps practices to enhance development efficiency and collaboration.",
    ],
  },
];

const experiences = [
  {
    title: "IIES",
    company_name: "Inspire It Engineering Solutions",
    icon: iies,
    iconBg: "#14c7ff",
    date: "1 Jul 2022 - 31 Jul 2022",
    points: [
      "During my internship with IIES Company, I developed a web application utilizing HTML, CSS, and JavaScript named Daily.",
      "Created an interactive feature to provide real-time weather forecasts using external APIs, enhancing user engagement with up-to-date weather information.",
      "Implemented a currency conversion tool to allow users to easily convert between different currencies, integrating up-to-date exchange rates.",
      "Gained hands-on experience in front-end development, improving my proficiency in web technologies.",
    ],
  },
  {
    title: "SFM",
    company_name: "SFM Technologies",
    icon: sfm,
    iconBg: "#C6BAAD",
    date: " 20 Jun 2024 - 20 Aug 2024",
    points: [
      "Created in 1995, stemming from the field of telecommunications and networks.",
      "I developed a full web application using the MERN stack : the MAASAI Platform.",
      "It features a series of charts that represent all decision-making functionalities. This project was designed to provide traders with an optimal user experience by offering powerful and easily accessible analytical tools..",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Breast Cancer Prediction",
    description:
      "A web application that predicts whether a breast cell cluster is benign or malignant based on multiple features. The app provides a user-friendly interface with a circular chart that updates dynamically based on user input and a result display showing the probability of each case.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: cancer,
    source_code_link: "https://github.com/Safwen-Saafi/Breast-Cancer-ML-Streamlit",
  }
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  academic,
  techm
};
