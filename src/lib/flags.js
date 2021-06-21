const flags = {
    "-XX:+UseG1GC": "This enables the Java G1 garbage collector.",
    "-XX:+ParallelRefProcEnabled": " Optimizes the garbage collector process to use multiple threads for weak reference checking.",
    "-XX:MaxGCPauseMillis=200": "This tells the JVM to aim for a max garbage collection time of 200 milliseconds. This is useful, because long pauses for garbage collection will interfere with your server's performance.",
    "-XX:+UnlockExperimentalVMOptions": "This enables experimental JVM flags. Don't worry, these flags have been created by one of the smartest members of our community, and tested by thousands of servers.",
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
    "-Daikars.new.flags=true": "This tells the Paper timings system that you are using the updated version of Aikar's flags.",
    "-Dusing.aikars.flags=https://mcflags.emc.gs": "This tells the Paper timings system that you are using Aikar's flags.",
}

export default flags