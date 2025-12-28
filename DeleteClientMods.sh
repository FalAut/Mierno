#!/bin/bash

modsFolderPath="$(dirname "$0")/mods"

filesToDelete=(
    "brightnessslider-forge-1.0-1.20.jar",
    "create-ponder-1.20.1-0.0.2a-all.jar",
    "configured-forge-1.20.1-2.2.3.jar",
    "Controlling-forge-1.20.1-12.0.2.jar",
    "embeddium-0.3.31+mc1.20.1.jar",
    "ExtremeSoundMuffler-3.49.2-forge-1.20.1.jar",
    "jecharacters-1.20.1-forge-4.6.2.jar",
    "JustEnoughMekanismMultiblocks-1.20.1-4.15.jar",
    "lanserverproperties-1.11.1-forge.jar",
    "modpack-update-checker-1.20.1-forge-0.15.6.jar",
    "MouseTweaks-forge-mc1.20.1-2.25.1.jar",
    "notenoughcrashes-4.4.9+1.20.1-forge.jar",
    "oculus-mc1.20.1-1.8.0.jar",
    "Searchables-forge-1.20.1-1.0.3.jar",
    "YeetusExperimentus-Forge-2.3.1-build.6+mc1.20.1.jar"
)

for file in "${filesToDelete[@]}"; do
    filePath="$modsFolderPath/$file"
    if [ -f "$filePath" ]; then
        rm -f "$filePath"
        echo "Deleted: $filePath"
    else
        echo "File not found: $filePath"
    fi
done