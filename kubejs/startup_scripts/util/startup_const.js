// priority: 99

const $NaturesAuraAPI = Java.loadClass("de.ellpeck.naturesaura.api.NaturesAuraAPI");
const $LeavesBlock = Java.loadClass("net.minecraft.world.level.block.LeavesBlock");
const $SourceUtil = Java.loadClass("com.hollingsworth.arsnouveau.api.util.SourceUtil");
const $BasicAuraType = Java.loadClass("de.ellpeck.naturesaura.api.aura.type.BasicAuraType");
const $MortarItem = Java.loadClass("mod.maxbogomol.wizards_reborn.common.item.equipment.MortarItem");
const $Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties");
const $ItemAuraCache = Java.loadClass("de.ellpeck.naturesaura.items.ItemAuraCache");
const $ItemStructureFinder = Java.loadClass("de.ellpeck.naturesaura.items.ItemStructureFinder");
const $ResourceKey = Java.loadClass("net.minecraft.resources.ResourceKey");
const $PatchouliAPI = Java.loadClass("vazkii.patchouli.api.PatchouliAPI").get();
const $Character = Java.loadClass("java.lang.Character");
const $RecipeSchema = Java.loadClass("dev.latvian.mods.kubejs.recipe.schema.RecipeSchema");
const $BlockEntity = Java.loadClass("net.minecraft.world.level.block.entity.BlockEntity");
const $PortalPlacer = Java.loadClass("net.kyrptonaught.customportalapi.portal.PortalPlacer");
const $PortalIgnitionSource = Java.loadClass("net.kyrptonaught.customportalapi.portal.PortalIgnitionSource");
const $CustomPortalBuilder = Java.loadClass("net.kyrptonaught.customportalapi.api.CustomPortalBuilder");
const $CustomPortalBlock = Java.loadClass("net.kyrptonaught.customportalapi.CustomPortalBlock");
const $BlockBehaviour$Properties = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties");
const $RenderSystem = Java.loadClass("com.mojang.blaze3d.systems.RenderSystem");
const $KubeJS = Java.loadClass("dev.latvian.mods.kubejs.KubeJS");
const $Context = Java.loadClass("dev.latvian.mods.rhino.Context");
const $Integer = Java.loadClass("java.lang.Integer");
const $BlockHitResult = Java.loadClass("net.minecraft.world.phys.BlockHitResult");
const $UseOnContext = Java.loadClass("net.minecraft.world.item.context.UseOnContext");
const $DummyTooltipItem = Java.loadClass("com.klikli_dev.occultism.common.item.DummyTooltipItem");
const $SimpleSoundInstance = Java.loadClass("net.minecraft.client.resources.sounds.SimpleSoundInstance");
const $SoundInstance = Java.loadClass("net.minecraft.client.resources.sounds.SoundInstance");

const REGISTRIES_STRUCTURE = $ResourceKey.createRegistryKey("worldgen/structure");
