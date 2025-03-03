$modsFolderPath = "$PSScriptRoot\mods"

$filesToDelete = @(
    "brightnessslider-forge-1.0-1.20.jar",
    "configured-forge-1.20.1-2.2.3.jar",
    "Controlling-forge-1.20.1-12.0.2.jar",
    "craftingtweaks-forge-1.20.1-18.2.5.jar",
    "embeddium-0.3.31+mc1.20.1.jar",
    "ExtremeSoundMuffler-3.48-forge-1.20.1.jar",
    "invtweaks-1.20.1-1.2.0.jar",
    "jecharacters-1.20.1-forge-4.5.11.jar",
    "JustEnoughMekanismMultiblocks-1.20.1-4.10.jar",
    "lanserverproperties-1.11.1-forge.jar",
    "modpack-update-checker-1.20.1-forge-0.15.4.jar",
    "MouseTweaks-forge-mc1.20.1-2.25.1.jar",
    "notenoughcrashes-4.4.7+1.20.1-forge.jar",
    "oculus-mc1.20.1-1.8.0.jar",
    "probejs-6.0.1-forge.jar",
    "Searchables-forge-1.20.1-1.0.3.jar",
    "YeetusExperimentus-Forge-2.3.1-build.6+mc1.20.1.jar"
)

foreach ($file in $filesToDelete) {
    $filePath = Join-Path -Path $modsFolderPath -ChildPath $file
    if (Test-Path $filePath) {
        Remove-Item $filePath -Force
        Write-Host "Deleted: $filePath"
    } else {
        Write-Host "File not found: $filePath"
    }
}