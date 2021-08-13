<script>
    export let html;
</script>

<div class="banner-container">
    <div class="banner-content">
        {@html html}
    </div>
</div>

<style>
    .banner-container {
        background-color: rgb(108, 108, 108);
        width: 100%;
        color: #ece4e4;
        display: flex;
        justify-content: center;
    }

    .banner-content {
        text-align: center;
        max-width: 20em;
    }

    p {
        margin-top: 0.05em;
        margin-bottom: 0.05em;
        padding: 0;
    }
</style>