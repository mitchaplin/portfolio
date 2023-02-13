import { kebabCase } from "./utils";

type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Resume",
    path: "/resume",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/mitchaplin",
          icon: "/static/icons/github.png",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com",
          icon: "/static/icons/linkedin.png",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:mitchaplin@gmail.com",
          icon: "/static/icons/mail.png",
          leavesWebsite: true,
        },
      ],
    },
  ],
};

export type Language = {
  title: string;
  icon: string;
  style?: object;
};

export type Technology = {
  title: string;
  icon: string;
  style?: object;
};

export const languages: Language[] = [
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "Clojure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/clojure/clojure-original.svg",
  },
  {
    title: "NextJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    title: "Native",
    icon: "/static/icons/reactnative.png",
  },
  {
    title: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/postgresql/postgresql-original-wordmark.svg",
  },
  {
    title: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "Groovy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/groovy/groovy-original.svg",
  },
  {
    title: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  {
    title: "MaterialUI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/materialui/materialui-original.svg",
  },
];

export const technologies: Technology[] = [
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/docker/docker-original-wordmark.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    title: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/express/express-original-wordmark.svg",
  },
  {
    title: "Prisma",
    icon: "/static/icons/prisma.svg",
  },
  {
    title: "Jira",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/jira/jira-plain-wordmark.svg",
  },
  {
    title: "Github",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/github/github-original.svg",
  },
  {
    title: "Gitlab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/gitlab/gitlab-plain-wordmark.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    title: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    title: "VSCode",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/vscode/vscode-original-wordmark.svg",
  },
  {
    title: "IntelliJ",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/intellij/intellij-original.svg",
  },
];

export type Project = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link?: string;
  role?: "author" | "contributor";
  github?: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 0,
    title: "My Personal Portfolio",
    desc: "You're here! My personal portfolio",
    img: "/static/images/folio.png",
    link: "https://mitchaplin.dev",
    role: "author",
    github: "https://github.com/mitchaplin/portfolio",
    tags: ["NextJS", "React", "Typescript", "Javascript", "Tailwind", "Git"],
  },
  {
    id: 1,
    title: "Recollection",
    desc: "A flash card app for learning",
    img: "/static/images/recollection.png",
    link: "https://recollection.mitchaplin.dev",
    role: "author",
    github: "https://github.com/mitchaplin/recollection",
    tags: [
      "NextJS",
      "React",
      "Typescript",
      "Tailwind",
      "tRPC",
      "Prisma",
      "Postgres",
      "T3-App",
      "Git",
    ],
  },
  {
    id: 2,
    title: "Challenges",
    desc: "A home base for Front end related challenges",
    img: "/static/images/challenges.png",
    link: "https://challenges.mitchaplin.dev",
    role: "author",
    github: "https://github.com/mitchaplin/frontend-challenges",
    tags: ["NextJS", "React", "Typescript", "Tailwind", "Git"],
  },
  {
    id: 3,
    title: "Soft Rain - Weather App",
    desc: "A weather app leveraging OpenWeatherApi",
    img: "/static/images/soft-rain-ss.png",
    link: "https://rain.mitchaplin.dev",
    role: "author",
    github: "https://github.com/mitchaplin/soft-rain",
    tags: [
      "React",
      "Typescript",
      "Javascript",
      "Mantine UI",
      "Google Places",
      "Firebase",
      "React Query",
      "React Charts",
      "Git",
    ],
  },
  {
    id: 4,
    title: "Advent of Code - Clojure",
    desc: "AoC solutions spanning several years; Crafted in Clojure",
    img: "/static/images/advent-of-code.png",
    role: "author",
    github: "https://github.com/mitchaplin/advent-of-code-clojure",
    tags: ["Clojure", "Git"],
  },
  {
    id: 5,
    title: "Advent of Code - Javascript",
    desc: "AoC solutions spanning several years; Crafted in Javascript",
    img: "/static/images/advent-of-code-2.png",
    role: "author",
    github: "https://github.com/mitchaplin/advent-of-code-js",
    tags: ["Javascript", "Git"],
  },
  {
    id: 6,
    title: "Doggo Sports",
    desc: "The ultimate all-in-one resource for dog sports lovers",
    img: "/static/images/doggo-ss.png",
    role: "contributor",
    link: "https://doggosports.com",
    tags: [
      "React",
      "Typescript",
      "Javascript",
      "Mantine UI",
      "Stripe API",
      "PlanetScale",
      "tRPC",
      "Prisma",
      "Vercel CLI",
      "Git",
    ],
  },
];

export const tags: string[] = [];

projects.forEach((project: Project) => {
  project.tags.map((tag: string) => !tags.includes(tag) && tags.push(tag));
});

export const allKebabTags = tags.map((tag) => kebabCase(tag));

export default projects;
