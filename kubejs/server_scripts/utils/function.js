/**
 * 处理梦之灯
 * @param {Internal.ItemStack_} item
 * @param {Internal.ServerPlayer} player
 * @returns
 */
function processDreamLantern(item, player) {
    if (item == "mierno:dream_lantern") {
        let dreamLantern = item.getCapability($NaturesAuraAPI.CAP_AURA_CONTAINER).resolve().get();
        if (dreamLantern.storedAura >= FOG_AURA_COST) {
            dreamLantern.drainAura(FOG_AURA_COST, false);
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

        if (item.hasTag(inputItem)) {
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
 * 转化playTime为天时分秒
 * @param {number} playTime
 * @returns
 */
function convertTime(playTime) {
    const totalSeconds = Math.floor(playTime / 20);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let result;
    if (seconds > 0) result = Text.translate("mierno.time.seconds", seconds.toFixed(0)).getString();
    if (minutes > 0) result = Text.translate("mierno.time.minutes", minutes.toFixed(0)).getString();
    if (hours > 0) result = Text.translate("mierno.time.hours", hours.toFixed(0)).getString();
    if (days > 0) result = Text.translate("mierno.time.days", days.toFixed(0)).getString();

    return result || "";
}

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
    return true; // 如果范围内全为空方块，返回 true
}
