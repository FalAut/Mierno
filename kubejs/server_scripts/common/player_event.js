PlayerEvents.tick((event) => {
    const { player, level } = event;
    if (player.age % 20) return;

    if (level.dimension == 'mierno:misty_forest') {
        let foundDreamLamp = player.inventory.allItems.some((item) => processDreamLantern(item, player));

        if (!foundDreamLamp) {
            let curiosInventory = $CuriosApi.getCuriosInventory(player).orElse(null);
            foundDreamLamp = curiosInventory.equippedCurios.allItems.some((item) => processDreamLantern(item, player));
        }

        if (!foundDreamLamp) {
            player.sendData('has_dream_lantern', { hasDreamLantern: false });
            player.attack(getDamageSource(level, 'mierno:mist'), 10);
        }
    }

    if (
        (player.level.dimension == 'mierno:otherworld' ||
            player.inventory.allItems.some((item) => item == 'mierno:colorless_gem')) &&
        !hasCurios(player, 'botania:third_eye')
    ) {
        player.potionEffects.add('darkness', 60);
        player.potionEffects.add('blindness', 60);
    }

    player.inventory.allItems.forEach((item) => {
        if (item == 'mierno:unstable_ingot') {
            if (!item.nbt) {
                item.setNbt({ Stable: 100 });
            }

            let stable = item.nbt.getInt('Stable');
            item.nbt.putInt('Stable', stable - 10);

            if (stable <= 10) {
                item.shrink(item.count);
                player.block.createExplosion().explosionMode('none').strength(5).explode();
            }
        }

        if (item == 'mierno:unstable_singularity') {
            item.shrink(item.count);
            player.block.createExplosion().explosionMode('none').strength(5).explode();
        }
    });

    player.setFoodLevel(20);
    player.setSaturation(20);

    if (hasCurios(player, 'botania:third_eye')) {
        player.sendData('display_third_eye', { hasThirdEye: true });
    } else {
        player.sendData('display_third_eye', { hasThirdEye: false });
    }

    player.sendData('display_playtime', { playtime: player.stats.playTime });
});

EntityEvents.death('player', (event) => {
    const { source } = event;
    const /**@type {Internal.ServerPlayer} */ player = event.player;

    if (source.getType() == 'mistDamage' && !player.isAdvancementDone('mierno:mist_die')) {
        player.unlockAdvancement('mierno:mist_die');
    }
});

PlayerEvents.loggedIn((event) => {
    const { player } = event;

    if (!player.persistentData.getBoolean('first_joined')) {
        player.give(
            Item.of(
                'ftbquests:book',
                '{"akashictome:data":{ad_astra:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"ad_astra:astrodux"}},ae2:{Count:1b,id:"ae2:guide"},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},bloodmagic:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bloodmagic:guide"}},botania:{Count:1b,id:"botania:lexicon",tag:{"botania:elven_unlock":1b}},buildinggadgets2:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"buildinggadgets2:buildinggadgets2book"}},evilcraft:{Count:1b,id:"evilcraft:origins_of_darkness"},laserio:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"laserio:laseriobook"}},malum:{Count:1b,id:"malum:encyclopedia_arcana"},modularrouters:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}},naturesaura:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}},occultism:{Count:1b,id:"occultism:dictionary_of_spirits",tag:{"modonomicon:book_id":"occultism:dictionary_of_spirits"}},pneumaticcraft:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"pneumaticcraft:book"}},powah:{Count:1b,id:"powah:book"},rftoolsbase:{Count:1b,id:"rftoolsbase:manual"},wizards_reborn:{Count:1b,id:"wizards_reborn:arcanemicon",tag:{"akashictome:displayName":{text:\'{"translate":"item.wizards_reborn.arcanemicon"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.wizards_reborn.arcanemicon"}]}\'}}}},"akashictome:displayName":{text:\'{"translate":"item.ftbquests.book"}\'},"akashictome:is_morphing":1b,display:{Name:\'{"translate":"akashictome.sudo_name","with":[{"color":"green","translate":"item.ftbquests.book"}]}\'}}'
            )
        );
        player.persistentData.putBoolean('first_joined', true);
    }
});
