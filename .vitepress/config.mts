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
          { text: "Images", link: "/docs/images" },
          { text: "Importing Modules", link: "/docs/importing-modules" },
        ],
      },
      {
        text: "Styling",
        items: [
          {
            text: "Tailwind CSS",
            link: "/docs/tailwind",
          },
        ],
      },
      {
        text: "Git, branches & PR's",
        items: [
          { text: "Branching", link: "/docs/git/branching" },
          { text: "Commits", link: "/docs/git/commits" },
        ],
      },
      {
        text: "Create 206 App",
        link: "/docs/create-206-app",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
