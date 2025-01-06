const $BookGuiManager = Java.loadClass("com.klikli_dev.modonomicon.client.gui.BookGuiManager");
const $EventActor = Java.loadClass("dev.architectury.event.EventActor");
const $CustomClickEvent = Java.loadClass("dev.ftb.mods.ftblibrary.ui.CustomClickEvent").EVENT;
const $EventResult = Java.loadClass("dev.architectury.event.EventResult");
const $UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS");

StartupEvents.init((event) => {
    $CustomClickEvent.register($UtilsJS.makeFunctionProxy("startup", $EventActor, openPatchouliBook));
});

function openPentaclesEntry(id) {
    $BookGuiManager.get().openEntry("occultism:dictionary_of_spirits", "occultism:pentacles/" + id, 1);
}

function openPatchouliBook(/**@type {Internal.CustomClickEvent} */ event) {
    switch (event.id()) {
        case "mierno:open_blood_pact_of_asmodeus":
            openPentaclesEntry("blood_pact_of_asmodeus");
            break;

        case "mierno:open_craft_djinni":
            openPentaclesEntry("craft_djinni");
            break;

        case "mierno:open_summon_wild_afrit":
            openPentaclesEntry("summon_wild_afrit");
            break;

        default:
            console.error("Unknown custom click event id: " + event.id());
            break;
    }

    return $EventResult.pass();
}
