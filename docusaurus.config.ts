import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Billy Docs',
  tagline: '2026–2028 AI Infrastructure Investment Framework',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'http://localhost',
  baseUrl: '/',

  organizationName: 'cyruscheung',
  projectName: 'ai-infra-notes',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Make docs the root of the site (no /docs/ prefix)
          routeBasePath: '/',
          // Convert GitHub-style > [!NOTE] admonitions to Docusaurus :::note format
          remarkPlugins: [
            // eslint-disable-next-line @typescript-eslint/no-require-imports
            [require('remark-github-admonitions-to-directives'), {}],
          ],
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Billy Docs',
      logo: {
        alt: 'Billy Docs',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'aiInfraSidebar',
          position: 'left',
          label: 'Stock',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} AI 基建研究筆記 · 僅供個人研究參考，不構成任何投資建議。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
