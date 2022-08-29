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
          link: "mailto:contact@mitchaplin@gmail.com",
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