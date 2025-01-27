StartupEvents.registry("item", (event) => {
    event.create("mierno:slime_boots", "boots");

    event
        .create("mierno:slime_sling")
        .unstackable()
        .use(() => true)
        .useAnimation("bow")
        .useDuration(() => 72000)
        .releaseUsing((itemStack, level, entity, timeLeft) => {
            if (!entity.onGround()) return;

            let timeUsed = itemStack.useDuration - timeLeft;
            let power = timeUsed / 20;
            power = (power * power + power * 2) / 3;
            power *= 4;
            if (power > 6) power = 6;

            if (getRayTraceBlock(entity)) {
                let lookVec = entity.lookAngle.normalize();
                let vec = new Vec3d(lookVec.x() * -power, (lookVec.y() * -power) / 3, lookVec.z() * -power);

                entity.addDeltaMovement(vec);
                setBounceData(entity, 0);
            }

            if (power > 1) {
                entity.playSound("entity.slime.jump_small", 1, 1);
            }
        });
});

ForgeEvents.onEvent("net.minecraftforge.event.TickEvent$PlayerTickEvent", (event) => {
    const { player, phase } = event;
    if (phase != "END") return;

    let bounceData = player.persistentData.get("bounceData");
    if (!bounceData) return;

    if (
        player.abilities.flying ||
        player.isSwimming() ||
        player.isInWaterOrBubble() ||
        player.onClimbable() ||
        player.isSpectator() ||
        player.isFallFlying()
    ) {
        player.persistentData.remove("bounceData");
        return;
    }

    if (player.age == bounceData.bounceTick) {
        player.setDeltaMovement(new Vec3d(player.deltaMovement.x(), bounceData.bounceY, player.deltaMovement.z()));
        bounceData.bounceTick = 0;
    }

    if (
        !player.onGround() &&
        (bounceData.lastX != player.deltaMovement.x() || bounceData.lastZ == player.deltaMovement.z())
    ) {
        let d = 0.935;
        let vec = new Vec3d(player.deltaMovement.x() / d, player.deltaMovement.y(), player.deltaMovement.z() / d);

        player.setDeltaMovement(vec);
        player.hasImpulse = true;
    }

    bounceData.lastX = player.deltaMovement.x();
    bounceData.lastZ = player.deltaMovement.z();

    if (bounceData.wasInAir && player.onGround()) {
        if (bounceData.groundTimer == 0) {
            bounceData.groundTimer = player.age;
        } else {
            if (player.age - bounceData.groundTimer > 5) {
                player.persistentData.remove("bounceData");
                return;
            }
        }
    } else {
        bounceData.wasInAir = true;
        bounceData.groundTimer = 0;
    }

    player.persistentData.put("bounceData", bounceData);
});

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingFallEvent", (event) => {
    onFallWithSlimeBoots(event);
});

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerFlyableFallEvent", (event) => {
    onFallWithSlimeBoots(event);
});
