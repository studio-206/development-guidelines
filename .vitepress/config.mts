import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Development Guidelines",
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
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
