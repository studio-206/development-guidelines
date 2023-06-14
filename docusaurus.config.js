// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Studio 206 Development Guidelines",
  tagline: "Development Guidelines for Studio 206",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://guidelines.studio206.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "studio206", // Usually your GitHub org/user name.
  projectName: "development-guidelines", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        blog: false, // disable the blog.
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: "img/social-card.jpg",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Development Guidelines",
        logo: {
          alt: "Studio 206",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            href: "https://github.com/studio-206/development-guidelines",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        // links: [
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Stack Overflow",
        //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //       },
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Built with Docusaurus by everyone at Studio 206 😊`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
