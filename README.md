# startmc.sh

A simple site to generate startup files for your Minecraft server.

## API

`/scripts.json` provides an endpoint to generate scripts without needing to interact with the web interface.

This endpoint requires the following query parameters:
- `filename`
- `ram`
- `flags`
- `type`

`flags` and `type` can be found by going to the [scripts.js](https://github.com/startmc/startmc.sh/blob/master/src/lib/scripts.js) file.

If any of these fields are missing, the endpoint will return a response like this:

```json
{
  "error": "missing filename/ram/flags/type"
}
```

If all fields are present, the endpoint will return the script:

```json
{
  "script": {
    "scriptText": "#!/bin/bash\n\nJAVA=\"java\"\nJAR=\"server.jar\"\nRAM=\"10M\"\nFLAGS=\"-XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Daikars.new.flags=true -Dusing.aikars.flags=https://mcflags.emc.gs\"\n\necho \"Starting server...\"\n${JAVA} -Xmx${RAM} -Xms${RAM} ${FLAGS} -jar ${JAR} --nogui"
  }
}
```

Example usage: `https://startmc.sh/script.json?ram=10M&filename=server.jar&flags=aikar&type=basic`