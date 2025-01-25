ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", (event) => {
    const { entity, amount } = event;
    if (!entity.isPlayer()) return;

    const enchantmentLevels = $EnchantmentHelper.getEnchantmentLevel("mierno:last_stand", entity);

    if (enchantmentLevels > 0 && entity.health - amount < 1) {
        const xpRequired = Math.max(1, (50 * (1 - (entity.health - amount))) / enchantmentLevels);
        if (getPlayerXP(entity) >= xpRequired) {
            entity.setHealth(1);
            entity.giveExperiencePoints(-xpRequired);
            event.setAmount(0);
            event.setCanceled(true);
        }
    }
});
