<script>
    import StepCard from '$lib/StepCard/index.svelte'
    import Script from '$lib/Script/index.svelte'

    import { session } from '$app/stores'
    console.log($session)

    function handleKeydown(event) {
        console.log(event)
    }
</script>

<svelte:window on:keydown={handleKeydown} />

<StepCard title="💾 Generate your start command">
    <Script />
    <p class="subtext">These descriptions only intend to provide a surface level understanding of the flag and its effects on Minecraft. For more information on specific flags, please refer to your JVM's documentation.</p>
</StepCard>

<style>
    .command-container {
        background-color: white;
    }

    .subtext {
        padding-left: 20em;
        padding-right: 20em;
    }
</style>