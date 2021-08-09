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
  message: " Passionate Engineer, Dedicated Friend",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/cadenforrest",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/caden.westmoreland/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/cadenforrest/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/linkedin_pic.jpg"),
  imageSize: 375,
  message:
    "My name is Caden Westmoreland. I'm an upcoming graduate from Texas State University with a B.S. Computer Science with a minor in Applied Mathematics.\
		 I originally began my educational journey as an Aerospace Engineering student at The University of Texas at Austin.\
		 During my first two engineering internships, I was assigned to develop complex software solutions for my respective teams. \
		 From there, I fell in love with software development and transferred to Texas State to pursue a degree in Computer Science.\
		  My area of interest is developing machine learning applications with Python.\
		  I'm also familiar with front end and back end web development. In my free time, I love to make music, play Dota 2, and work on ML projects with my friends.",
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
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 90 },
    { name: "JavaScript", value: 50},
    { name: "React", value: 50 },
    { name: "HTML/CSS", value: 50 },
		{ name: "Applied Mathematics", value: 80},
		{ name: "Agile Development", value: 75}, 
		{ name: "Git", value: 95}
  ],
  softSkills: [
		{ name: "Problem Solver", value: 95 },
		{ name: "Independent Learner", value: 90},
		{ name: "Flexibility", value: 95},
		{ name: "Collaboration", value: 90 },
    { name: "Team-Player", value: 80 },
    { name: "Organization", value: 20 },
    { name: "Creativity", value: 90 },
		{ name: "Communication", value: 100}
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact Me",
  message:
    "I'm on the hunt for any and all Software Engineering opportunities beginning in December 2021. \
		If you'd like to get in touch, please don't hesitate to reach me at my email",
  email: "cadenforrest@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
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
