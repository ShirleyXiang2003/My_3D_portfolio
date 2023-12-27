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
    bytedance,
    githubc,
    nyu,
    hymake,
    pengbin,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Music Composer",
      icon: mobile,
    },
    {
      title: "Perfectionist",
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
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "MEAN Stack Social Media Platform",
      icon: githubc,
      iconBg: "#ffffff",
      date: "Jul 2023 - Present",
      points: [
        "Frontend development involved creating an interactive and responsive user interface using HTML, CSS, and TypeScript within the Angular framework. For the backend, utilized Node.js with Express.js middleware, ensuring smooth communication between frontend and backend.",
        "Employed MongoDB as the data schema, leveraging MongoDB Atlas for cloud-based configuration and data sharing.",
        "Implemented essential functionalities, including user signup, login, authentication, and authorization.",
        "Enabled users to create, read, update, and delete posts, complete with image uploads.",
      ],
    },
    {
      title: "IT Support Intern",
      company_name: "ByteDance Ltd.",
      icon: bytedance,
      iconBg: "#ffffff",
      date: "May 2023 - Sep 2023",
      points: [
        "Assisted Discord community users with technical problems, including fixing C#/Lua script bugs, uploading avatar and world models to the ParaSpace app, and modifying shaders, meshes, triangles, and blend shape counts.",
        "Wrote API documentation, organized detailed instructions, and example code on how to optimize the avatar model, use prefab components such as Para Scene Environment and Para Avatar Pedestal, and handle issues related to Para Avatar SDK decompression failures.",
        "Wrote Paraspace online boot camp plan and tutorial video script, including applying material/texture to a model, using ProBuilder to build a house frame, baking lightmaps, and post-processing a scene, increasing creator number by 10%.",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Communication Networks Lab - NYU Abu Dhabi",
      icon: nyu,
      iconBg: "#ffffff",
      date: "Jun 2022 - Feb 2023",
      points: [
        "Set up 64 cores and a 1TB MITM proxy server along with 50 Xiaomi Redmi smartphones.",
        "Selected 500 webpages from Hispar, and another 500 webpages from Tranco. Used Python to crawl 1000 selected webpages, including login pages and internal pages, from the Chrome browser and cached on a dedicated proxy server.",
        "Used time efficiency, memory usage, and functionality as measurement criteria to assess and compare the effectiveness of different web complexity solutions in a reproducible manner within real-world environments.",
      ],
    },
    {
      title: "Technical Management Trainee",
      company_name: "Xiamen Hymake Technology Co., Ltd.",
      icon: hymake,
      iconBg: "#ffffff",
      date: "Feb 2022 - Sep 2022",
      points: [
        "Designed the project workflow for the Engineering Cost Index Smart Application System using Xmind, coordinated with product development, testing, and business teams, assisted in scheduling the project, addressed risks in the development process, and ensured the on-time delivery and smooth deployment of requirements.",
        "Used SQL to extract and analyze abnormal engineering cost data, performed inner joins on multiple data tables, applied row_number for data windowing, successfully identified over ten thousand instances of abnormal data in various scenarios, and provided feedback to the business side.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Zhushan is the best student this year.",
      name: "Carlos Guedes",
      designation: "Associate Professor of Music",
      company: "NYU Abu Dhabi",
      image: "https://nyuad.nyu.edu/content/nyuad/en/home/academics/divisions/arts-and-humanities/faculty/carlos-guedes/jcr:content/bio-info/image.adaptive.m1651053589920/290.jpg",
    },
    {
      testimonial:
        "Her active involvement in technology sharing and teamwork has had a positive ripple effect across our team.",
      name: "Pengbin Li",
      designation: "UGC Marketing Specialist",
      company: "ByteDance",
      image: pengbin,
    },
    {
      testimonial:
        "Having she in class was an absolute pleasure!",
      name: "Hua-Yu Sebastian Cherng",
      designation: "Vice Dean",
      company: " Diversity, Equity, and Belonging, NYU",
      image: "https://steinhardt.nyu.edu/sites/default/files/styles/nyu_profile_image/public/2022-07/IMG_8263%20%281%29.jpg?h=305def5a&itok=VHzuDYuI",
    },
  ];
  
  const projects = [
    {
      name: "Software Art Collection",
      description:
        "Discover my software art collection—a fusion of code, creativity, and imagination.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "openFrameworks",
          color: "green-text-gradient",
        },
        {
          name: "software_art",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ShirleyXiang2003/software_art/",
    },
    {
      name: "Ball-collision-generated Music System",
      description:
        "Generated random melodies in a fixed scale based on ball collisions within a preset 3D space.",
      tags: [
        {
          name: "Max/MSP",
          color: "blue-text-gradient",
        },
        {
          name: "phys",
          color: "green-text-gradient",
        },
        {
          name: "jit",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Motion-controlled Music Generation",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Max/MSP",
          color: "blue-text-gradient",
        },
        {
          name: "jit",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
];
  
export { services, technologies, experiences, testimonials, projects };