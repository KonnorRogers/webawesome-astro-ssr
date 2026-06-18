// @ts-check
import { defineConfig } from 'astro/config';

import lit from '@awesome.me/astro-lit';
// // @ts-expect-error
// import lit from "@semantic-ui/astro-lit"


// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [lit()],
});
