// priority: 99

const DEG_TO_RAD = 0.01745329238474369;
const NO_OVERLAY = 655360;
const FULL_BRIGHT = 15728880;

const $BeaconRenderer = Java.loadClass("net.minecraft.client.renderer.blockentity.BeaconRenderer");
const $RenderSystem = Java.loadClass("com.mojang.blaze3d.systems.RenderSystem");
const $HUDHandler = Java.loadClass("vazkii.botania.client.gui.HUDHandler");
const $Block = Java.loadClass("net.minecraft.world.level.block.Block");
const $Integer = Java.loadClass("java.lang.Integer");
const $RecipeTypes = Java.loadClass("mezz.jei.api.constants.RecipeTypes");
const $RenderType = Java.loadClass("net.minecraft.client.renderer.RenderType");
