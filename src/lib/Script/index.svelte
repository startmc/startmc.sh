<script>
    /**
     * The amount of ram to give the --Xmx flag.
     */
    export let ramXmx;

    /**
     * The amount of ram to give the --Xms flag.
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
</script>

<div class="script-container">
    <p>java -jar {filename}</p>
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
</style>