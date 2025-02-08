EntityEvents.death((event) => {
    const { source, entity, level } = event;
    if (source.getType() == 'genericKill') return;

    if (tryRemoveUndyingEnchantment(entity)) {
        entity.setHealth(1);
        entity.removeAllEffects();
        entity.potionEffects.add('regeneration', 900, 1);
        entity.potionEffects.add('absorption', 100, 1);
        entity.potionEffects.add('fire_resistance', 800, 0);

        level.broadcastEntityEvent(entity, 35);

        event.cancel();
    }
});
