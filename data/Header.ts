type NavItem = {
  name: string;
  href: string;
};

export const HeaderData: { navs: NavItem[] } = {
  navs: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
};
