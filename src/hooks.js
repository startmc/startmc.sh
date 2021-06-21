
/** @type {import('@sveltejs/kit').GetSession} */
export function getSession(request) {
    return {
        server: {
            filename: request.query.get("filename") || "",
            ram: request.query.get("ram") || "",
            pterodactyl: request.query.get("pterodactyl") === "on"
        }
    }
}