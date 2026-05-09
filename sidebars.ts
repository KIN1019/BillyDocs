import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  aiInfraSidebar: [
    {
      type: 'category',
      label: 'Stock',
      link: {
        type: 'generated-index',
        title: 'AI 基建投資研究框架',
        description: '2026–2028 AI Infrastructure Investment Research — 涵蓋能源機房、算力、記憶體、存儲、網路光通信、雲平台、配套周邊七大賽道。',
        slug: '/ai-infra',
      },
      items: [
        'ai-infra/master',
        'ai-infra/thematic',
        'ai-infra/7cats',
        'ai-infra/top4',
        'ai-infra/bottleneck',
        'ai-infra/memory-hbm',
        'ai-infra/categories',
      ],
    },
  ],
};

export default sidebars;
