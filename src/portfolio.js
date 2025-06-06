/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animatedContact: true,
  animatedGreeting: false,
  animatedSkills: false,
  animatedSkillProgress: true
};

const greeting = {
  username: "Lars-Thorsten Bilek",
  title: "Hi all, I'm Lars",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 experienced in building modern web applications using Java, Angular, Spring Framework, and various DevOps tools."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/larstb",
  linkedin: "https://www.linkedin.com/in/lars-thorsten-bilek/",
  gmail: "lbilek.dev@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100008249610930",
  instagram: "https://www.instagram.com/ltb_2001/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK DEVELOPER SPECIALIZED IN MODERN WEB TECHNOLOGIES",
  skills: [
    emoji("⚡ Building interactive frontends using Angular, HTML, and CSS"),
    emoji("⚡ Developing backend services with Java, Spring, and databases"),
    emoji("⚡ Automating development and deployment with Docker, Azure DevOps, and more")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "HTML", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "BS Evita – Vocational School for IT",
      logo: require("./assets/images/bsevitaLogo.png"),
      subHeader: "Professional training in IT with a focus on software development",
      duration: "09/2017 – 02/2021",
      desc: "Parallel to the apprenticeship",
      descBullets: ["Practical education in Java, databases, and web technologies"]
    },
    {
      schoolName: "HTL Spengergasse",
      logo: require("./assets/images/htlspengergasseLogo.png"),
      subHeader: "Information Technology – Apprenticeship with Matura",
      duration: "2019 – 2023",
      desc: "Graduated with honors. Combined apprenticeship and higher education with final qualification exam.",
      descBullets: [
        "Led and mentored training projects for small teams",
        "Handled project planning and team organization"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    { Stack: "Frontend (Angular, HTML, CSS)", progressPercentage: "90%" },
    { Stack: "Backend (Java, Spring, SQL)", progressPercentage: "85%" },
    { Stack: "DevOps / Tools", progressPercentage: "75%" }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "RISE GmbH",
      companylogo: require("./assets/images/riseLogo.png"),
      date: "04/2023 – Present",
      desc: "Working on various software solutions in the eHealth sector, with a focus on modern web development and automation.",
      descBullets: [
        "Frontend development using Angular and TypeScript",
        "Backend implementation with Java and Spring Boot",
        "Database modeling with PostgreSQL",
        "CI/CD and containerization using Docker and Kubernetes",
        "Contributions to e-medical platforms and digital health applications"
      ]
    },
    {
      role: "Junior Developer",
      company: "Austrian Standards",
      companylogo: require("./assets/images/austrianStandardsLogo.png"),
      date: "09/2021 – 03/2023",
      desc: "Developed a workflow-based platform for standard development.",
      descBullets: [
        "Tech stack: Java, Spring, Angular, Camunda, JPA, Oracle/Postgres",
        "Testing: JUnit5, Serenity BDD, Docker, Azure DevOps"
      ]
    },
    {
      role: "Software Developer",
      company: "Social Insurance",
      companylogo: require("./assets/images/socialInsurance.png"),
      date: "03/2021 – 08/2021",
      desc: "Worked on JavaEE/Angular-based applications. Administered and configured systems including Microsoft Server, Nexus, Jira, etc.",
      descBullets: [
        "Involved in full stack application development using Vaadin and Angular",
        "Maintained internal platforms and development environments"
      ]
    },
    {
      role: "IT Apprentice",
      company: "Social Insurance",
      companylogo: require("./assets/images/socialInsurance.png"),
      date: "09/2017 – 02/2021",
      desc: "Apprenticeship focused on full stack development and internal tooling. Trusted with planning and leading training projects.",
      descBullets: [
        "Supervised internal software projects for apprentices",
        "Supported development with Java, JPA, Vaadin, Assentis, and MSSQL"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const githubSection = {
  display: true
}

const openSource = {
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Key software solutions I contributed to",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out to me!️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "lbilek.dev@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  githubSection
};
