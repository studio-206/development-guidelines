import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Studio 206",
  description: "Studio 206 Development Guidelines",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Images", link: "/images" },
          { text: "Importing Modules", link: "/importing-modules" },
        ],
      },
      {
        text: "Git, branches & PR's",
        items: [
          { text: "Branching", link: "/git/branching" },
          { text: "Commits", link: "/git/commits" },
        ],
      },
      {
        text: "Create 206 App",
        link: "/create-206-app",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
