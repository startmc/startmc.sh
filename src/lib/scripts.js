// The type of scripts available to startmc.sh.
//
// // Templates
// Templates are used to generate scripts. Templates can use variables in the form of @variableName@.
// Possible variables are:
// @filename@ - the server's filename
// @ram@ - the amount of ram
// @scripts@ - the scripts string
//
const types = {
    basic: {
        name: "Basic",
        description: "A script that simply starts the server when ran.",
        template: `#!/bin/bash

JAVA="@java@"
JAR="@filename@"
RAM="@ram@"
FLAGS="@flags@"

echo "Starting server..."
\${JAVA} -Xmx\${RAM} -Xms\${RAM} \${FLAGS} -jar \${JAR} --nogui`
    },
    basicWindows: {
        name: "Basic (Windows)",
        description: "A script that simply starts the server when ran. Designed to run on Windows.",
        template: `set JAVA=@java@
set JAR=@filename@
set RAM=@ram@
set FLAGS=@flags@

echo Starting server...
%JAVA% -Xmx%RAM% -Xms%RAM% %FLAGS% -jar %JAR% --nogui`
    },
    autorestart: {
        name: "Autorestart",
        description: "A script that will automatically restart the server when it exits.",
        template: `#!/bin/bash

JAVA="@java@"
JAR="@filename@"
RAM="@ram@"
FLAGS="@flags@"

while [ true ]; do
    echo "Starting server..."
    \${JAVA} -Xmx\$ {RAM} -Xms\${RAM} \${FLAGS} -jar \${JAR}  --nogui
    for i in {3..1}; do
        printf 'Server restarting in %s... (press CTRL-C to exit)\\n' "\x${i}"
        sleep 1
    done
done`
    }

}

