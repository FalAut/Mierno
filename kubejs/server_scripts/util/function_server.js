// priority: 1

/**
 * 处理梦之灯
 * @param {Internal.ItemStack_} item
 * @param {Internal.ServerPlayer} player
 * @returns
 */
function processDreamLantern(item, player) {
    if (item == "mierno:dream_lantern") {
        let dreamLantern = item.getCapability($NaturesAuraAPI.CAP_AURA_CONTAINER).resolve().get();
        if (dreamLantern.storedAura >= 1000) {
            dreamLantern.drainAura(1000, false);
            player.sendData("has_dream_lantern", { hasDreamLantern: true });
            return true;
        }
    }
    return false;
}

/**
 * 获取地面位置
 * @param {Internal.Level} level
 * @param {BlockPos} pos
 * @returns
 */
function getFirstBlockAbove(level, pos) {
    let posCurrent = null;
    for (let y = pos.getY() + 1; y < level.getMaxBuildHeight(); y++) {
        posCurrent = new BlockPos(pos.getX(), y, pos.getZ());
        if (
            level.getBlockState(posCurrent).isAir() &&
            level.getBlockState(posCurrent.above()).isAir() &&
            !level.getBlockState(posCurrent.below()).isAir()
        ) {
            return posCurrent;
        }
    }
    return null;
}

/**
 * 获取伤害来源
 * @param {Internal.Level} level
 * @param {Internal.DamageType_} damageType
 * @returns
 */
function getDamageSource(level, damageType) {
    const resourceKey = $ResourceKey.create(DAMAGE_TYPE, damageType);
    const holder = level.registryAccess().registryOrThrow(DAMAGE_TYPE).getHolderOrThrow(resourceKey);
    return new DamageSource(holder);
}

/**
 * 打开工作台GUI
 * @param {Internal.ServerPlayer} player
 */
function openCraftingMenu(player) {
    player.openMenu(
        new $SimpleMenuProvider(
            (i, inv, p) =>
                new $CraftingMenu(i, inv, (func) => {
                    func.apply(player.level, player.blockPosition());
                    return $Optional.empty();
                }),
            Component.translatable("container.crafting")
        )
    );
}

/**
 * 玩家是否有某个饰品
 * @param {Internal.ServerPlayer} player
 * @param {Internal.ItemStack_} itemStack
 */
function hasCurios(player, itemStack) {
    let curiosInventory = $CuriosApi.getCuriosInventory(player).resolve().get();

    return curiosInventory.equippedCurios.allItems.some((item) => item == itemStack);
}

/**
 * 坩埚交互
 * @param {Internal.BlockRightClickedEventJS} event
 * @param {Internal.Block_} crucible
 * @param {Internal.ItemStack_} inputItem
 * @param {Internal.FluidStackJS_} outputFluid
 * @returns
 */
const handleCrucibleInteraction = (event, crucible, inputItem, outputFluid) => {
    const { hand, block, item, player } = event;
    if (hand != "MAIN_HAND") return;

    if (block == crucible) {
        const itemCap = block.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).resolve().get();
        const fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();

        if (item.hasTag(inputItem) && !player.isCrouching()) {
            if (itemCap.getStackInSlot(0).count < 64) {
                itemCap.insertItem(item.withCount(1), false);
                item.count--;
            }
            player.swing();
            event.cancel();
        }

        if (item.isEmpty() && player.isCrouching()) {
            player.give(itemCap.getStackInSlot(0).withCount(1));
            itemCap.extractItem(0, 1, false);
            player.swing();
        }

        if (item == "bucket" && fluidCap.getFluidInTank(0).amount >= 1000) {
            fluidCap.drain(Fluid.of(outputFluid), "execute");
            player.give(Fluid.of(outputFluid).fluid.bucket);
            item.count--;
            player.swing();
        }
    }
};

/**
 *
 * @param {Internal.Level} level
 * @param {Internal.AABB} aabb
 * @param {BlockPos} corePos
 * @returns {boolean}
 */
function checkAreaWithAABBIsEmptyBlockWithoutCore(level, aabb, corePos) {
    const { minX, minY, minZ, maxX, maxY, maxZ } = aabb;
    const coreX = corePos.x;
    const coreY = corePos.y;
    const coreZ = corePos.z;

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            for (let z = minZ; z <= maxZ; z++) {
                if (x == coreX && y == coreY && z == coreZ) {
                    continue;
                }
                if (!level.isEmptyBlock([x, y, z])) {
                    return false;
                }
            }
        }
    }
    return true;
}

/**
 *
 * @param {Internal.LivingEntity} entity
 * @returns
 */
function tryRemoveUndyingEnchantment(entity) {
    for (let item of entity.armorSlots) {
        let enchantmentTags = item.enchantmentTags;

        for (let i = 0; i < enchantmentTags.size(); i++) {
            let enchantment = enchantmentTags.get(i);
            if (enchantment.get("id") == "mierno:undying") {
                enchantmentTags.remove(i);
                return true;
            }
        }
    }
    return false;
}

/**
 * 检查祭坛周围四个方向的箱子中是否摆放/放入了正确的物品
 * @param {Internal.Level} level
 * @param {BlockPos} blockPos
 * @returns {Object}
 */
