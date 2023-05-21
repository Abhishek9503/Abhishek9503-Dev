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
  threejs,
  blender,
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
    id: "tweets",
    title: "Tweets",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Manit Bhopal Hackathon (Team Leader)",
    company_name: "Manit Bhopal",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb-2023",
    points: [
      "This is my first  hackathon which i have in my life with the responsibilty of team leader",
      " Here we created a web app using HTML CSS Tailwind and mongodb as Backend functionality",
      "The Web Provide data visulization from the .csv file which are displayed on the web to understand the  data with visual and graphs easily",
      "This hackathon help me understanding how to build any project from scratch with team and understand the edge cases while facing issue in small functionality",
    ],
  },
  {
    title: "Codespire Hackathon ",
    company_name: "AITR Indore",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "April-2023",
    points: [
      "Worked as a team leader and secured 7th rank in Codespire Hackahton ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mern Stack Develpment",
    company_name: "Code Help",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Current",
    points: [
      "Working as ull stack developer intern at codehelp ",
      "Got an hands on experience  on html css js react and mongodb ",
      "Work in group to create to varioius projects and gain insight of open source contribution",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "CMS Team Member ",
    company_name: "IPS Academy Indore",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using HTML CSS JS and PHP and other related technologies.",
      "Collaborating with cross-functional teams including designs,working, and other functionality to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback for college website",
    ],
  },
  {
    title: "C++ Certification Course  ",
    company_name: "Universal Informatics",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan-2022 May-2022",
    points: [
      "Completed comprehensive C++ course covering fundamental concepts, object-oriented principles, data structures, and algorithms.",
      "Applied learned concepts through extensive coding exercises and assignments, strengthening practical skills in C++ programming.",
      "Collaborated with peers on real-world C++ projects, showcasing teamwork and problem-solving abilities.",
      "Explored additional resources to expand knowledge beyond the course curriculum, staying up-to-date with emerging trends in C++ programming.",
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
    name: "Placement Analyser",
    description:
      "Campus placement processes in higher educational institutions can be complex and time-consuming, often requiring a lot of manual data entry and cleaning of past placement records. This creates a burden on the training and placement cells, making it difficult for them to conduct campus placement efficiently and effectively.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },

      {
        name: "Mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    image2:"https://placementanalyzer.onrender.com/",
    source_code_link: "https://github.com/",
  
    
  },
  {
    name: "My Portfolio",
    description:
      " My portfolio, built with React and Three.js, showcases my work using , interactive experiences, and seamless navigation. It incorporates 3D graphics and animations, ensuring a visually engaging and responsive presentation across devices. It highlights my skills, achievements, and creativity in a dynamic and immersive manner.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    image2:"https://portfolio-6hvt.onrender.com/",
    source_code_link: "https://github.com/",
  },
  {
    name: "Password Generator",
    description:
      " The Password Generator app I created using JavaScript, HTML, and CSS is a crucial tool for enhancing online security. With a user-friendly interface, it generates strong passwords based on user preferences.It makesindispensable for safeguarding sensitive information.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    image2:"https://password-generator-abhishek9503.onrender.com/",
    source_code_link: "https://github.com/Abhishek9503/Password-Generator",
  },
  {
    name: "Password Generator",
    description:
      " The Password Generator app I created using JavaScript, HTML, and CSS is a crucial tool for enhancing online security. With a user-friendly interface, it generates strong passwords based on user preferences.It makesindispensable for safeguarding sensitive information.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    image2:"https://password-generator-abhishek9503.onrender.com/",
    source_code_link: "https://github.com/Abhishek9503/Password-Generator",
  },

  {
    name: "Password Generator",
    description:
      " The Password Generator app I created using JavaScript, HTML, and CSS is a crucial tool for enhancing online security. With a user-friendly interface, it generates strong passwords based on user preferences.It makesindispensable for safeguarding sensitive information.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    image2:"https://password-generator-abhishek9503.onrender.com/",
    source_code_link: "https://github.com/Abhishek9503/Password-Generator",
  },

  {
    name: "Password Generator",
    description:
      " The Password Generator app I created using JavaScript, HTML, and CSS is a crucial tool for enhancing online security. With a user-friendly interface, it generates strong passwords based on user preferences.It makesindispensable for safeguarding sensitive information.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    image2:"https://password-generator-abhishek9503.onrender.com/",
    source_code_link: "https://github.com/Abhishek9503/Password-Generator",
  },
];

export { services, technologies, experiences, testimonials, projects };
