<script>
    export let title;
</script>

<section class="card">
    <div class="card-header">
        <h2 class="card-title">{ title }</h2>
    </div>
    <div class="card-content">
        <slot />
    </div>
</section>

<style>
    .card {
        padding: 1em;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: var(--bg-light-alt);
        position: relative;
        margin-bottom: 2em;
        border-radius: 0.3em;
        border: 1px #989898 solid;
    }

    .card-header {
        margin-bottom: 1em;
    }

    .card-title {
        margin: 0;
        font-weight: normal;
    }
</style>