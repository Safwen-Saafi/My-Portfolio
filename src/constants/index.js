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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  ipeim,
  threejs,
  ensi,
  iies,
  sfm,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations for everyone.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  academic,
};
