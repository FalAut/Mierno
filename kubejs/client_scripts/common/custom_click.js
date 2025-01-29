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
        case "mierno:open_blood_altar":
            $PatchouliAPI.openBookEntry("bloodmagic:guide", "bloodmagic:altar/blood_altar", 10);
            break;
        default:
            console.error("Unknown custom click event id: " + event.id());
            break;
    }

    return $EventResult.pass();
}

$CustomClickEvent.register($UtilsJS.makeFunctionProxy("client", $EventActor, openPatchouliBook));
