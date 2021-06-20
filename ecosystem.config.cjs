// this is a .cjs file because PM2 doesn't like this being a module (package.json)

module.exports = {
    apps: [{
        name: "v2.startmc.sh",
        script: "./build/index.js",
        watch: true
    }]
}