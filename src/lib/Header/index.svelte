<header class="header">
    <div class="header-layout">
        <div class="logo-container">
            <img class="logo" src="/logo.png"  alt="The beautiful startmc.sh logo." />
        </div>
        <div class="text-container">
            <h1 class="title font-mono">startmc.sh</h1>
            <p class="tagline">Start your server today!</p>
        </div>
    </div>
</header>

<style>
    .header {
        padding: 1em;
        background-color: var(--bg-light);
        width: 100%;
        height: min-content;

        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .header-layout {
        display: flex;
        flex-direction: row;
        width: 70vw;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .title {
        font-size: 2rem;
        margin: 0;
    }

    .tagline {
        font-size: 1.5rem;
        margin: 0;
    }

    .logo {
        max-width: 7em;
        margin-right: 2rem;
    }

    @media screen and (max-width: 640px) {
        .logo-container, .logo, .tagline {
            visibility: hidden;
            height: 0;
            width: 0;
        }

        .footer-layout {
            width: 100%;
        }
    }
</style>