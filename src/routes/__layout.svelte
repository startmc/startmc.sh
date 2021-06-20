<script>
    import '../app.css'

    import Header from '$lib/Header/index.svelte'
    import Footer from '$lib/Footer/index.svelte'
</script>

<div class="layout">
    <Header />

    <div class="layout-content">
        <slot></slot>
    </div>

    <Footer />
</div>

<style>
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        align-items: center;
    }

    .layout-content {
        margin-top: 5em;
        flex: 1;
    }
</style>