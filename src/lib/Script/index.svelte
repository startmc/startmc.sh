<script>
    import flags from '../flags'

    /**
     * If this is true, the component will show the script.
     * If this is false, the component will display the waiting for input text.
     */
    export let loaded = false;

    /**
     * The amount of ram to give the -Xms and -Xmx flags.
     */
    export let ram;

    /**
     * Java's path.
     */
    export let javaPath = "java";

    /**
     * The name of the server's file.
     */
    export let filename;

    /**
     * Is the script for use with Pterodactyl?
     */
    export let pterodactyl;

    $: flagText = `${Object.keys(flags).join(' ')} ${pterodactyl ? "-XX:+AlwaysPreTouch" : ""}`

    $: scriptText = `${javaPath} -jar ${filename} -Xmx${ram} -Xms${ram} ${flagText} --nogui`
</script>

<div class="script-container">
    {#if loaded}
        <p class="script-light">{scriptText}</p>
    {:else}
        <p class="script-light">Waiting for input... (Not working? Hit <input type="submit" formmethod="post" class="button" value="generate" form="serverForm">.)</p>
    {/if}
</div>

<style>
    .script-container {
        background-color: white;
    }

    p {
        font-family: 'Roboto Mono', monospace;
        font-weight: 400;
        padding: 0.4em;
    }

    .script-light {
        color: #4c4c4c;
        line-height: 2em;
        font-size: 1.05em;
    }

    .button {
        font-size: 1em;
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
        font-weight: 600;
        background-color: transparent;
        text-decoration: underline;
        border: none;
    }

    .button:hover {
        cursor: pointer;
    }
</style>