function psuInverChestCheck(level, blockPos) {
    if (!$PatchouliAPI.getMultiblock("mierno:psu_inver_ritual").validate(level, blockPos)) return;
    // prettier-ignore
    const requireItems = {
    east: ['minecraft:water_breathing', 'minecraft:night_vision', 'minecraft:swiftness', 'minecraft:leaping', 'minecraft:strength', 'minecraft:healing', 'minecraft:invisibility', 'minecraft:fire_resistance', 'minecraft:poison', 'minecraft:harming', 'minecraft:weakness', 'minecraft:slowness'],
    south: ['minecraft:diamond_ore', 'minecraft:lapis_ore', 'minecraft:emerald_ore', 'minecraft:redstone_ore', 'minecraft:gold_ore', 'minecraft:copper_ore', 'minecraft:iron_ore', 'minecraft:coal_ore', 'minecraft:sand', 'minecraft:gravel', 'minecraft:grass_block', 'minecraft:clay'],
    west: ['minecraft:music_disc_stal', 'minecraft:music_disc_strad', 'minecraft:music_disc_mellohi', 'minecraft:music_disc_mall', 'minecraft:music_disc_far', 'minecraft:music_disc_13', 'minecraft:music_disc_cat', 'minecraft:music_disc_chirp', 'minecraft:music_disc_blocks', 'minecraft:music_disc_ward', 'minecraft:music_disc_11', 'minecraft:music_disc_wait'],
    north: ['minecraft:glass', 'minecraft:charcoal', 'minecraft:cooked_cod', 'minecraft:cooked_chicken', 'minecraft:terracotta', 'minecraft:cooked_beef', 'minecraft:cooked_porkchop', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:baked_potato', 'minecraft:stone', 'minecraft:green_dye']
}
    const counts = { east: 0, south: 0, west: 0, north: 0 };
    const directions = ["east", "south", "west", "north"];

    directions.forEach((direction) => {
        let chest = level.getBlock(blockPos).offset(direction, 5);
        chest?.inventory.allItems.forEach((item) => {
            if (direction == "east" && item == "potion" && requireItems.east.includes(item.nbt.Potion)) counts.east++;
            if (requireItems[direction].includes(item.id)) counts[direction]++;
        });
    });

    return counts;
}

/**
 * 在半径 4 格的范围内，寻找信标方块位置
 * @param {Internal.Level} level
 * @param {Internal.BlockContainerJS} originBlock
 * @returns {BlockPos}
 */
function psuInverBeaconCheck(level, block) {
    const radius = 4;
    const { x, y, z } = block;

    for (let dx = -radius; dx <= radius; dx++) {
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dz = -radius; dz <= radius; dz++) {
                let blockPos = new BlockPos(x + dx, y + dy, z + dz);
                let block = level.getBlockState(blockPos).block;

                if (block == Blocks.BEACON) return blockPos;
            }
        }
    }
}

/**
 * 生成试炼怪物
 * @param {Internal.BlockContainerJS} block
 */
function spawnTrialMobs(block) {
    let mobs = [
        "zombie",
        "spider",
        "cave_spider",
        "witch",
        "zombie_villager",
        "blaze",
        "ars_nouveau:wilden_stalker",
        "ars_nouveau:wilden_hunter",
        "ars_nouveau:wilden_guardian",
        "ad_astra:star_crawler",
    ];

    for (let i = 0; i < 200; i++) {
        let mobType = mobs[Utils.random.nextInt(0, mobs.length - 1)];
        let mobEntity = block.createEntity(mobType);

        let randomX, randomZ, randomPos;

        do {
            randomX = Utils.random.nextInt(block.x - 50, block.x + 50);
            randomZ = Utils.random.nextInt(block.z - 50, block.z + 50);
            randomPos = getFirstBlockAbove(block.level, new BlockPos(randomX, block.level.minBuildHeight, randomZ));
        } while (!randomPos);

        mobEntity.setPosition(randomX, randomPos.y, randomZ);
        mobEntity.spawn();

        mobEntity.addTag("trial_mob");
        mobEntity.addTag("persistent");
        mobEntity.potionEffects.add("speed", -1, 4);
    }
}

/**
 *
 * @param {Internal.ServerPlayer} player
 * @param {Internal.InteractionHand} hand
 * @param {string} structureName
 * @param {number} range
 * @returns
 */
function spawnStructureFinderEye(player, hand, structureName, range) {
    let item = player.getHeldItem(hand);
    let level = player.level;
    let structureRegistry = level.registryAccess().registryOrThrow($Registries.STRUCTURE);
    let structureKey = $ResourceKey.create(structureRegistry.key(), structureName);
    let holder = structureRegistry.getHolder(structureKey);
    let holderSet = $HolderSet.direct([holder.get()]);
    let pair = level
        .getChunkSource()
        .getGenerator()
        .findNearestMapStructure(level, holderSet, player.blockPosition(), range, false);

    if (pair) {
        let structurePos = pair.getFirst();

        /**@type {Internal.EyeOfEnder} */
        let eye = level.createEntity("eye_of_ender");
        eye.setPos(player.x, player.y + 1, player.z);
        eye.setItem(item);
        eye.signalTo(structurePos);
        eye.spawn();

        player.swing(hand, true);
        if (!player.isCreative()) item.count--;

        level.playSound(null, player.blockPosition(), "entity.ender_eye.launch", "master");
    }
}

/**
 * 徽章激活条件检查器
 * @param {string} multiblockId
 * @param {(level: Internal.ServerLevel, block: Internal.BlockContainerJS) => Array<[boolean, string]>} conditionProvider
 * @returns {(level: Internal.ServerLevel, block: Internal.BlockContainerJS, player: Internal.ServerPlayer) => boolean}
 */
function createRitualChecker(ritualType, conditionProvider) {
    return (level, block, player) => {
        const multiblock = $PatchouliAPI.getMultiblock(`mierno:${ritualType}_sigil_activation_ritual`);
        const conditions = conditionProvider(level, block, multiblock);

        const results = conditions.map(([condition, messageKey]) => {
            if (player) {
                const status = condition ? "§a✅" : "§4❌";
                player.tell(Text.translate(`message.mierno.activation_ritual.condition.${messageKey}`, status).gold());
            }

            return condition;
        });

        return results.every(Boolean);
    };
}
