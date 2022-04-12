import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: "ko-KR",
  title: "Code or Death",
  description: "to code, or not to code. that is the problem",
  base: "/code-or-death/",

  extendsMarkdown: (md) => {
    const orignalRender = md.render;
    const HEART_EMOJIS = /❤️/g;
    const REPLACER = "&lt3";

    md.render = (src, env) => {
      let sub = orignalRender(src, env);
      return sub.replace(HEART_EMOJIS, REPLACER);
    };
  },

  // theme and its config
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/logo.png",
    home: "/",
    lastUpdated: true,
    repo: "hajun-myoung/code-or-death",
    editLink: false,
    contributors: true,
    notFound: [
      "엘리스가 선명하게 코드를 핥고 있었다",
      "그렇게 모자장수는 카카오로 취업했다",
    ],
    backToHome: "돌아가자...",
    search: true,

    // navigation bar
    navbar: [
      {
        text: "Contributors",
        children: [
          {
            text: "hajun",
            link: "/hajun/",
          },
          {
            text: "byeolhee",
            link: "/byeolhee/",
          },
          {
            text: "kihwan",
            link: "/kihwan/",
          },
          {
            text: "jeonghyun",
            link: "/nliker/",
          },
          {
            text: "jiyu",
            link: "/jiyu/",
          },
          {
            text: "sujeong",
            link: "/sujeong/",
          },
          {
            text: "kyungbeen",
            link: "/kyungbeen/",
          },
        ],
      },
    ],

    sidebar: {
      "/guide/contribute/": ["README.md", "configGuide.md", "docEditGuide.md"],
    },
  },

  plugins: [],
});
