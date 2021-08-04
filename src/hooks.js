
/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
    console.log(request)

    let filename = "server.jar"
    let ram = ""
    let pterodactyl = "off"
    let scriptType = "basic"
    let flagType = "aikar"
    let os = "linux"

    if (request.body) {
        filename = request.body?.get("filename")
        ram = request.body?.get("ram")
        pterodactyl = request.body?.get("pterodactyl")
        os = request.body?.get("os")
        flagType = request.body?.get("flags")
        scriptType = request.body?.get("type")
    }

    let server = {
        filename,
        ram,
        pterodactyl,
        scriptType,
        flagType,
        os
    }

    console.log(server);

    return {server};
}