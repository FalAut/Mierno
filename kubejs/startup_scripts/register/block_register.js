StartupEvents.registry("block", (event) => {
    event.create("mierno:infused_wood").hardness(2).woodSoundType();
    event.create("mierno:maze_block").unbreakable().textureAll("block/gray_concrete").noValidSpawns(true);
    event.create("mierno:mana_string_block").hardness(0.8).soundType("wool");
    event.create("mierno:futura_block").hardness(1).requiresTool().soundType("metal");
    event.create("mierno:datura").hardness(0).defaultCutout().cropSoundType().noCollision().noItem();
    event.create("mierno:reinforced_stone_frame").hardness(2).defaultCutout().requiresTool().soundType("metal");
    event.create("mierno:spirit_attuned_gem_block").hardness(1).defaultTranslucent().requiresTool().soundType("metal");
    event.create("mierno:nether_catalyst").hardness(1).stoneSoundType().requiresTool();
    event.create("mierno:end_catalyst").hardness(1).stoneSoundType().requiresTool();
    event.create("mierno:mini_sun").hardness(0).glassSoundType().lightLevel(1);
    event.create("mierno:glowing_obsidian").hardness(50).stoneSoundType().lightLevel(0.8).requiresTool();
    event.create("mierno:glacio_etrium_ore").hardness(3).stoneSoundType().requiresTool();
    event.create("mierno:deepslate_etrium_ore").hardness(3).stoneSoundType().requiresTool();
    event.create("mierno:memory_matrix").hardness(0).soundType("amethyst").lightLevel(1).defaultTranslucent();
    event.createCustom(
        "mierno:misty_forest_portal",
        () =>
            new $CustomPortalBlock(
                $BlockBehaviour$Properties
                    .copy(Blocks.NETHER_PORTAL)
                    .noCollission()
                    .strength(-1)
                    .sound(SoundType.GLASS)
                    .lightLevel((state) => 11)
            )
    );
});
