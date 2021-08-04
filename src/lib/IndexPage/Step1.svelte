<script>
    import StepCard from '$lib/StepCard/index.svelte'
    import scripts from '../scripts'

    let filename;
    let ram;
    let os;
    let type = "basic";
    let flags = "aikar";
    let pterodactyl;
</script>

<StepCard title="📝 Configure">
    <form class="form" id="serverForm" autocomplete="off" method="POST">
        <div class="form-column">
            <h3 class="column-title">Server details</h3>
            <div class="form-element">
                <div class="form-element-row option-container">
                    <label for="filename">Server filename</label>
                    <input name="filename" class="option" id="filename" type="text" placeholder="server.jar">
                </div>
                <div class="form-element-row">
                    <p class="subtext">The name of your server's .jar file.</p>
                </div>
            </div>

            <div class="form-element">
                <div class="form-element-row option-container">
                    <label for="ram">RAM amount</label>
                    <input class="option" name="ram" id="ram" type="text" placeholder="1500M">
                </div>
                <div class="form-element-row">
                    <p class="subtext">How much RAM to allocate to the server (Measured in megabytes, should end in
                        '<strong>M</strong>').</p>
                </div>
            </div>
        </div>
        <div class="form-column">
            <h3 class="column-title">Script settings</h3>
            <div class="form-element">
                <div class="form-element-row option-container">
                    <label for="os">Operating System</label>
                    <select class="option" id="os" name="os">
                        <option value="linux">Linux</option>
                        <option value="windows">Windows</option>
                    </select>
                </div>
                <div class="form-element-row">
                    <p class="subtext">The operating system of the computer running your server. Not sure? Choose
                        '<strong>Linux</strong>'.</p>
                </div>
            </div>
            <div class="form-element">
                <div class="form-element-row option-container">
                    <label for="type">Script type</label>
                    <select class="option" id="type" name="type" bind:value={type}>
                        {#each Object.keys(scripts.types) as scriptType}
                            <option value="{scriptType}">{scripts.types[scriptType].name}</option>
                        {/each}
                    </select>
                </div>
                <div class="form-element-row">
                    <p class="subtext">{scripts.types[type].description}</p>
                </div>
            </div>
            <div class="form-element">
                <div class="form-element-row option-container">
                    <label for="type">Flag type</label>
                    <select class="option" id="flags" name="flags" bind:value={flags}>
                        {#each Object.keys(scripts.flags) as flagType}
                            <option value="{flagType}">{scripts.flags[flagType].name}</option>
                        {/each}
                    </select>
                </div>
                <div class="form-element-row">
                    <p class="subtext">{scripts.flags[flags].description}</p>
                </div>
            </div>
        </div>
        <div class="form-column">
            <h3 class="column-title">Optional values</h3>
            <div class="form-element">
                <div class="form-element-row option-container">
                    <label for="pterodactyl">Pterodactyl Panel</label>
                    <input id="pterodactyl" name="pterodactyl" type="checkbox" value="true">
                </div>
                <div class="form-element-row">
                    <p class="subtext">Improves compatibility with the Pterodactyl panel.</p>
                </div>
            </div>
        </div>
    </form>
</StepCard>

<style>
    .form {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .form-column {
        display: flex;
        flex-direction: column;
        flex: 1;
        max-width: 25em;
        margin-left: 1em;
        margin-right: 1em;
    }

    .option {
        min-width: 10em;
    }

    .form-element {
        display: flex;
        flex-direction: column;
    }

    .form-element-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex: 1;
    }

    .option-container {
        padding-bottom: 0.4em;
        border-bottom: solid #b6b6b6 1px;
    }

    .subtext {
        margin: 0;
        padding: 0.2em 0 1em 0;
        font-size: 0.9rem;
    }

    .column-title {
        font-size: 1.4em;
        /*font-style: italic;*/
        font-weight: normal;
        padding: 0;
        margin: 0;
        margin-bottom: 0.5em;
    }

    label {
        font-weight: bold;
    }
</style>