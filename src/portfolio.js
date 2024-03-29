/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Oleksandr Malishevskyi",
  description: "Бла бла бля... ой... ну короче про себя",
  og: {
    title: "Oleksandr Malishevskiy Portfolio",
    type: "website",
    url: "http://.../",
  },
};

//Home Page
const greeting = {
  title: "Oleksandr Malishevskyi",
  logo_name: "Oleksandr Malishevskiy",
  nickname: "Oleksand Malishevskyi TechnoTiger",
  subTitle: "I am curently FullStack JavaScript Developer",
  resumeLink:
    "https://drive.google.com/file/d/1roo39PpzLKGc8QIg82RE7Qz4jm74F5bl/view?usp=sharing",
  portfolio_repository:
    "https://github.com/OleksandrMalishevskyi/My_Portfolio_2023/tree/main",
  githubProfile: "https://github.com/OleksandrMalishevskyi",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/OleksandrMalishevskyi",
  // linkedin: "https://www.linkedin.com/in/oleksandr-malishevskyi-technotiger/",
  // gmail: "oleksandr.malishevskiy@gmail.com",
  // facebook: "https://www.facebook.com/.../",
  // instagram: "https://www.instagram.com/..../"

  {
    name: "Github",
    link: "https://github.com/OleksandrMalishevskyi",
    fontAwesomeIcon: "github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/oleksandr-malishevskyi-technotiger/",
    fontAwesomeIcon: "linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:oleksandr.malishevskiy@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/.../",
    fontAwesomeIcon: "facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/.../",
    fontAwesomeIcon: "instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "FrontEnd JavaScript Developer",
      fileName: "FrontEnd",
      skills: [
        "⚡ User Interface (UI) Development: Frontend JavaScript Developers focus on building the user interface of web applications. They create interactive and visually appealing web pages using technologies like HTML, CSS, and JavaScript. They ensure that the application's interface is user-friendly and responsive to different devices and screen sizes.",
        "⚡ Client-Side Logic: They write client-side JavaScript code to handle user interactions, validate input, and communicate with the backend server. They use frontend frameworks and libraries like React, Angular, or Vue.js to develop dynamic and data-driven web applications.",
        "⚡ Cross-Browser Compatibility and Performance: Frontend JavaScript Developers must ensure that their web applications work consistently across different web browsers and platforms. They optimize the performance of the frontend code, improving loading times and responsiveness. This includes minimizing requests, reducing code size, and using techniques like lazy loading.",
      ],
      languages: [
        { iconifyClass: "logos:html-5" },
        { iconifyClass: "logos:css-3" },
        { iconifyClass: "skill-icons:sass" },
        { iconifyClass: "logos:javascript" },
        { iconifyClass: "devicon:react-wordmark" },
        { iconifyClass: "devicon:angularjs" },
        { iconifyClass: "skill-icons:redux" },

      ],
    },
    {
      title: "BackEnd JavaScript Developer",
      fileName: "BackEnd",
      skills: [
        "⚡ Server-Side Development: Backend JavaScript Developers work on the server-side of web applications. They write server code, design APIs, and manage the data and logic of the application. They use frameworks like Node.js to build server-side applications.",
        "⚡ Database Management: They manage and interact with databases, including creating, querying, and optimizing database structures. Backend JavaScript Developers often work with both relational (e.g., SQL databases) and NoSQL databases (e.g., MongoDB) to store and retrieve data.",
        "⚡ ntegration and Security: They integrate the backend of the application with the frontend and third-party services. Ensuring the security of the application is another critical aspect, including implementing authentication, authorization, and protection against common security vulnerabilities.",
      ],
      languages: [
        { iconifyClass: "devicon:googlecloud" },
        { iconifyClass: "skill-icons:aws-light" },
        { iconifyClass: "logos:firebase" },
        { iconifyClass: "devicon:postgresql-wordmark" },
        { iconifyClass: "devicon:mongodb-wordmark" },
        { iconifyClass: "devicon:docker-wordmark" },
        { iconifyClass: "logos:nodejs" },
        { iconifyClass: "devicon:redis-wordmark" },
      ],
    },
      ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title:
        'National Technical University of Ukraine "Kyiv Polytechnic Institute"',
      subtitle: "Specialist inzener electromechanics",
      logo_path: "NTUU_KPI_logo.png",
      alt_name: "NTUU KPI",
      duration: "2003 - 2011",
      descriptions: [
        "⚡ I studied special sections of mathematics, methods of management theory, decision-making and artificial intelligence, modern information technologies, computer systems and networks, methods of information processing and protection, programming technologies and microprocessor technology.",
        "⚡ In 2009, I defended my bachelor's degree and received a bachelor's degree in instrumentation.",
        "⚡ In 2011, I graduated from the National Technical University of Ukraine 'Kyiv Polytechnic Institute', received a complete higher education and obtained a qualification of an electromechanical.",
      ],
      website_link: "https://kpi.ua/",
    },
    {
      title: "Chernihiv National University of Technology",
      subtitle: "Bachelor of Computer Engineering",
      logo_path: "CNTU.png",
      alt_name: "CNTU",
      duration: "2016 - 2018",
      descriptions: [
        "⚡ I studied Discrete Mathematics, Computer arithmetics, Structures and algorithms of data processing, programming, System programming in Win32 and .Net, Java and C# technologies of applied programming, Large integrated circuits of microprocessors and programmable logic, Computer calculations, Software Engineering, Scripting programming languages,",
        "⚡ Object-oriented programming, System programming, System software, Organisation of databases, Parallel and distributed computing, Algorithms and computing methods, Computer graphics, Technologies of desing of computer systems, Computer Networks, Telecommunication systems and technologies,Programming in C++, IP telephony, Programming mobile device,",
        "⚡ Theory of probablity and mathematical statistics, Architecture of computers, Physical bases of electrical engineering, Pattern recognition, Digital processing and transmission of information, Protection of information in computer systems, Administration of operating systems,Programmin of Web interfaces, Object-Oriented Analysis and desing and other",
      ],
      website_link: "https://stu.cn.ua/",
    },
    {
      title: "Postsecondary school “Medicus“",
      subtitle: "M.S. in Computer Science",
      logo_path: "Medicus_logo.png",
      alt_name: "Medicus",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Passed the examination confirming the qualification in the profession in the field of qualification EE.08. Assembly and operation of computer systems, peripheral devices and networks, separated in the profession Computer Technician 351203.",
        "⚡ Passed the examination confirming qualifications in the profession in the field of qualification EE.09 Programming, creation and administration of websites and databases, separated in the profession Computer Technician 351203.",
        "⚡ Was one of four people who successfully passed the exam and received certificates confirming qualifications in the profession of IT Technician",
      ],
      website_link: "https://szkolamedicus.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web developer 2021",
      subtitle: "- React.js course",
      logo_path: "udemy-icon.svg",
      certificate_link: "https://google.com/",
      alt_name: "React",
      color_code: "#ffffffff",
    },
    {
      title: "MERN eComerce",
      subtitle: "- MongoDB Express React Node",
      logo_path: "udemy-icon.svg",
      certificate_link: "https://google.com/",
      alt_name: "MERN",
      color_code: "#ffffffff",
    },
    {
      title: "Cisco Networking Academy",
      subtitle: "CCNA Routing and Switching",
      logo_path: "cisco.svg",
      certificate_link: "https://google.com/",
      alt_name: "CCNA",
      color_code: "#ffffffff",
    },
  ],
};

