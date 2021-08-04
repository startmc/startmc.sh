
/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
    let filename = "server.jar"
    let ram = ""
    let pterodactyl = "off"

    if (request.body) {
        filename = request.body?.get("filename")
        ram = request.body?.get("ram")
        pterodactyl = request.body?.get("pterodactyl")
    }

    return {
        server: {
            filename,
            ram,
            pterodactyl
        }
    }
}