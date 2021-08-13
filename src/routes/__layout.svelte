<script>
    import '../app.css'

    import Header from '$lib/Header/index.svelte'
    import Footer from '$lib/Footer/index.svelte'
    import Banner from '$lib/Banner/index.svelte'
</script>

<div class="layout">
    <Header />

    <Banner html="<p>Introducing <b>startmc.sh v2</b> - enjoy the new script types and updated design! <a target='_blank' href='https://github.com/startmc/startmc.sh/pull/9'>Read more here</a>."/>

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
        justify-content: center;
    }

    .layout-content {
        width: 60vw;
        padding: 1em;
        margin: 1em;
        flex: 1;
    }

    @media screen and (max-width: 640px) {
        .layout-content {
            width: 100%;
        }
    }
</style>