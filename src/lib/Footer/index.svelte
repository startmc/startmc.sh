<footer class="footer">
    <div class="footer-layout">
        <ul class="list">
            <li class="list-text"><a href="https://tadhg.sh/">aber</a> 🤝 <a href="https://kaden.sh">blue</a></li>
            <li class="list-text"><a href="https://github.com/startmc/startmc.sh">⭐ on github</a></li>
            <li class="list-text"><a href="https://chat.ksc.sh/">💬 on discord</a></li>
        </ul>
    </div>
</footer>

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
        padding: 0;
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

    @media screen and (max-width: 640px) {
        .list {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .list-text + .list-text:before {
            content: none;
            margin: 0;
        }

        .list-text {
            border-bottom: gray 1px solid;
            padding-bottom: 0.5em;
            padding-top: 0.5em;
        }

        .list-text:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        .list-text:first-child {
            padding-top: 0;
        }
    }
</style>