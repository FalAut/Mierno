// ServerEvents.highPriorityData((event) => {
//     let pentacles = [
//         {
//             name: "blood_pact_of_asmodeus",
//             x_placement: -10,
//             y_placement: 2,
//             mapping: {
//                 0: { type: "modonomicon:block", block: "occultism:golden_sacrificial_bowl" },
//                 E: { type: "modonomicon:block", block: "occultism:spirit_attuned_crystal" },
//                 H: { type: "modonomicon:block", block: "occultism:candle_white" },
//                 L: { type: "modonomicon:block", block: "occultism:spirit_fire" },
//                 B: { type: "modonomicon:block", block: "occultism:chalk_glyph_white" },
//                 K: { type: "modonomicon:block", block: "evilcraft:dark_power_gem_block" },
//                 D: { type: "modonomicon:block", block: "evilcraft:dark_blood_brick" },
//                 A: { type: "modonomicon:block", block: "occultism:chalk_glyph_red" },
//                 G: { type: "modonomicon:block", block: "occultism:sacrificial_bowl" },
//                 F: { type: "modonomicon:block", block: "occultism:chalk_glyph_purple" },
//                 I: { type: "modonomicon:block", block: "occultism:chalk_glyph_gold" },
//             },
//             pattern: [
//                 [
//                     "             ",
//                     "             ",
//                     "  L       L  ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "  L       L  ",
//                     "             ",
//                     "             ",
//                 ],
//                 [
//                     "             ",
//                     "             ",
//                     "  K       K  ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "  K       K  ",
//                     "             ",
//                     "             ",
//                 ],
//                 [
//                     "             ",
//                     "             ",
//                     "  D       D  ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "             ",
//                     "  D       D  ",
//                     "             ",
//                     "             ",
//                 ],
//                 [
//                     "    AAAAA    ",
//                     "  AA  B  AA  ",
//                     " ADEFFFFFEDA ",
//                     " AEF GBG FEA ",
//                     "A F HIIIH F A",
//                     "A FGIGBGIGF A",
//                     "ABFBIB0BIBFBA",
//                     "A FGIGBGIGF A",
//                     "A F HIIIH F A",
//                     " AEF GBG FEA ",
//                     " ADEFFFFFEDA ",
//                     "  AA  B  AA  ",
//                     "    AAAAA    ",
//                 ],
//             ],
//         },
//     ];

//     pentacles.forEach((pentacle) => {
//         pentacle.type = "modonomicon:dense";

//         let ground = [];
//         let pattern = pentacle.pattern[0];

//         for (let i = 0; i < pattern.length; i++) {
//             let row = "";
//             for (let j = 0; j < pattern[i].length; j++) {
//                 row += (i + j) % 2 == 0 ? "*" : "+";
//             }
//             ground.push(row);
//         }

//         pentacle.pattern.push(ground);
//         pentacle.mapping["*"] = { type: "modonomicon:display", display: "occultism:otherstone" };
//         pentacle.mapping["+"] = { type: "modonomicon:display", display: "minecraft:stone" };

//         JsonIO.write(`kubejs/data/occultism/modonomicon/multiblocks/${pentacle.name}.json`, pentacle);

//         JsonIO.write(
//             `kubejs/data/occultism/modonomicon/books/dictionary_of_spirits/entries/pentacles/${pentacle.name}.json`,
//             generatePentacleEntry(pentacle.name, pentacle.x_placement, pentacle.y_placement, pentacle.parents)
//         );
//     });

//     function generatePentacleEntry(ritual_name, x_placement, y_placement, parents) {
//         let entry = {
//             name: ritual_name,
//             background_u_index: 0,
//             background_v_index: 0,
//             category: "occultism:pentacles",
//             description: "",
//             hide_while_locked: false,
//             show_when_any_parent_unlocked: true,
//             icon: `mierno:ritual_dummy/${ritual_name}`,
//             name: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.name`,
//             pages: [
//                 {
//                     type: "modonomicon:text",
//                     anchor: "",
//                     show_title_separator: true,
//                     text: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.text`,
//                     title: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.title`,
//                     use_markdown_in_title: false,
//                 },
//                 {
//                     type: "modonomicon:multiblock",
//                     anchor: "",
//                     multiblock_id: `occultism:${ritual_name}`,
//                     multiblock_name: "",
//                     show_visualize_button: true,
//                     text: "",
//                 },
//             ],
//             x: x_placement,
//             y: y_placement,
//         };

//         if (parents && parents.length > 0) {
//             entry.parents = parents;
//         }

//         return entry;
//     }
// });
