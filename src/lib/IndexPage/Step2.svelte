<script>
    import StepCard from '$lib/StepCard/index.svelte'
    import ScriptView from '$lib/Script/index.svelte'

    import {session} from '$app/stores'

    let filename = $session.server.filename;

    let ram = $session.server.ram;
    let pterodactyl = $session.server.pterodactyl;
    let loaded = !!(filename && ram);

    function handleKeyPress(event) {

        pterodactyl = document.getElementById("pterodactyl").checked
        ram = document.getElementById("ram").value
        filename = document.getElementById("filename").value
        loaded = !!(filename && ram);

    }
</script>

<svelte:window on:keyup={handleKeyPress} on:load={handleKeyPress}/>

<StepCard title="💾 Generate your start command">
    <ScriptView bind:filename={filename} bind:ramXmx={ram} bind:ramXms={ram} bind:pterodactyl={pterodactyl} bind:loaded="{loaded}"/>
    <p class="subtext">These descriptions only intend to provide a quick understanding of the flag and its effects on
        Minecraft. For more information on specific flags, please refer to your JVM's documentation.</p>
</StepCard>

<style>
    .subtext {
        padding-left: 1em;
        padding-right: 1em;
    }
</style>