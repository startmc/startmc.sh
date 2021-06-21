
/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
    return {
        server: {
            filename: request.body?.get("filename") || "",
            ram: request.body?.get("ram") || "",
            pterodactyl: request.body?.get("pterodactyl") === "on"
        }
    }
}