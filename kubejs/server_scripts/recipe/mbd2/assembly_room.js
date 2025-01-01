ServerEvents.recipes((event) => {
    const { mierno } = event.recipes;

    mierno
        .assembly_room()
        .inputItems([
            "6x pneumaticcraft:reinforced_stone_slab",
            "2x pneumaticcraft:transistor",
            "4x pneumaticcraft:pressure_tube",
            "pneumaticcraft:small_tank",
            "4x mierno:reinforced_stone_frame",
            "thermal:redstone_servo",
            "2x powah:thermoelectric_plate",
            "ae2:logic_processor",
            "ae2:engineering_processor",
        ])
        .inputFE(10000)
        .outputItems("pneumaticcraft:thermopneumatic_processing_plant");

    mierno
        .assembly_room()
        .inputItems([
            "6x pneumaticcraft:reinforced_stone_slab",
            "2x pneumaticcraft:transistor",
            "4x pneumaticcraft:pressure_tube",
            "pneumaticcraft:small_tank",
            "thermal:machine_refinery",
            "thermal:redstone_servo",
            "2x powah:thermoelectric_plate",
        ])
        .inputFE(10000)
        .outputItems("pneumaticcraft:refinery");

    mierno
        .assembly_room()
        .inputItems([
            "2x powah:thermoelectric_plate",
            "4x mierno:reinforced_stone_frame",
            "2x pneumaticcraft:transistor",
            "ars_nouveau:fire_essence",
            "ars_nouveau:water_essence",
            "4x pneumaticcraft:pressure_tube",
            "ae2:logic_processor",
            "ae2:engineering_processor",
        ])
        .inputFE(10000)
        .outputItems("pneumaticcraft:vortex_tube");

    mierno
        .assembly_room()
        .inputItems([
            "6x pneumaticcraft:reinforced_stone_slab",
            "2x pneumaticcraft:transistor",
            "4x mierno:reinforced_stone_frame",
            "pneumaticcraft:small_tank",
            "4x pneumaticcraft:pressure_chamber_glass",
            "ae2:crystal_resonance_generator",
            "2x powah:thermoelectric_plate",
            "ae2:logic_processor",
            "ae2:engineering_processor",
        ])
        .inputFE(10000)
        .outputItems("pneumaticcraft:etching_tank");

    mierno
        .assembly_room()
        .inputItems([
            "6x pneumaticcraft:reinforced_stone_slab",
            "2x pneumaticcraft:transistor",
            "4x mierno:reinforced_stone_frame",
            "pneumaticcraft:pressure_gauge",
            "4x pneumaticcraft:pressure_chamber_glass",
            "ae2:growth_accelerator",
            "mierno:sun_crystal_full",
            "ae2:logic_processor",
            "ae2:engineering_processor",
        ])
        .inputFE(10000)
        .outputItems("pneumaticcraft:uv_light_box");

    mierno
        .assembly_room()
        .inputItems([
            "thermal:drill_head",
            "2x pneumaticcraft:transistor",
            "6x pneumaticcraft:pressure_chamber_wall",
            "pneumaticcraft:pressure_gauge",
            "pneumaticcraft:capacitor",
            "pneumaticcraft:small_tank",
            "4x pneumaticcraft:pressure_tube",
            "ae2:logic_processor",
            "ae2:engineering_processor",
        ])
        .inputFE(10000)
        .outputItems("mierno:oil_drilling_rig_controller");

    mierno
        .assembly_room()
        .inputItems([
            "pneumaticcraft:pcb_blueprint",
            "2x pneumaticcraft:transistor",
            "6x pneumaticcraft:pressure_chamber_wall",
            "pneumaticcraft:pressure_gauge",
            "pneumaticcraft:capacitor",
            "mierno:energy_input",
            "4x pneumaticcraft:pressure_tube",
            "ae2:logic_processor",
            "ae2:engineering_processor",
        ])
        .inputFE(10000)
        .outputItems("mierno:printing_room_controller");
});
