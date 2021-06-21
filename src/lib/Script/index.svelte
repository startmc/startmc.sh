<script>
    import flags from '../flags'

    /**
     * If this is true, the component will show the script.
     * If this is false, the component will display the waiting for input text.
     */
    export let loaded = false;

    /**
     * The amount of ram to give the -Xmx flag.
     */
    export let ramXmx;

    /**
     * The amount of ram to give the -Xms flag.
     */
    export let ramXms;

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

    const flagText = Object.keys(flags).join(' ')

    $: scriptText = `${javaPath} -jar ${filename} -Xmx${ramXmx} -Xms${ramXms} ${flagText}`
</script>

<div class="script-container">
    {#if loaded}
        <p class="script-light">{scriptText}</p>
    {:else}
        <p class="script-light">Waiting for input... (Not working? Hit '<input type="submit" formmethod="post" class="button" value="Generate" form="serverForm">')</p>
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
        font-family: 'Roboto Mono', monospace;
        padding: 0.1em;
        border: none;
    }
</style>