<script>
    import StepCard from '$lib/StepCard/index.svelte'
    import ScriptView from '$lib/Script/index.svelte'

    import {session} from '$app/stores'

    let filename = $session.server.filename;

    let ram = $session.server.ram;
    let flagType = $session.server.flagType;
    let scriptType = $session.server.scriptType;
    let os;
    let loaded = !!(filename && ram);

    function updateValues(event) {
        ram = document.getElementById("ram").value
        filename = document.getElementById("filename").value
        flagType = document.getElementById("flags").value
        scriptType = document.getElementById("type").value
        loaded = !!(filename && ram);
    }
</script>

<svelte:window on:mousedown={updateValues} on:keydown={updateValues} on:keyup={updateValues} on:load={updateValues}/>

<StepCard title="💾 Generate">
    <ScriptView bind:filename bind:ram bind:loaded bind:scriptType bind:flagType bind:os />
    <!--{#if loaded}-->
    <!--    <p>These descriptions only intend to provide a quick understanding of the flag and its effects on-->
    <!--        Minecraft. For more information on specific scripts, please refer to your JVM's documentation.</p>-->
    <!--{/if}-->
</StepCard>
