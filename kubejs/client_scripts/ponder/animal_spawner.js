Ponder.registry((event) => {
    event
        .create("naturesaura:animal_spawner")
        .scene("animal_spawner", "降生祭坛", "mierno:animal_spawner", (scene, util) => {
            scene.showStructure();

            let item1 = scene.world.createItemEntity([2.5, 5, 3], [0, 0, 0], "naturesaura:birth_spirit");
            let item2 = scene.world.createItemEntity([2, 5, 3.5], [0, 0, 0], "botania:rune_earth");
            scene.idle(40);

            scene.world.removeEntity(item1);
            scene.world.removeEntity(item2);
            scene.idle(20);

            scene.world.createEntity("cow", [2, 2, 3]);
        });
});
