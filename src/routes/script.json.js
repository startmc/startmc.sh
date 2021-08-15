import scripts from "$lib/scripts";

export const get = async (req) => {
    // This could be done quite a lot better, but I will have to revisit at a later date
    // TODO fix
    const filename = req.query.get("filename")
    const ram = req.query.get("ram")
    const type = req.query.get("type")
    const flags = req.query.get("flags")
    const java = 'java'

    if (!filename) {
        return {
            body: {
                error: "missing filename"
            }
        }
    }

    if (!ram) {
        return {
            body: {
                error: "missing ram"
            }

        }
    }

    if (!type) {
        return {
            body: {
                error: "missing type"
            }
        }
    }

    if (!flags) {
        return {
            body: {
                error: "missing flags"
            }
        }
    }

    const flagText = `${Object.keys(scripts.flags[flags].template).join(' ')}`

    const scriptText = scripts.types[type].template
        .replace("@java@", java)
        .replace("@filename@", filename)
        .replace("@ram@", ram)
        .replace("@flags@", flagText)


    return {
        body: {
            script: {
                scriptText
            }
        }
    }
}