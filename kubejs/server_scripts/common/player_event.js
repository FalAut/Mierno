PlayerEvents.tick((event) => {
    const { player, level } = event;
    if (player.age % 20) return;

    if (level.dimension == "mierno:misty_forest") {
        let foundDreamLamp = player.inventory.allItems.some((item) => processDreamLantern(item, player));

        if (!foundDreamLamp) {
            let curiosInventory = $CuriosApi.getCuriosInventory(player).orElse(null);
            foundDreamLamp = curiosInventory.equippedCurios.allItems.some((item) => processDreamLantern(item, player));
        }

        if (!foundDreamLamp) {
            player.sendData("has_dream_lantern", { hasDreamLantern: false });
            player.attack(getDamageSource(level, "mierno:mist"), 10);
        }
    }

    if (
        (player.level.dimension == "mierno:otherworld" ||
            player.inventory.allItems.some((item) => item == "mierno:colorless_gem")) &&
        !hasCurios(player, "botania:third_eye")
    ) {
        player.potionEffects.add("darkness", 60);
        player.potionEffects.add("blindness", 60);
    }

    player.inventory.allItems.forEach((item) => {
        if (item == "mierno:unstable_ingot") {
            if (!item.nbt) {
                item.setNbt({ Stable: 100 });
            }

            let stable = item.nbt.getInt("Stable");
            item.nbt.putInt("Stable", stable - 10);

            if (stable <= 10) {
                item.count--;
                player.block.createExplosion().explosionMode("none").strength(5).explode();
            }
        }

        if (item == "mierno:unstable_singularity") {
            player.block.createExplosion().explosionMode("none").strength(5).explode();
            item.count--;
        }
    });

    player.setFoodLevel(20);
    player.setSaturation(20);

    if (hasCurios(player, "botania:third_eye")) {
        player.sendData("display_third_eye", { hasThirdEye: true });
    } else {
        player.sendData("display_third_eye", { hasThirdEye: false });
    }

    player.sendData("display_playtime", { playtime: player.stats.playTime });
});

EntityEvents.death("player", (event) => {
    const { source } = event;
    const /**@type {Internal.ServerPlayer} */ player = event.player;

    if (source.getType() == "mistDamage" && !player.isAdvancementDone("mierno:mist_die")) {
        player.unlockAdvancement("mierno:mist_die");
    }
});