const flags = {
    "aikar": {
        name: "Aikar's flags",
        template: {
            "-XX:+UseG1GC": "This enables the Java G1 garbage collector.",
            "-XX:+ParallelRefProcEnabled": " Optimizes the garbage collector process to use multiple threads for weak reference checking.",
            "-XX:MaxGCPauseMillis=200": "This tells the JVM to aim for a max garbage collection time of 200 milliseconds. This is useful, because long pauses for garbage collection will interfere with your server's performance.",
            "-XX:+UnlockExperimentalVMOptions": "This enables experimental JVM scripts. Don't worry, these scripts have been created by one of the smartest members of our community, and tested by thousands of servers.",
            "-XX:+DisableExplicitGC": "This disables the System.gc() method call. Plugins may think they are doing something good by explicitly calling the GC, but in this case it is best to leave it up to the JVM.",
            "-XX:+AlwaysPreTouch": "This allocates all of the RAM for the server on startup. Incremental allocations during runtime may impact performance, so this prevents that.",
            "-XX:G1NewSizePercent=30": "This gives the GC more room to breathe, and results in less GC cycles (and thus less lag.)",
            "-XX:G1MaxNewSizePercent=40": "This gives the GC more room to breathe, and results in less GC cycles (and thus less lag.)",
            "-XX:G1HeapRegionSize=8M": "This sends fewer objects to the old gen, which means there will be less time spent cleaning up old gen memory.",
            "-XX:G1ReservePercent=20": "This ensures that there is more space for memory to move around.",
            "-XX:G1HeapWastePercent=5": "Sets the percentage of heap that you are willing to waste. The Java HotSpot VM does not initiate the mixed garbage collection cycle when the reclaimable percentage is less than the heap waste percentage.",
            "-XX:G1MixedGCCountTarget=4": "This instructs the JVM to reclaim old gen ",
            "-XX:InitiatingHeapOccupancyPercent=15": "Sets the Java heap occupancy threshold that triggers a marking cycle. ",
            "-XX:G1MixedGCLiveThresholdPercent=90": "This sends fewer objects to the old gen, which means there will be less time spent cleaning up old gen memory.",
            "-XX:G1RSetUpdatingPauseTimePercent=5": "Reduces GC pause durations.",
            "-XX:SurvivorRatio=32": "Reduces the survivor space, as MaxTenuringTheshold was increased.",
            "-XX:+PerfDisableSharedMem": "Prevents the GC from writing to the file system. File system IO may take a very long time, which is why we disable it.",
            "-XX:MaxTenuringThreshold=1": "This delays the collection of longer lived memory, and therefore decreases pause times (and improves server performance).",
            "-Daikars.new.flags=true": "This tells the Paper timings system that you are using the updated version of Aikar's scripts.",
            "-Dusing.aikars.flags=https://mcflags.emc.gs": "This tells the Paper timings system that you are using Aikar's scripts.",
        },
        description: "Everyone's favourite flags from everyone's favourite JVM expert. Aikar tirelessly worked to tune these flags for maximum performance on a variety of server types, big and small. Find out more about Aikar's flags here: https://mcflags.emc.gs/."
    },
    "aikar12gb": {
        name: "Aikar's flags (12GB+ of RAM)",
        template: {
            "-XX:+UseG1GC": "This enables the Java G1 garbage collector.",
            "-XX:+ParallelRefProcEnabled": " Optimizes the garbage collector process to use multiple threads for weak reference checking.",
            "-XX:MaxGCPauseMillis=200": "This tells the JVM to aim for a max garbage collection time of 200 milliseconds. This is useful, because long pauses for garbage collection will interfere with your server's performance.",
            "-XX:+UnlockExperimentalVMOptions": "This enables experimental JVM scripts. Don't worry, these scripts have been created by one of the smartest members of our community, and tested by thousands of servers.",
            "-XX:+DisableExplicitGC": "This disables the System.gc() method call. Plugins may think they are doing something good by explicitly calling the GC, but in this case it is best to leave it up to the JVM.",
            "-XX:+AlwaysPreTouch": "This allocates all of the RAM for the server on startup. Incremental allocations during runtime may impact performance, so this prevents that.",
            "-XX:G1NewSizePercent=40": "This gives the GC more room to breathe, and results in less GC cycles (and thus less lag.)",
            "-XX:G1MaxNewSizePercent=50": "This gives the GC more room to breathe, and results in less GC cycles (and thus less lag.)",
            "-XX:G1HeapRegionSize=16M": "This sends fewer objects to the old gen, which means there will be less time spent cleaning up old gen memory.",
            "-XX:G1ReservePercent=15": "This ensures that there is more space for memory to move around.",
            "-XX:G1HeapWastePercent=5": "Sets the percentage of heap that you are willing to waste. The Java HotSpot VM does not initiate the mixed garbage collection cycle when the reclaimable percentage is less than the heap waste percentage.",
            "-XX:G1MixedGCCountTarget=4": "This instructs the JVM to reclaim old gen ",
            "-XX:InitiatingHeapOccupancyPercent=20": "Sets the Java heap occupancy threshold that triggers a marking cycle. ",
            "-XX:G1MixedGCLiveThresholdPercent=90": "This sends fewer objects to the old gen, which means there will be less time spent cleaning up old gen memory.",
            "-XX:G1RSetUpdatingPauseTimePercent=5": "Reduces GC pause durations.",
            "-XX:SurvivorRatio=32": "Reduces the survivor space, as MaxTenuringTheshold was increased.",
            "-XX:+PerfDisableSharedMem": "Prevents the GC from writing to the file system. File system IO may take a very long time, which is why we disable it.",
            "-XX:MaxTenuringThreshold=1": "This delays the collection of longer lived memory, and therefore decreases pause times (and improves server performance).",
            "-Daikars.new.flags=true": "This tells the Paper timings system that you are using the updated version of Aikar's scripts.",
            "-Dusing.aikars.flags=https://mcflags.emc.gs": "This tells the Paper timings system that you are using Aikar's scripts.",
        },
        description: "A modified version of Aikar's flags that will work better on servers running with 12GB or more of memory. Find out more about Aikar's flags here: https://mcflags.emc.gs/."
    },
    // "krusic22": {
    //     name: "Krusic22's flags",
    //     template: {
    //         "-server": "",
    //         "-XX:+IgnoreUnrecognizedVMOptions": "",
    //         "-XX:+UnlockExperimentalVMOptions": "",
    //         "-XX:+UnlockDiagnosticVMOptions": "",
    //         "-XX:+UseGCOverheadLimit": "",
    //         "-XX:+ParallelRefProcEnabled": "",
    //         "-XX:-OmitStackTraceInFastThrow": "",
    //         "-XX:+ShowCodeDetailsInExceptionMessages": "",
    //         "-XX:+UseCompressedOops": "",
    //         "-XX:+PerfDisableSharedMem": "",
    //         "-XX:MaxGCPauseMillis=200": "",
    //         "-XX:-ZUncommit": "",
    //         "-XX:ZUncommitDelay=5": "",
    //         "-XX:SoftMaxHeapSize=4G": "",
    //         "-XX:+ZCollectionInterval=5": "",
    //         "-XX:ZAllocationSpikeTolerance=2.0": "",
    //     },
    //     description: "Something something about krusic zgc pog pog pog"
    // }
}

export default {types, flags}
