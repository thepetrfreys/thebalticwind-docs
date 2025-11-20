// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://thepetrfreys.github.io',      // корень GitHub Pages
  base: '/thebalticwind-docs',                 // имя репозитория
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
            { label: 'Example Guide', slug: 'guides/example' },
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

