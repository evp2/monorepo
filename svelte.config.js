import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		alias: {
			$lib: 'src/lib',
		},
		adapter: adapter({
			prerender: { entries: [] },
			fallback: "index.html",
		}),
	}
};

export default config;
