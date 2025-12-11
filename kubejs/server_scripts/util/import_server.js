// priority: 99

const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI').get();
const $NaturesAuraAPI = Java.loadClass('de.ellpeck.naturesaura.api.NaturesAuraAPI');
const $CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
const $Integer = Java.loadClass('java.lang.Integer');
const $StructurePlaceSettings = Java.loadClass(
    'net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings'
);
const $ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey');
const DAMAGE_TYPE = $ResourceKey.createRegistryKey('damage_type');
const $IMultiController = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMultiController');
const $MultiblockState = Java.loadClass('com.lowdragmc.mbd2.api.pattern.MultiblockState');
const $Optional = Java.loadClass('java.util.Optional');
const $SimpleMenuProvider = Java.loadClass('net.minecraft.world.SimpleMenuProvider');
const $CraftingMenu = Java.loadClass('net.minecraft.world.inventory.CraftingMenu');
const $Block = Java.loadClass('net.minecraft.world.level.block.Block');
const $AssemblyHaloContainer = Java.loadClass('vazkii.botania.client.gui.crafting.AssemblyHaloContainer');
const $SourceUtil = Java.loadClass('com.hollingsworth.arsnouveau.api.util.SourceUtil');
const $FireworkRocketEntity = Java.loadClass('net.minecraft.world.entity.projectile.FireworkRocketEntity');
const $Registries = Java.loadClass('net.minecraft.core.registries.Registries');
const $HolderSet = Java.loadClass('net.minecraft.core.HolderSet');
const $ForgeHooks = Java.loadClass('net.minecraftforge.common.ForgeHooks');
