<script>
    import {Highlight} from "svelte-highlight";
    import scripts from '../scripts'
    import bash from "svelte-highlight/src/languages/bash";
    import github from "svelte-highlight/src/styles/github";
    /**
     * If this is true, the component will show the script.
     * If this is false, the component will display the waiting for input text.
     */
    export let loaded = false;

    /**
     * The amount of ram to give the -Xms and -Xmx scripts.
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

    export let flagType;

    export let scriptType;

    $: flagText = `${Object.keys(scripts.flags[flagType].template).join(' ')}`
    //
    // $: scriptText = `${javaPath} -jar ${filename} -Xmx${ram} -Xms${ram} ${flagText} --nogui`

    $: scriptText = scripts.types[scriptType].template
        .replaceAll("@java@", javaPath)
        .replaceAll("@filename@", filename)
        .replaceAll("@ram@", ram)
        .replaceAll("@flags@", flagText)

    $: link = scripts.download(scripts.types[scriptType].filename, scriptText);
</script>

<svelte:head>
    {@html github}
</svelte:head>

<div class="script-container">
    {#if loaded}
        <p class="script-light">
            <Highlight language={bash} code={scriptText} class="script-light"/>
        </p>
    {:else}
        <p class="script-light">Waiting for input... (Not working? Hit <input type="submit" formmethod="post"
                                                                              class="button" value="generate"
                                                                              form="serverForm">.)</p>
    {/if}
</div>

{#if loaded}
    <span class="download-button">
        {@html link}
    </span>
{/if}

<style>
    .script-container {
        background-color: white;
        border-radius: 0.25em;
        border: 1px #b0b0b0 solid;
        margin-bottom: 1em;
    }

    p {
        font-family: 'Roboto Mono', monospace;
        font-weight: 400;
        padding: 0.4em;
        margin: 0;
    }

    .script-light {
        color: #4c4c4c;
        line-height: 2em;
        font-size: 1.05em;
    }

    :global(code) {
        /*white-space: normal;*/
    }

    :global(pre) {
        line-height: 1.35em !important;
        padding: 0;
        margin: 0;
        white-space: pre-wrap; /* css-3 */
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