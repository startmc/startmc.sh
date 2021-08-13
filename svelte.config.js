import adapter from '@sveltejs/adapter-node'

const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#app',
        vite: {
            optimizeDeps: {
                include: ["highlight.js/lib/core"],
            },
        },
        adapter: adapter()
    }
}

export default config;
