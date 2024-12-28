StartupEvents.postInit((event) => {
    let $FluidInteractionRegistry = Java.loadClass("net.minecraftforge.fluids.FluidInteractionRegistry");
    let II = Java.loadClass("net.minecraftforge.fluids.FluidInteractionRegistry$InteractionInformation").__javaObject__;
    let FI = Java.loadClass("net.minecraftforge.fluids.FluidInteractionRegistry$FluidInteraction").__javaObject__;
    let HI = Java.loadClass("net.minecraftforge.fluids.FluidInteractionRegistry$HasFluidInteraction").__javaObject__;
    let context = $KubeJS.getStartupScriptManager().context;

    /**
     * @param {Internal.FluidType_} fluidType
     * @param {(level: Internal.Level_, currentPos: BlockPos_, relativePos: BlockPos_, currentState: Internal.FluidState_) => boolean} hasFluidInteration
     * @param {(level: Internal.Level_, currentPos: BlockPos_, relativePos: BlockPos_, currentState: Internal.FluidState_) => void} fluidInteration
     */
    function registerFluidInteraction(fluidType, hasFluidInteration, fluidInteration) {
        $FluidInteractionRegistry.addInteraction(
            fluidType,
            II.getConstructor(HI, FI).newInstance(
                $Context.jsToJava(context, hasFluidInteration, HI),
                $Context.jsToJava(context, fluidInteration, FI)
            )
        );
    }

    /**
     * @param {Special.Block} outputBlock
     * @param {Special.Block} inputBlock
     * @param {Internal.Fluid_} fluid
     */
    function blockGen(outputBlock, inputBlock, fluid) {
        registerFluidInteraction(
            Fluid.of(fluid).fluid.fluidType,
            (level, currentPos, relativePos, currentState) => {
                const directions = [
                    currentPos.north(),
                    currentPos.south(),
                    currentPos.east(),
                    currentPos.west(),
                    currentPos.below(),
                ];

                for (let direction of directions) {
                    if (level.getBlockState(direction).is(Block.getBlock(inputBlock))) {
                        return true;
                    }
                }
                return false;
            },
            (level, currentPos, relativePos, currentState) => {
                level.setBlockAndUpdate(currentPos, Block.getBlock(outputBlock).defaultBlockState());
            }
        );
    }

    blockGen("iron_ore", "iron_block", "mierno:gensousitu");
    blockGen("gold_ore", "gold_block", "mierno:gensousitu");
    blockGen("diamond_ore", "diamond_block", "mierno:gensousitu");
    blockGen("lapis_ore", "lapis_block", "mierno:gensousitu");
    blockGen("emerald_ore", "emerald_block", "mierno:gensousitu");
    blockGen("coal_ore", "coal_block", "mierno:gensousitu");
    blockGen("redstone_ore", "redstone_block", "mierno:gensousitu");
    blockGen("copper_ore", "copper_block", "mierno:gensousitu");
    blockGen("copper_ore", "exposed_copper", "mierno:gensousitu");
    blockGen("copper_ore", "weathered_copper", "mierno:gensousitu");
    blockGen("copper_ore", "oxidized_copper", "mierno:gensousitu");
    blockGen("ancient_debris", "netherite_block", "mierno:gensousitu");
    blockGen("obsidian", "crying_obsidian", "mierno:gensousitu");
});
