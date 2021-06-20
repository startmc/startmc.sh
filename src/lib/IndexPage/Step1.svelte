<script>
    import StepCard from '$lib/StepCard/index.svelte'
</script>

<StepCard title="📝 Enter your server's details">
    <div class="forms">
        <form class="form">
            <label class="label" for="filename">Your server's .jar filename</label>
            <input id="filename" class="input" type="text" placeholder="server.jar">
            <p class="help help-filename"><small>You might be missing '.jar'</small></p>
        </form>
        <form class="form">
            <label class="label" for="ram">RAM allocation</label>
            <input id="ram" class="input" type="text" placeholder="10G, 2048M">
            <p class="help help-ram"><small>You might be missing the memory size. M = megabytes, G = gigabytes.</small></p>
        </form>
    </div>
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