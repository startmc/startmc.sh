<script>
    import StepCard from '$lib/StepCard/index.svelte'
</script>

<StepCard title="💾 Generate your start script">
</StepCard>

<style>
    .forms {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.2em;
    }

    .form {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-inline: 1em;
    }

    .input {
        margin: 0.3em 0;
        border: 1px solid rgb(170, 170, 170);
        border-radius: 0.2em;
        padding: 0.3em;
        font-size: 1em;
    }

    .input:focus {
        border: 1px solid var(--bg-light-alt)
    }

    .help {
        margin: 0;
    }
</style>