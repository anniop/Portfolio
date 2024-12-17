export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#project" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I believe in seamless collaboration, transforming ideas into impactful experiences.",
    description: "Let's bring your vision to life with smooth teamwork.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Time zones are just numbers. I'm here whenever you need me.",
    description: "No matter where you are, communication flows seamlessly.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack is as dynamic as the projects I work on.",
    description: "Constantly evolving, I'm always learning and experimenting with the latest tools.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech lover with a deep passion for development.",
    description: "Crafting elegant solutions with precision and creativity.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {

    id: 5,
    title: "Crafting a groundbreaking UI design system.",
    description: "Developing a modular, scalable, and visually stunning UI kit for modern web applications.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s make something amazing together.",
    description: "Got a project in mind? Let’s turn it into reality.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Employee Management System",
    des: "A robust application designed to streamline employee data management, featuring CRUD functionality and analytics for HR operations.",
    img: "/EMS.png",
    iconLists: ["/re.svg", "/nodejs.svg", "/mongodb.svg", "/tail.svg"],
    link: "https://github.com/anniop/Employee-Management-System.git",
  },
  {
    id: 2,
    title: "LinkVault",
    des: "A secure link management tool that allows users to save, categorize, and retrieve links with ease, ensuring data privacy.",
    img: "/LinkVault.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg"],
    link: "https://github.com/anniop/LinkVault.git",
  },
  {
    id: 3,
    title: "Virtual File System",
    des: "A C-based virtual file system that mimics real-world file system operations, enabling efficient file storage and retrieval.",
    img: "/vfs.png",
    iconLists: ["/c.svg"],
    link: "https://github.com/anniop/Virtual-File-System.git",
  },
  {
    id: 4,
    title: "Zentry Recreation",
    des: "A Accurate Recreation of a Website called Zentry.com",
    img: "/zentry.png",
    iconLists: ["/ts.svg", "tail.svg", "re.svg"],
    link: "https://github.com/anniop/Zentry-Clone.git",
  },
];

export const skills = [
  {
    id: 1,
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "/java.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "C", icon: "/c.svg" },
      { name: "C++", icon: "/cpp.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Go", icon: "/golang.svg" },
    ],
  },
  {
    id: 2,
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "/re.svg" },
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "Express.js", icon: "/expressjs.svg" },
      { name: "Node.js", icon: "/nodejs.svg" },
    ],
  },
  {
    id: 3,
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "/mongodb.svg" },
      { name: "PostgreSQL", icon: "/Postgresql.svg" },
      { name: "MySQL", icon: "/mysql.svg" },
    ],
  },
  {
    id: 4,
    title: "Other Tools",
    skills: [
      { name: "Docker", icon: "/dock.svg" },
      { name: "GitHub", icon: "/git.svg" },
      { name: "Git", icon: "/Git.svg" },
      { name: "Linux", icon: "/linux.svg" },
    ],
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Backend Developer Intern",
    desc: "Worked as a Backend Developer at Unimind-Cognition, building robust server-side applications, automating deployment processes, and ensuring system scalability and reliability.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg", // Replace with your company's logo
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/anniop",  // Replace with your actual GitHub profile URL
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/Ann_i0p",  // Replace with your actual Twitter profile URL
  },
  {
    id: 3,
    img: "/link.svg",
    url: "www.linkedin.com/in/aniket-mogal-9b9b4a1b9",  // Replace with your actual LinkedIn profile URL
  },
];


