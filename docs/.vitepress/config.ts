import { defineConfig } from 'vitepress'

const enSidebar = [
  {
    text: 'Introduction',
    items: [
      { text: 'Home', link: '/' },
      { text: 'Why OTD', link: '/why-otd' },
      { text: 'Principles', link: '/principles' },
    ]
  },
  {
    text: 'Core Concepts',
    items: [
      { text: 'Area', link: '/area' },
      { text: 'Flow', link: '/flow' },
      { text: 'Action', link: '/action' },
      { text: 'Mode', link: '/mode' },
      { text: 'Today & Someday', link: '/today-and-someday' },
      { text: 'Stuck Signals', link: '/stuck' },
      { text: 'Goals', link: '/goals' },
      { text: 'Reference', link: '/reference' },
    ]
  },
  {
    text: 'The 5 Stages',
    items: [
      { text: 'Capture', link: '/capture' },
      { text: 'Process', link: '/process' },
      { text: 'Organize', link: '/organize' },
      { text: 'Review', link: '/review' },
      { text: 'Execute', link: '/execute' },
    ]
  },
  {
    text: 'Guides',
    items: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'GTD to OTD', link: '/gtd-to-otd' },
      { text: 'Examples', link: '/examples' },
      { text: 'FAQ', link: '/faq' },
      { text: 'Implementation', link: '/implementation' },
    ]
  }
]

const koSidebar = [
  {
    text: '소개',
    items: [
      { text: '홈', link: '/ko/' },
      { text: 'OTD를 만든 이유', link: '/ko/why-otd' },
      { text: '원칙', link: '/ko/principles' },
    ]
  },
  {
    text: '핵심 개념',
    items: [
      { text: 'Area', link: '/ko/area' },
      { text: 'Flow', link: '/ko/flow' },
      { text: 'Action', link: '/ko/action' },
      { text: 'Mode', link: '/ko/mode' },
      { text: 'Today & Someday', link: '/ko/today-and-someday' },
      { text: 'Stuck Signals', link: '/ko/stuck' },
      { text: 'Goals', link: '/ko/goals' },
      { text: 'Reference', link: '/ko/reference' },
    ]
  },
  {
    text: '5단계 워크플로우',
    items: [
      { text: '수집', link: '/ko/capture' },
      { text: '처리', link: '/ko/process' },
      { text: '조직화', link: '/ko/organize' },
      { text: '점검', link: '/ko/review' },
      { text: '실행', link: '/ko/execute' },
    ]
  },
  {
    text: '가이드',
    items: [
      { text: '시작하기', link: '/ko/getting-started' },
      { text: 'GTD에서 OTD로', link: '/ko/gtd-to-otd' },
      { text: '실전 예시', link: '/ko/examples' },
      { text: 'FAQ', link: '/ko/faq' },
      { text: '구현 스펙', link: '/ko/implementation' },
    ]
  }
]

export default defineConfig({
  title: 'OTD',
  description: 'Orchestrating Things Done — A personal task management framework for the AI era.',

  sitemap: {
    hostname: 'https://otd.mochaive.com'
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
        sidebar: enSidebar,
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      themeConfig: {
        nav: [
          { text: '홈', link: '/ko/' },
          { text: '시작하기', link: '/ko/getting-started' },
        ],
        sidebar: koSidebar,
      }
    }
  },

  themeConfig: {
    logo: null,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mochaive/otd' }
    ],
    footer: {
      message: 'Released under the open source license.',
      copyright: 'OTD — Orchestrating Things Done'
    },
    search: {
      provider: 'local'
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#1b1b1f' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-W61CMWGQ01' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-W61CMWGQ01');`],
    ['script', { defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "73309c73d38942c2b2fd9069b2869249"}' }]
  ],

})
