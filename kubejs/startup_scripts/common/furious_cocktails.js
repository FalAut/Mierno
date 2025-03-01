StartupEvents.registry('mob_effect', (event) => {
    event.create('mierno:furious').effectTick((entity, lvl) => {
        if (entity.level.isClientSide()) return;

        let effects = [
            // 'ars_nouveau:blasting', // 会爆炸
            'ars_nouveau:bounce',
            'ars_nouveau:flight',
            // 'ars_nouveau:freezing', // 冰
            'ars_nouveau:glide',
            'ars_nouveau:gravity',
            'ars_nouveau:hex',
            'ars_nouveau:immolate',
            'ars_nouveau:magic_find',
            'ars_nouveau:mana_regen',
            'ars_nouveau:recovery',
            'ars_nouveau:scrying',
            'ars_nouveau:shielding',
            'ars_nouveau:shocked',
            'ars_nouveau:snared',
            'ars_nouveau:spell_damage',
            'ars_nouveau:summoning_sickness',
            'bloodmagic:bounce',
            // 'bloodmagic:firefuse', // 会爆炸
            'bloodmagic:flight',
            'bloodmagic:gravity',
            'bloodmagic:grounded',
            'bloodmagic:hard_cloak',
            'bloodmagic:heavy_heart',
            'bloodmagic:obsidian_cloak',
            'bloodmagic:passivity',
            'bloodmagic:plantleech',
            'bloodmagic:sacrificallamb',
            'bloodmagic:soft_fall',
            'bloodmagic:soulfray',
            'bloodmagic:soulsnare',
            'bloodmagic:spectral_sight',
            // 'bloodmagic:suspended', // 失重，然后有可能不恢复
            'botania:allure',
            'botania:bloodthirst',
            // 'botania:clear', // 赦免：清除所有效果
            'botania:emptiness',
            'botania:feather_feet',
            'botania:soul_cross',
            'cofh_core:chilled',
            'cofh_core:clarity',
            'cofh_core:cold_resistance',
            'cofh_core:enderference',
            'cofh_core:explosion_resistance',
            'cofh_core:lightning_resistance',
            'cofh_core:love',
            'cofh_core:magic_resistance',
            // 'cofh_core:panacea', // 万灵药：移除负面效果
            'cofh_core:shocked',
            'cofh_core:slimed',
            'cofh_core:sundered',
            'cofh_core:supercharge',
            'cofh_core:true_invisibility',
            'cofh_core:wrenched',
            'evilcraft:paling',
            // 'forbidden_arcanus:darkened', // 黑暗
            'forbidden_arcanus:spectral_vision',
            'malum:aethers_charm',
            'malum:anglers_lure',
            'malum:ascension',
            'malum:cancerous_growth',
            'malum:earthen_might',
            'malum:echoing_arcana',
            'malum:gaias_bulwark',
            'malum:gluttony',
            'malum:grim_certainty',
            'malum:ifrits_embrace',
            'malum:imminent_deliverance',
            'malum:miners_rage',
            'malum:poseidons_grasp',
            'malum:reactive_shielding',
            // 'malum:rejected', // 黑
            'malum:sacrificial_empowerment',
            // 'malum:silenced', // 小黑
            'malum:wicked_intent',
            'malum:zephyrs_courage',
            'minecraft:absorption',
            'minecraft:bad_omen',
            // 'minecraft:blindness', // 黑
            'minecraft:conduit_power',
            // "minecraft:darkness" // 黑
            'minecraft:dolphins_grace',
            'minecraft:fire_resistance',
            'minecraft:glowing',
            'minecraft:haste',
            'minecraft:health_boost',
            'minecraft:hero_of_the_village',
            'minecraft:hunger',
            'minecraft:instant_damage',
            'minecraft:instant_health',
            'minecraft:invisibility',
            'minecraft:jump_boost',
            'minecraft:levitation',
            'minecraft:luck',
            'minecraft:mining_fatigue',
            'minecraft:nausea',
            'minecraft:night_vision',
            'minecraft:poison',
            'minecraft:regeneration',
            'minecraft:resistance',
            'minecraft:saturation',
            'minecraft:slow_falling',
            'minecraft:slowness',
            'minecraft:speed',
            'minecraft:strength',
            'minecraft:unluck',
            'minecraft:water_breathing',
            'minecraft:weakness',
            'minecraft:wither',
            'naturesaura:breathless',
            'occultism:bat_lifesteal',
            'occultism:beaver_harvest',
            'occultism:double_jump',
            'occultism:dragon_greed',
            'occultism:mummy_dodge',
            'occultism:step_height',
            // 'occultism:third_eye', // 第三只眼
            // 'wizards_reborn:irritation', // 会黑
            'wizards_reborn:mor_spores',
            'wizards_reborn:tipsy',
            'wizards_reborn:wissen_aura',
        ];

        for (let effect of effects) {
            entity.potionEffects.add(effect, entity.potionEffects.getActive('mierno:furious').duration);
        }
    });

    //    event.create('mierno:furious').effectTick((entity, lvl) => {
    //        if (entity.level.isClientSide()) return;
    //        let effects = entity.server.registryAccess().registryOrThrow($ResourceKey.createRegistryKey('mob_effect'));
    //        effects.forEach((/**@type {Internal.MobEffect} */ effect) => {
    //            if (effect.getDescriptionId() == 'effect.botania.clear') return;
    //            entity.potionEffects.add(effect, 100);
    //        });
    //    });
});

StartupEvents.registry('potion', (event) => {
    event.createCustom('mierno:furious', () =>
        new $PotionBuilder('mierno:furious').effect('mierno:furious', 200).createObject()
    );
});

StartupEvents.postInit((event) => {
    $BrewingRecipeRegistry.addRecipe(
        Item.of('minecraft:potion', '{Potion:"minecraft:thick"}').strongNBT(),
        'malum:fused_consciousness',
        Item.of('minecraft:potion', '{Potion:"mierno:furious"}')
    );
});

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Added', (event) => {
    const { entity, effectInstance } = event;
    if (!entity.isPlayer() || !effectInstance) return;

    /**@type {Internal.ServerPlayer} */
    const player = entity;

    if (effectInstance.getDescriptionId() == 'effect.mierno.furious') {
        player.sendData('load_shader', { path: 'mierno:shaders/post/wobble.json' });

        if (!player.isAdvancementDone('minecraft:nether/all_effects')) {
            player.unlockAdvancement('minecraft:nether/all_effects');
        }
    }
});

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Expired', (event) => {
    const { entity, effectInstance } = event;
    if (!entity.isPlayer() || !effectInstance) return;

    /**@type {Internal.ServerPlayer} */
    const player = entity;

    if (effectInstance.getDescriptionId() == 'effect.mierno.furious') {
        player.sendData('shutdown_shader');
    }
});

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Remove', (event) => {
    const { entity, effectInstance } = event;
    if (!entity.isPlayer() || !effectInstance) return;

    /**@type {Internal.ServerPlayer} */
    const player = entity;

    if (effectInstance.getDescriptionId() == 'effect.mierno.furious') {
        player.sendData('shutdown_shader');
    }
});
