// priority: 99

const DEG_TO_RAD = 0.01745329238474369;
const NO_OVERLAY = 655360;
const FULL_BRIGHT = 15728880;

const $BeaconRenderer = Java.loadClass('net.minecraft.client.renderer.blockentity.BeaconRenderer');
const $RenderSystem = Java.loadClass('com.mojang.blaze3d.systems.RenderSystem');
const $HUDHandler = Java.loadClass('vazkii.botania.client.gui.HUDHandler');
const $Block = Java.loadClass('net.minecraft.world.level.block.Block');
const $Integer = Java.loadClass('java.lang.Integer');
const $RecipeTypes = Java.loadClass('mezz.jei.api.constants.RecipeTypes');
const $RenderType = Java.loadClass('net.minecraft.client.renderer.RenderType');
const $ArmorItem = Java.loadClass('net.minecraft.world.item.ArmorItem');
const $PatchouliAPI = Java.loadClass('vazkii.patchouli.api.PatchouliAPI').get();
const $BookGuiManager = Java.loadClass('com.klikli_dev.modonomicon.client.gui.BookGuiManager');
const $EventActor = Java.loadClass('dev.architectury.event.EventActor');
const $CustomClickEvent = Java.loadClass('dev.ftb.mods.ftblibrary.ui.CustomClickEvent').EVENT;
const $EventResult = Java.loadClass('dev.architectury.event.EventResult');
const $UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS');
const $ConfirmLinkScreen = Java.loadClass('net.minecraft.client.gui.screens.ConfirmLinkScreen');
const $Util = Java.loadClass('net.minecraft.Util');
const $ModularUIContainer = Java.loadClass('com.lowdragmc.lowdraglib.gui.modular.ModularUIContainer');
const $RecipeType = Java.loadClass('mezz.jei.api.recipe.RecipeType');
const $CustomJSRecipe = Java.loadClass('pie.ilikepiefoo.compat.jei.impl.CustomJSRecipe');

const ENGRAVING_RECIPE_TYPE = $RecipeType.create('mierno', 'engraving', $CustomJSRecipe);
