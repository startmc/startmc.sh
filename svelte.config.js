import adapter from '@sveltejs/adapter-node'

const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#app',
        adapter: adapter()
    }
}

export default config;
