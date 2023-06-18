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
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository:
    "https://github.com/OleksandrMalishevskyi/My_Portfolio_2023/tree/main",
  githubProfile: "https://github.com/OleksandrMalishevskyi",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/OleksandrMalishevskyi",
  // linkedin: "https://www.linkedin.com/in/oleksandr-malishevskyi-technotiger/",
  // gmail: "oleksandr.malishevskiy@gmail.com",
  // gitlab: "https://gitlab.com/.....",
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
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      languages: [
        {
          iconifyClass: "logos:html-5",
        },
        {
          iconifyClass: "logos:css-3",
        },
        {
          iconifyClass: "skill-icons:sass",
        },
        {
          iconifyClass: "logos:javascript",
        },
        {
          iconifyClass: "devicon:react-wordmark",
        },
        {
          iconifyClass: "devicon:angularjs",
        },
        {
          iconifyClass: "logos:nodejs",
        },
        {
          iconifyClass: "skill-icons:redux",
        },
        {
          iconifyClass: "devicon:redis-wordmark",
        },

      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      languages: [
        {
          iconifyClass: "devicon:googlecloud",
        },
        {
          iconifyClass: "simple-icons:amazonaws",
        },
        {
          iconifyClass: "simple-icons:firebase",
        },
        {
          iconifyClass: "simple-icons:postgresql",
        },
        {
          iconifyClass: "simple-icons:mongodb",
        },
        {
          iconifyClass: "simple-icons:docker",
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      languages: [
        {
          iconifyClass: "simple-icons:adobexd",
        },
        {
          iconifyClass: "simple-icons:figma",
        },
        {
          iconifyClass: "simple-icons:adobeillustrator",
        },
        {
          iconifyClass: "simple-icons:inkscape",
        },
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
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
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
  contactPageData,
};
