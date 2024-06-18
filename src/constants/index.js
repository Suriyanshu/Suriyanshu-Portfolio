import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/p1.jpg";
import project6 from "../assets/projects/p2.jpg";
import project7 from "../assets/projects/p4.jpg";
import project8 from "../assets/projects/p5.jpg";

export const HERO_CONTENT = `I am an AWS and Oracle Certified Cloud Solution Architect Associate with a knack for crafting sophisticated solutions of exceptional quality. I have honed my skills with technologies such as AWS services, Terraform, Jenkins, Ansible, Docker, and PostgreSQL. My goal is to leverage my expertise to create innovative and scalable solutions that drive business growth and deliver exceptional user experiences.`;
export const ABOUT_TEXT = `I hold certifications as an AWS Certified Solutions Architect Associate and Oracle Cloud Infrastructure Associate, demonstrating my expertise in cloud technologies and DevOps.Currently serving as an AWS Cloud Engineer at Logile, I possess extensive experience with a diverse array of tools including AWS services, Docker, Terraform, Ansible, Jenkins, and PostgreSQL.
My professional journey is defined by a commitment to collaborative problem-solving, where I excel in delivering sophisticated solutions of exceptional quality.Beyond cloud computing, my keen interest extends to Generative AI and large-scale language models, reflecting a deep-seated passion for cutting-edge technologies.Furthermore, my achievements transcend the realm of technology, as evidenced by my accolades as the 11th ranked state-level Badminton player and multiple tournament victories in FPS games.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "AWS Cloud Engineer",
    company: "Logile Inc.",
    description: `Designed architecture of the cloud infrastructure. Developed comprehensive Terraform scripts for all regions, ensuring alignment with specified configurations. Also included the seamless importation of existing infrastructure configurations and the strategic storage of state files in S3 for optimal management and security. Additionally, leveraged Ansible to automate the deployment and management of cloud infrastructure, significantly enhancing efficiency and reliability.`,
    technologies: ["AWS", "Ansible", "Terraform", "Docker", "Jenkins", "Git", "Postgres"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Architectural Design and Terraform Implementation",
    image: project1,
    description:
      "Developed a comprehensive AWS architecture and authored Terraform code for seamless deployment and security. Automated instance operations with Lambda, imported existing infrastructure, and managed state files in S3.",
    technologies: ["Terraform", "Gitlab", "AWS S3", "LucidChart"],
  },
  {
    title: "Cloud Infrastructure Automation",
    image: project2,
    description:
      "Developed Ansible playbooks to automate various functionalities through an Ansible master instance, including retrieving artifacts from nodes",
    technologies: ["AWS Services", "AWS ELB","Ansible", "Git", "Jenkins", "PostgreSQL"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Configure webserver and database server with load balancer, Auto Scaling and SSL",
    image: project4,
    description:
      "Configured web and database servers with load balancing, Auto Scaling, and SSL certification. Migrated a web server across AWS regions and an on-premise database to AWS RDS, while setting up connectivity, mounting S3 buckets, and enabling versioning and MFA-delete.",
    technologies: ["AWS", "Linux", "SSL", "ELB"],
  },
  {
    title: "Deployment of WebApp on AWS and Azure",
    image: project5,
    description:
      "Deployed a WebApp on AWS and Azure, ensuring high availability, load balancing, and secure configurations. Implemented seamless integration with cloud services for optimal performance and scalability across both platforms.",
    technologies: ["Streamlit", "Python", "AWS", "Azure"],
  },
  {
    title: "Diabetes Prediction using machine learning",
    image: project6,
    description:
      "Developed a diabetes prediction model using machine learning, leveraging various algorithms to analyze patient data and predict diabetes onset. Implemented and validated the model to ensure high accuracy and reliability in predictions.",
    technologies: ["Python", "Pandas", "Numpy",  "Matplotlib", "TensorFlow", "Scikit-learn"],
  },
  {
    title: "Heart attack analysis and Prediction",
    image: project7,
    description:
      "Developed a machine learning model for heart attack analysis and prediction by analyzing patient data and identifying key risk factors. Implemented and validated the model to ensure high accuracy, providing a reliable tool for early diagnosis and prevention.",
    technologies: ["Python", "Pandas", "Numpy", "Scikit-learn", "Matplotlib",],
  },
  {
    title: "New York City Vehicle Collision Visualization using Streamlit",
    image: project8,
    description:
      "Created a visualization dashboard for New York City vehicle collisions using Streamlit, enabling interactive exploration and analysis of collision data. Utilized Python for data processing, Streamlit for frontend development, and integrated with mapping libraries for geographical representation.",
    technologies: ["Python", "Streamlit", "Git"],
  },
];

export const CONTACT = {
  // address: "767 Fifth Avenue, New York, NY 10153 ",
  Linkedin: "https://www.linkedin.com/in/suriyanshu/",
  email: "suriyanshu72hk@gmail.com",
};
