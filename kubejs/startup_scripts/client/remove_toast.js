const $RecipeToast = Java.loadClass("net.minecraft.client.gui.components.toasts.RecipeToast");
const $TutorialToast = Java.loadClass("net.minecraft.client.gui.components.toasts.TutorialToast");

ForgeEvents.onEvent("net.minecraftforge.client.event.ToastAddEvent", (event) => {
    const { toast } = event;

    if (toast instanceof $RecipeToast || toast instanceof $TutorialToast) {
        event.setCanceled(true);
    }
});