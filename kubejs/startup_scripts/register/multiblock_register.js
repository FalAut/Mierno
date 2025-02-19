StartupEvents.postInit((event) => {
    let BLOCK = $ResourceKey.createRegistryKey('block');

    $PatchouliAPI.registerMultiblock(
        'mierno:first_tree',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '__A__', '_AAA_', '__A__', '_____'],
                ['_____', '_AAA_', '_ABA_', '_AAA_', '_____'],
                ['AAAAA', 'AAAAA', 'AABAA', 'AAAAA', 'AAAAA'],
                ['AAAAA', 'AAAAA', 'AABAA', 'AAAAA', 'AAAAA'],
                ['_____', '_____', '__B__', '_____', '_____'],
                ['_____', '_____', '__B__', '_____', '_____'],
                ['_____', '_____', '__0__', '_____', '_____'],
            ],
            new $Character('0'),
            Blocks.WHITE_CONCRETE,
            new $Character('A'),
            Blocks.GRAY_CONCRETE,
            new $Character('B'),
            Blocks.WHITE_CONCRETE
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:misty_forest_portal_1',
        $PatchouliAPI.makeMultiblock(
            [
                ['___AA___', '________', '________', 'A______A', 'A______A', '________', '________', '___AA___'],
                ['__ACCA__', '________', 'A______A', 'C______C', 'C______C', 'A______A', '________', '__ACCA__'],
                ['___CC___', '________', '________', 'C______C', 'C______C', '________', '________', '___CC___'],
                ['___CC___', '________', '___FF___', 'C_F__F_C', 'C_F__F_C', '___FF___', '________', '___CC___'],
                ['___CC___', '__BBBB__', '_BBDDBB_', 'CBD0EDBC', 'CBDEEDBC', '_BBDDBB_', '__BBBB__', '___CC___'],
                ['_AACCAA_', 'AACCCCAA', 'ACCCCCCA', 'CCCCCCCC', 'CCCCCCCC', 'ACCCCCCA', 'AACCCCAA', '_AACCAA_'],
            ],
            new $Character('A'),
            Block.getBlock('naturesaura:infused_brick_stairs'),
            new $Character('B'),
            Block.getBlock('naturesaura:ancient_stairs'),
            new $Character('C'),
            Block.getBlock('naturesaura:infused_brick'),
            new $Character('D'),
            Block.getBlock('minecraft:grass_block'),
            new $Character('E'),
            Block.getBlock('minecraft:water'),
            new $Character('F'),
            Block.getBlock('naturesaura:aura_bloom'),
            new $Character('0'),
            Block.getBlock('minecraft:water')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:misty_forest_portal_2',
        $PatchouliAPI.makeMultiblock(
            [
                ['___AA___', '________', '________', 'A______A', 'A______A', '________', '________', '___AA___'],
                ['__ACCA__', '________', 'A______A', 'C______C', 'C______C', 'A______A', '________', '__ACCA__'],
                ['___CC___', '________', '________', 'C______C', 'C______C', '________', '________', '___CC___'],
                ['___CC___', '________', '___FF___', 'C_F__F_C', 'C_F__F_C', '___FF___', '________', '___CC___'],
                ['___CC___', '__BBBB__', '_BBDDBB_', 'CBDE0DBC', 'CBDEEDBC', '_BBDDBB_', '__BBBB__', '___CC___'],
                ['_AACCAA_', 'AACCCCAA', 'ACCCCCCA', 'CCCCCCCC', 'CCCCCCCC', 'ACCCCCCA', 'AACCCCAA', '_AACCAA_'],
            ],
            new $Character('A'),
            Block.getBlock('naturesaura:infused_brick_stairs'),
            new $Character('B'),
            Block.getBlock('naturesaura:ancient_stairs'),
            new $Character('C'),
            Block.getBlock('naturesaura:infused_brick'),
            new $Character('D'),
            Block.getBlock('minecraft:grass_block'),
            new $Character('E'),
            Block.getBlock('minecraft:water'),
            new $Character('F'),
            Block.getBlock('naturesaura:aura_bloom'),
            new $Character('0'),
            Block.getBlock('minecraft:water')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:misty_forest_portal_3',
        $PatchouliAPI.makeMultiblock(
            [
                ['___AA___', '________', '________', 'A______A', 'A______A', '________', '________', '___AA___'],
                ['__ACCA__', '________', 'A______A', 'C______C', 'C______C', 'A______A', '________', '__ACCA__'],
                ['___CC___', '________', '________', 'C______C', 'C______C', '________', '________', '___CC___'],
                ['___CC___', '________', '___FF___', 'C_F__F_C', 'C_F__F_C', '___FF___', '________', '___CC___'],
                ['___CC___', '__BBBB__', '_BBDDBB_', 'CBDEEDBC', 'CBD0EDBC', '_BBDDBB_', '__BBBB__', '___CC___'],
                ['_AACCAA_', 'AACCCCAA', 'ACCCCCCA', 'CCCCCCCC', 'CCCCCCCC', 'ACCCCCCA', 'AACCCCAA', '_AACCAA_'],
            ],
            new $Character('A'),
            Block.getBlock('naturesaura:infused_brick_stairs'),
            new $Character('B'),
            Block.getBlock('naturesaura:ancient_stairs'),
            new $Character('C'),
            Block.getBlock('naturesaura:infused_brick'),
            new $Character('D'),
            Block.getBlock('minecraft:grass_block'),
            new $Character('E'),
            Block.getBlock('minecraft:water'),
            new $Character('F'),
            Block.getBlock('naturesaura:aura_bloom'),
            new $Character('0'),
            Block.getBlock('minecraft:water')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:misty_forest_portal_4',
        $PatchouliAPI.makeMultiblock(
            [
                ['___AA___', '________', '________', 'A______A', 'A______A', '________', '________', '___AA___'],
                ['__ACCA__', '________', 'A______A', 'C______C', 'C______C', 'A______A', '________', '__ACCA__'],
                ['___CC___', '________', '________', 'C______C', 'C______C', '________', '________', '___CC___'],
                ['___CC___', '________', '___FF___', 'C_F__F_C', 'C_F__F_C', '___FF___', '________', '___CC___'],
                ['___CC___', '__BBBB__', '_BBDDBB_', 'CBDEEDBC', 'CBDE0DBC', '_BBDDBB_', '__BBBB__', '___CC___'],
                ['_AACCAA_', 'AACCCCAA', 'ACCCCCCA', 'CCCCCCCC', 'CCCCCCCC', 'ACCCCCCA', 'AACCCCAA', '_AACCAA_'],
            ],
            new $Character('A'),
            Block.getBlock('naturesaura:infused_brick_stairs'),
            new $Character('B'),
            Block.getBlock('naturesaura:ancient_stairs'),
            new $Character('C'),
            Block.getBlock('naturesaura:infused_brick'),
            new $Character('D'),
            Block.getBlock('minecraft:grass_block'),
            new $Character('E'),
            Block.getBlock('minecraft:water'),
            new $Character('F'),
            Block.getBlock('naturesaura:aura_bloom'),
            new $Character('0'),
            Block.getBlock('minecraft:water')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:ancient_aura_generator',
        $PatchouliAPI.makeMultiblock(
            [
                ['_______', '_______', '_______', '___A___', '_______', '_______', '_______'],
                ['_______', '___A___', '_______', '_A___A_', '_______', '___A___', '_______'],
                ['_______', '_______', '_______', '_______', '_______', '_______', '_______'],
                ['___A___', '_A___A_', '_______', 'A__0__A', '_______', '_A___A_', '___A___'],
                ['_______', '_______', '_______', '_______', '_______', '_______', '_______'],
                ['_______', '___A___', '_______', '_A___A_', '_______', '___A___', '_______'],
                ['_______', '_______', '_______', '___A___', '_______', '_______', '_______'],
            ],
            new $Character('A'),
            Block.getBlock('naturesaura:ancient_bark'),
            new $Character('0'),
            Block.getBlock('mierno:ancient_aura_generator_core')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:addition_sigil_activation_ritual',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_BBB_', '_B0B_', '_BBB_', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
            ],
            new $Character('0'),
            Block.getBlock('minecraft:crafting_table'),
            new $Character('A'),
            Block.getBlock('minecraft:dirt'),
            new $Character('B'),
            Block.getBlock('minecraft:redstone_wire')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:division_sigil_activation_ritual',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_BBB_', '_B0B_', '_BBB_', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
            ],
            new $Character('0'),
            Block.getBlock('minecraft:enchanting_table'),
            new $Character('A'),
            Block.getBlock('minecraft:dirt'),
            new $Character('B'),
            Block.getBlock('minecraft:redstone_wire')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:subtraction_sigil_activation_ritual',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_BBB_', '_B0B_', '_BBB_', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
            ],
            new $Character('0'),
            Block.getBlock('minecraft:respawn_anchor'),
            new $Character('A'),
            Block.getBlock('minecraft:dirt'),
            new $Character('B'),
            Block.getBlock('minecraft:redstone_wire')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:multiplication_sigil_activation_ritual',
        $PatchouliAPI.makeMultiblock(
            [
                ['_____', '_BBB_', '_B0B_', '_BBB_', '_____'],
                ['AAAAA', 'AAAAA', 'AAAAA', 'AAAAA', 'AAAAA'],
            ],
            new $Character('0'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'minecraft:cauldrons')),
            new $Character('A'),
            Block.getBlock('minecraft:dirt'),
            new $Character('B'),
            Block.getBlock('minecraft:redstone_wire')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:terrestrial_agglomeration_altar',
        $PatchouliAPI.makeMultiblock(
            [
                ['___Z___', '_______', '_______', 'Z_____Z', '_______', '_______', '___Z___'],
                ['___E___', '_______', '_______', 'E_____E', '_______', '_______', '___E___'],
                ['___D___', '_______', '_______', 'N_____O', '_______', '_______', '___T___'],
                ['___C___', '_______', '_______', 'K_____M', '_______', '_______', '___S___'],
                ['___C___', '_______', '_______', 'K__L__M', '_______', '_______', '___S___'],
                ['__AAA__', '_AGGGA_', 'AHGGIIA', 'AHH0IIA', 'AHHRRIA', '_ARRRA_', '__AAA__'],
            ],
            new $Character('0'),
            $PatchouliAPI.anyMatcher(),
            new $Character('N'),
            Block.getBlock('ars_nouveau:purple_archwood_leaves'),
            new $Character('K'),
            Block.getBlock('ars_nouveau:purple_archwood_log'),
            new $Character('O'),
            Block.getBlock('ars_nouveau:blue_archwood_leaves'),
            new $Character('M'),
            Block.getBlock('ars_nouveau:blue_archwood_log'),
            new $Character('T'),
            Block.getBlock('ars_nouveau:red_archwood_leaves'),
            new $Character('S'),
            Block.getBlock('ars_nouveau:red_archwood_log'),
            new $Character('D'),
            Block.getBlock('ars_nouveau:green_archwood_leaves'),
            new $Character('C'),
            Block.getBlock('ars_nouveau:green_archwood_log'),
            new $Character('A'),
            $PatchouliAPI.tagMatcher($TagKey.create(BLOCK, 'mierno:terra_altar_frame')),
            new $Character('E'),
            Block.getBlock('botania:mana_pylon'),
            new $Character('L'),
            Block.getBlock('botania:terra_plate'),
            new $Character('I'),
            Block.getBlock('botania:infused_grass'),
            new $Character('H'),
            Block.getBlock('botania:mutated_grass'),
            new $Character('R'),
            Block.getBlock('botania:scorched_grass'),
            new $Character('G'),
            Block.getBlock('botania:vivid_grass'),
            new $Character('Z'),
            Block.getBlock('botania:light_relay')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:demon_reactor',
        $PatchouliAPI.makeMultiblock(
            [
                ['_D_', 'DDD', '_D_'],
                ['C_C', '_0_', 'C_C'],
                ['ABA', 'BBB', 'ABA'],
            ],
            new $Character('0'),
            Block.getBlock('bloodmagic:dungeon_eye'),
            new $Character('A'),
            Block.getBlock('bloodmagic:dungeon_alternator'),
            new $Character('B'),
            Block.getBlock('bloodmagic:dungeon_polished'),
            new $Character('C'),
            Block.getBlock('bloodmagic:dungeon_polished'),
            new $Character('D'),
            Block.getBlock('bloodmagic:dungeon_polished')
        )
    );

    $PatchouliAPI.registerMultiblock(
        'mierno:psu_inver_ritual',
        $PatchouliAPI.makeMultiblock(
            [
                [
                    'TRRRRRRRR',
                    'TRTTTTTTT',
                    'TRTRRRRRT',
                    'TRTRTTTRT',
                    'TRTR0RTRT',
                    'TRTTTRTRT',
                    'TRRRRRTRT',
                    'TTTTTTTRT',
                    'RRRRRRRRT',
                ],
            ],
            new $Character('0'),
            Blocks.BEACON,
            new $Character('R'),
            Blocks.REDSTONE_WIRE,
            new $Character('T'),
            Blocks.TRIPWIRE
        )
    );
});
