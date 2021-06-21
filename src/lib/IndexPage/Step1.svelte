<script>
    import StepCard from '$lib/StepCard/index.svelte'
</script>

<StepCard title="📝 Enter your server's details">
        <form class="form" id="serverForm">
            <div class="form-section">
                <label class="label" for="filename"><strong>.jar file</strong></label>
                <input name="filename" id="filename" class="input" type="text" placeholder="server.jar">
            </div>
            <div class="form-section">
                <label class="label" for="ram"><strong>RAM allocation</strong></label>
                <input name="ram" id="ram" class="input" type="text" placeholder="10G, 2048M">
            </div>
            <div class="form-section">
                <label class="label" for="pterodactyl"><strong>Pterodactyl Panel</strong></label>
                <div class="checkbox-container">
                    <input name="pterodactyl" id="pterodactyl" type="checkbox">
                    <p class="subtext">This checkbox fixes an out-of-memory error when using these flags with Pterodactyl when checked.</p>
                </div>
            </div>
        </form>
</StepCard>

<style>
    .form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0.2em;
    }

    .form-section {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-inline: 1em;
        margin-bottom: 1em;
    }

    .label {
        font-size: 1.25rem;
    }

    .input {
        margin: 0.3em 0;
        border: 1px solid rgb(170, 170, 170);
        border-radius: 0.2em;
        padding: 0.3em;
        font-size: 1em;
    }

    .checkbox-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .checkbox-container input {
        margin: 0.3em 0;
        border: 1px solid rgb(170, 170, 170);
        border-radius: 0.2em;
        padding: 0.3em;
        font-size: 1em;
    }

    .input:focus {
        border: 1px solid var(--bg-light-alt)
    }
</style>