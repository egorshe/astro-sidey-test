// sidey.config.ts

export const sideyConfig = {
  site: {
    title: "Odhy Pradhana",
    description: "Minimalist personal log and digital garden.",
    url: "https://odhyp.com",
    author: "Odhy Pradhana",
    locale: "en",
  },
  layout: {
    postsPerPage: 10,
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Writings", href: "/writings" },
    { label: "About", href: "/about" },
    { label: "RSS", href: "/rss.xml" },
  ],
}

export type SideyConfigType = typeof sideyConfig