// Experience Page

const works = {
  works: [
    {
      title: "Individual Entrepreneur",
      company: "Oleksandr Malishevskiy TechnoTiger",
      logo_path: "MyFirstLogoNOBG.png",
      duration: "Jan 2023 - Now",
      location: "Poznan, Poland",
      descriptions: [
        "⚡ I studied special sections of mathematics, methods of management theory, decision-making and artificial intelligence, modern information technologies, computer systems and networks, methods of information processing and protection, programming technologies and microprocessor technology.",
        "⚡ In 2009, I defended my bachelor's degree and received a bachelor's degree in instrumentation.",
        "⚡ In 2011, I graduated from the National Technical University of Ukraine 'Kyiv Polytechnic Institute', received a complete higher education and obtained a qualification of an electromechanical.",
      ],
    },
    {
      title: "Smart System Installer",
      company: "VCN",
      logo_path: "VCNnobg.png",
      duration: "May 2022 - Dec 2022",
      location: "Poznan, Poland",
      descriptions: [
        "⚡ I studied special sections of mathematics, methods of management theory, decision-making and artificial intelligence, modern information technologies, computer systems and networks, methods of information processing and protection, programming technologies and microprocessor technology.",
        "⚡ In 2009, I defended my bachelor's degree and received a bachelor's degree in instrumentation.",
        "⚡ In 2011, I graduated from the National Technical University of Ukraine 'Kyiv Polytechnic Institute', received a complete higher education and obtained a qualification of an electromechanical.",
      ],
    },
    {
      title: "Computer network installer / Junior Frontend Developer",
      company: "SEVENCOMP",
      logo_path: "SevencompNOBG.png",
      duration: "Jule 2019 - Jule 2021",
      location: "Swarzędz, Poland",
      descriptions: [
        "⚡ I studied special sections of mathematics, methods of management theory, decision-making and artificial intelligence, modern information technologies, computer systems and networks, methods of information processing and protection, programming technologies and microprocessor technology.",
        "⚡ In 2009, I defended my bachelor's degree and received a bachelor's degree in instrumentation.",
        "⚡ In 2011, I graduated from the National Technical University of Ukraine 'Kyiv Polytechnic Institute', received a complete higher education and obtained a qualification of an electromechanical.",
      ],
    },
    {
      title: "Computer network installer",
      company: "PBS Optics",
      logo_path: "no-image.png",
      duration: "Sept 2018 - May 2019",
      location: "Poznan, Poland",
      descriptions: [
        "⚡ I studied special sections of mathematics, methods of management theory, decision-making and artificial intelligence, modern information technologies, computer systems and networks, methods of information processing and protection, programming technologies and microprocessor technology.",
        "⚡ In 2009, I defended my bachelor's degree and received a bachelor's degree in instrumentation.",
        "⚡ In 2011, I graduated from the National Technical University of Ukraine 'Kyiv Polytechnic Institute', received a complete higher education and obtained a qualification of an electromechanical.",
      ],
    },
    {
      title: "System administrator, Network installer",
      company: "JSC Slovyanski Shpalery  KFTP",
      logo_path: "KFTPnobg.png",
      duration: "June 2004 - June 2018",
      location: "Koryukivka, Ukraine",
      descriptions: [
        "⚡ I studied special sections of mathematics, methods of management theory, decision-making and artificial intelligence, modern information technologies, computer systems and networks, methods of information processing and protection, programming technologies and microprocessor technology.",
        "⚡ In 2009, I defended my bachelor's degree and received a bachelor's degree in instrumentation.",
        "⚡ In 2011, I graduated from the National Technical University of Ukraine 'Kyiv Polytechnic Institute', received a complete higher education and obtained a qualification of an electromechanical.",
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const projectcards = {
  data: [
    {
      title: "LucianBrit_Cat-E-Shop",
      description:
        "E-comerce shop for cats, Fullstack project maked with React, Node, MongoBD and other technologies",
      videoId: "BonX-tNfQS8",
      githubLink:
        "https://github.com/OleksandrMalishevskyi/LucianBrit_Cat-E-Shop",
      renderLink: "https://cats-e-shop.onrender.com/",
      technologies: [
        { iconifyClass: "logos:html-5" },
        { iconifyClass: "logos:css-3" },
        { iconifyClass: "logos:javascript" },
        { iconifyClass: "logos:nodejs" },
        { iconifyClass: "devicon:express" },
        { iconifyClass: "skill-icons:react-dark" },
        { iconifyClass: "skill-icons:redux" },
        { iconifyClass: "devicon:mongodb-wordmark" },
      ],
    },
{
      title: "LucianBrit_Cat-E-Shop",
      description:
        "An application for managing a restaurant or cafe, Fullstack project maked with Angular, Node, MongoBD and other technologies",
      videoId: "SH-wAtEUXMw",
      githubLink:
        "https://github.com/OleksandrMalishevskyi/RestoranApp_CatsCaffee",
      renderLink: "https://cats-e-shop.onrender.com/",
      technologies: [
        { iconifyClass: "logos:html-5" },
        { iconifyClass: "logos:css-3" },
        { iconifyClass: "logos:javascript" },
        { iconifyClass: "logos:nodejs" },
        { iconifyClass: "devicon:express" },
        { iconifyClass: "devicon:angularjs" },
        { iconifyClass: "devicon:mongodb-wordmark" },
      ],
    },
    {
      title: "Portfolio project",
      description: "my portfolio projekt",
      videoId: "UybcMnYCK_U",
      githubLink: "link_GitHub",
      renderLink: "link_render",
      technologies: [
        { iconifyClass: "logos:nodejs" },
        { iconifyClass: "skill-icons:redux" },
        { iconifyClass: "devicon:redis-wordmark" },
      ],
    },
    {
      title: "Portfolio project",
      description: "my portfolio projekt",
      videoId: "UybcMnYCK_U",
      githubLink: "link_GitHub",
      renderLink: "link_render",
      technologies: [
        { iconifyClass: "logos:html-5" },
        { iconifyClass: "logos:css-3" },
        { iconifyClass: "skill-icons:sass" },
        { iconifyClass: "logos:javascript" },
        { iconifyClass: "skill-icons:redux" },
        { iconifyClass: "devicon:redis-wordmark" },
      ],
    },
    {
      title: "Portfolio project",
      description: "my portfolio projekt",
      videoId: "UybcMnYCK_U",
      githubLink: "link_GitHub",
      renderLink: "link_render",
      technologies: [
        { iconifyClass: "logos:html-5" },
        { iconifyClass: "logos:css-3" },
        { iconifyClass: "skill-icons:sass" },
        { iconifyClass: "logos:javascript" },
        { iconifyClass: "devicon:react-wordmark" },
        { iconifyClass: "devicon:angularjs" },
        { iconifyClass: "logos:nodejs" },
        { iconifyClass: "skill-icons:redux" },
        { iconifyClass: "devicon:redis-wordmark" },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ava_with_border.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "61-888, Polwiejska 26, Poznan, Wielkopolskie wojewodstwo, Polska ",
    locality: "Poznan",
    country: "PL",
    region: "Wielkopolski",
    postalCode: "61-888",
    streetAddress: "Polwiejska 26",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/search/?api=1&query=Półwiejska+26,+Poznań",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  works,
  projectsHeader,
  projectcards,
  contactPageData,
};
