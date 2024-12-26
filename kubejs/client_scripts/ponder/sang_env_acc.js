Ponder.registry((event) => {
    event
        .create("evilcraft:sanguinary_environmental_accumulator")
        .scene("sang_env_acc", "血腥环境存储器", "mierno:sang_env_acc", (scene, util) => {
            scene.showStructure();
        });
});
