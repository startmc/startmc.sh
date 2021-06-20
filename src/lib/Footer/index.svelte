<header class="footer">
    <div class="footer-layout">
        <ul class="list">
            <li class="list-text"><a>aber</a> 🤝 <a>blue</a></li>
            <li class="list-text"><a href="https://github.com/startmc/startmc.sh">⭐ on github</a></li>
            <li class="list-text"><a href="https://chat.ksc.sh/">💬 on discord</a></li>
        </ul>
    </div>
</header>

<style>
    .footer {
        background-color: var(--bg-dark);
        width: 100%;
        height: min-content;

        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .footer-layout {
        display: flex;
        flex-direction: row;
        width: 60vw;
    }

    .list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .list-text {
        list-style: none;
        color: var(--text-light);
    }

    .list-text + .list-text:before {
        content: '\ffed';
        margin-left: 1em;
        margin-right: 1em;
    }
</style>