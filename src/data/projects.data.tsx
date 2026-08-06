import project1 from "@/assets/project-1.webp";
import project2 from "@/assets/project-2.webp";
import project3 from "@/assets/project-3.webp";
import project4 from "@/assets/project-4.webp";
import project5 from "@/assets/project-5.webp";
import project6 from "@/assets/project-6.webp";
import project7 from "@/assets/project-7.webp";

export const projects = [
  {
    n: "01",
    img: project1,
    title: "Portfolio-2.0",
    cat: "Landing Page",
    description:
      "Modern personal portfolio built with React, TypeScript, Tailwind CSS and Framer Motion. Featuring TanStack Router, responsive UI, CI/CD automation, and modern development practices to showcase full-stack projects, scalable architectures, cloud infrastructure and DevOps experience.",
    link: "https://aanttrax.github.io/portfolio-2.0/",
  },
  {
    n: "02",
    img: project2,
    title: "Portfolio-1.0",
    cat: "Landing Page",
    description:
      'This is a portfolio project built with Angular 18. It incorporates the 3D library "Three.js" and leverages the latest features of Angular. Additionally, the project implements CI/CD pipelines using GitHub Actions, incorporating tools like Husky and lint-staged to enforce code quality through pre-commit hooks and staged file linting',
    link: "https://aanttrax.github.io/portfolio/",
  },
  {
    n: "03",
    img: project3,
    title: "Task App",
    cat: "Task Tracker",
    description:
      "This task project is built with Angular 19 and demonstrates a fully functional task management system with user authentication. Users can create, update, and delete tasks through a modern and intuitive interface, while login and registration features ensure secure access. The system is architected using microservices, including ms-auth for authentication, ms-task for task management, and an orchestrator to coordinate interactions between services. Additionally, the project integrates CI/CD pipelines using GitHub Actions. Code quality is enforced through Husky and lint-staged pre-commit hooks. Deployed on GitHub Pages.",
    link: "https://aanttrax.github.io/task-app/",
  },
  {
    n: "04",
    img: project4,
    title: "Rick and Morty Angular App",
    cat: "Landing Page",
    description:
      'This is a sample project that uses Angular 16 to display information about the "Rick and Morty" TV series. The project utilizes the public [Rick and Morty API](https://rickandmortyapi.com/).',
    link: "https://bright-frangollo-70b51c.netlify.app/characters-list",
  },
  {
    n: "05",
    img: project5,
    title: "orchestrator",
    cat: "Api Gateway",
    description:
      "This repository is an orchestrator coordinating two microservices: one for user authentication (Auth) and another for task management with CRUD functionalities. It is built using TypeScript for maintainability, Axios for HTTP requests, and employs a CI/CD pipeline with GitHub Actions. The Docker images are published to the GitHub Container Registry (GHCR), ensuring seamless deployment and distribution.",
    link: "https://github.com/Aanttrax/orchestrator",
  },
  {
    n: "06",
    img: project6,
    title: "ms-tasks",
    cat: "Api-CRUD",
    description:
      "Task Management Microservice crafted with TypeScript, Express.js, and MongoDB, delivering efficient CRUD operations through intuitive REST APIs. Designed with scalability in mind, it features a modern, strongly-typed codebase and seamless MongoDB integration using Mongoose. The project also includes a fully automated CI/CD pipeline.",
    link: "https://github.com/Aanttrax/ms-tasks",
  },
  {
    n: "07",
    img: project7,
    title: "ms-auth",
    cat: "Api-Authentication",
    description:
      "A secure and scalable authentication microservice built with TypeScript, Express, and MongoDB. This project implements robust features such as user registration, login, token-based authentication with JWT, and password hashing using bcrypt. The project also includes a fully automated CI/CD pipeline.",
    link: "https://github.com/Aanttrax/ms-auth",
  },
];
