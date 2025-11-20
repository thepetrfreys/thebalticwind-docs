// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // ВАЖНО: эти две строки
  site: 'https://thepetrfreys.github.io',
  base: '/thebalticwind-docs',

  integrations: [
    starlight({
      title: 'The Baltic Wind Docs',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/thepetrfreys/thebalticwind-docs',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Example Guide', slug: 'guides/example.md' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});

