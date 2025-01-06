let ritualConditions = [];

function checkCondition(condition, messageKey, player) {
    const status = condition ? "§a✅" : "§4❌";
    if (player) {
        player.tell(Text.translate(`message.mierno.activation_ritual.${messageKey}`, status).gold());
    }
    return condition;
}

function checkAllConditions(level, block, player) {
    const multiblock = $PatchouliAPI.getMultiblock("mierno:division_sigil_activation_ritual");
    const brightness = level.getBrightness("block", block.pos);
    const time = level.getDayTime();

    ritualConditions = [
        checkCondition(multiblock.validate(level, block.pos, "none"), "multiblock", player),
        checkCondition(time <= 18500 && time > 17500, "midnight", player),
        checkCondition(brightness <= 7, "brightness", player),
        checkCondition(block.canSeeSky, "canseesky", player),
    ];

    return ritualConditions.every(Boolean);
}

BlockEvents.rightClicked("enchanting_table", (event) => {
    const { hand, item, level, block, player } = event;

    if (hand != "MAIN_HAND" || item != "mierno:division_sigil") return;
    player.tell(Text.translate("message.mierno.activation_ritual.title").red());

    if (checkAllConditions(level, block, player)) {
        player.tell(Text.translate("message.mierno.activation_ritual.prepared"));
        player.tell(Text.translate("message.mierno.activation_ritual.sacrifice").darkRed());
    }

    player.swing();
});

EntityEvents.death((event) => {
    const { entity, level } = event;
    const block = entity.block;
    if (!checkAllConditions(level, block)) return;

    const multiblock = $PatchouliAPI.getMultiblock("mierno:division_sigil_activation_ritual");

    multiblock.simulate(level, block.pos, "none", false).second.forEach((result) => {
        if (result.character == "A") {
            level.setBlock(
                result.worldPosition.below(),
                Block.getBlock("botania:mutated_grass").defaultBlockState(),
                2
            );
        }
        if (result.character == "B") {
            level.setBlock(
                result.worldPosition.above(),
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                2
            );
        }
    });

    let lightningBoltEntity = block.createEntity("lightning_bolt");
    lightningBoltEntity.setVisualOnly(true);
    lightningBoltEntity.moveTo(Vec3d.atCenterOf(block.pos));
    lightningBoltEntity.spawn();

    level.getEntitiesWithin(AABB.ofBlock(block.pos)).forEach((entity) => {
        if (entity?.item != "mierno:division_sigil") return;

        /**@type {Internal.ItemEntity} */
        let itemEntity = entity;
        itemEntity.setItem(Item.of("mierno:division_sigil").enchant("mierno:activate", 1));
        itemEntity.moveTo(Vec3d.atCenterOf(block.pos.above()));
        itemEntity.setDeltaMovement(new Vec3d(0, 0.01, 0));
        itemEntity.setNoGravity(true);
        itemEntity.setGlowing(true);
        level.broadcastEntityEvent(entity, 35);
    });
});
