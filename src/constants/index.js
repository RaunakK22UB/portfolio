export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },{
    id: 5,
    name: 'Certifications', 
    href: '/certifications',
    
  }, { id: 'cv', name: 'CV', href: '/cv' }, // 👈 Add this
];



export const clientReviews = [
  {
    id: 1,
    name: 'React.js',
    position: 'Intermediate',
    img: 'assets/react.jpg',
    review:
      'I have a good understanding of React.js and its core concepts like components, props, and state. I can build responsive user interfaces using functional components and hooks like useState and useEffect. I’m also familiar with component-based architecture, conditional rendering, and handling events.',
  },
  {
    id: 2,
    name: 'MongoDB',
    position: 'Intermediate',
    img: 'assets/mgdb.png',
    review:
      'I have a basic understanding of MongoDB, a NoSQL database used to store data in flexible, JSON-like documents. I can perform CRUD operations (Create, Read, Update, Delete) and write queries using MongoDB’s query language. I am familiar with concepts like collections, documents, and indexing.',
  },
  {
    id: 3,
    name: 'Node.Js',
    position: 'Intermediate',
    img: 'assets/node.js.jpg',
    review:
      'I have a solid understanding of Node.js, a JavaScript runtime environment used for building fast and scalable backend applications. I can create servers using built-in modules like http, handle file operations, and manage asynchronous tasks efficiently. I am also comfortable working with external packages using npm and building RESTful APIs.',
  },
  {
    id: 4,
    name: 'JavaScript',
    position: 'Intermediate',
    img: 'assets/js.jpg',
    review:
      'I have a good grasp of JavaScript fundamentals including variables, data types, functions, loops, and conditionals. I can work with the DOM, handle events, and write interactive client-side logic. I am also familiar with ES6 features like arrow functions, template literals, destructuring, and promises.Let me know if you want to expand or adjust any part!',
  },
];

export const myProjects = [
  {
    title: 'Cosmos-Website for Space enthusiasts',
    desc: 'Cosmos is a web-based platform designed to cater to the curiosity and passion of space enthusiasts. It brings together the latest space news, articles, upcoming missions, astronomical events, and educational content in one unified interface.',
    subdesc:
      'Whether you are an amateur stargazer or a space science geek, Cosmos offers real-time updates, a user-friendly experience, and rich visual content to keep you informed and inspired about the universe. Its a perfect blend of knowledge, exploration, and community for anyone fascinated by space.',
    href: 'https://raunakk22ub.github.io/Galaxy_Frontend_Project/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/space1.jpg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/js.jpg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Onling Voting backend System ',
    desc: 'The Online Voting Backend System is a secure and efficient backend solution designed to manage and handle the core functionalities of an online voting platform. Built using Node.js and MongoDB, it provides APIs for user registration, authentication, vote casting, and result calculation.',
    subdesc:
      'The system ensures data integrity, prevents duplicate voting, and maintains a clear record of all transactions. It is ideal for institutions or events that require a reliable and scalable digital voting process.',

    href: 'https://github.com/RaunakK22UB/Voting-App',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/node.js.jpg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/mgdb.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'SkyQuest',
    pos: 'Web Developer Intern',
    duration: 'May 2024-Aug 2024',
    title: " Performed Data Scraping: Extracted web data using Python,Utilized Python Libraries Worked with Selenium and BeautifulSoup for automation, Implemented Scrapy Framework: Built web crawlers for large-scale data collection.",
    icon: '/assets/sq.png',
    animation: 'victory',
  },
  
];
