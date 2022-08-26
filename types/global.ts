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
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
      ],
    },
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
          link: "https://www.linkedin.com/in/mitchaplin/",
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
