// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Caden",
  middleName: "",
  lastName: "Westmoreland",
  message: "Ruby on Rails | Python + Django | Javascript + React",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/cadenforrest",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/caden_forrest/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/linkedin_pic.jpg"),
  imageSize: 300,
  message:
    "My name is Caden Westmoreland. I'm a software developer working in Austin, Texas. \
		 I originally began my educational journey as an Aerospace Engineering student at The University of Texas at Austin.\
		 During my first two engineering internships, I was assigned to develop complex software solutions for my respective teams. \
		 From there, I fell in love with software development and transferred to Texas State and graduated with a Bachelor's of Computer Science \
     in 2021. Since then, I've spent my career thus far developing extendable and maintainable server-side applications in Ruby on Rails and Python,  \
    and would love to continue learning and improving my skills in those areas.",
  resume:
    require("../editable-stuff/resume.pdf"),
};


const repos = {
  show: true,
  heading: "Cool Projects",
  gitHubUsername: "cadenforrest", 
  reposLength: 0,
  specificRepos: ["zeus", "MangoByte"],
};

const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/linkedin_pic.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/linkedin_pic.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Django", value: 90 }, 
    { name: "Celery", value: 75 },
    { name: "Ruby on Rails", value: 90},
    { name: "PostgreSQL", value: 75 },
    { name: "JavaScript", value: 75},
    { name: "React", value: 75 },
    { name: "C/C++", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "HTML/CSS", value: 50 },
		{ name: "Applied Mathematics", value: 80},
		{ name: "Agile Development", value: 75}, 
  ],
  softSkills: [
		{ name: "Communication", value: 100},
		{ name: "Problem Solver", value: 95 },
		{ name: "Independent Learner", value: 90},
		{ name: "Flexibility", value: 95},
		{ name: "Collaboration", value: 90 },
    { name: "Team-Player", value: 80 },
    { name: "Organization", value: 20 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
		"If you'd like to get in touch, please don't hesitate to reach me at my email",
  email: "cadenforrest@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      role: "Software Engineer",
      companylogo: require("../assets/img/sockclub.png"),
      date: "September 2021 - Present",
    },
    {
      role: "Manufacturing Engineering Intern", // Here Add Company Name
      companylogo: require("../assets/img/airbornlogo.png"),
      date: "May 2019 – August 2019",
    },
    {
      role: "Undergraduate Research Assistant",
      companylogo: require("../assets/img/cheds-logo-transparent.png"),
      date: "May 2017 – October 2017",
    },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
