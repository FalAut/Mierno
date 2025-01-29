Platform.setModName("mierno", "Mierno");

StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
    event.setDisplayName("Mierno");
    event.setIcon(Item.of("mierno:pseudo_inversion_sigil").enchant("mierno:activate", 1));
    event.remove("mierno:unstable_ingot");
    event.add([
        Item.of("mierno:dream_lantern", "{aura:2560000}"),
        Item.of("mierno:unstable_ingot", "{Stable:100.0d}"),
        Item.of("mierno:addition_sigil").enchant("mierno:activate", 1),
        Item.of("mierno:subtraction_sigil").enchant("mierno:activate", 1),
        Item.of("mierno:multiplication_sigil").enchant("mierno:activate", 1),
        Item.of("mierno:division_sigil").enchant("mierno:activate", 1),
        Item.of("mierno:pseudo_inversion_sigil").enchant("mierno:activate", 1),
        Item.of(
            "ae2:meteorite_compass",
            '{display:{Name:\'{"translate":"item.mierno.maze_compass","bold":true,"italic":false}\'}}'
        ).withLore([
            Text.translate("tooltip.mierno.meteorite_compass1").gold().italic(false),
            Text.translate("tooltip.mierno.meteorite_compass2").gold().italic(false),
            Text.translate("tooltip.mierno.meteorite_compass3").gold().italic(false),
        ]),
    ]);
});
