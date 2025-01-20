StartupEvents.registry("mekanism:infuse_type", (event) => {
    event.createCustom("mierno:etching_acid", () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x35b639)));
    event.createCustom("mierno:deorum", () => new $InfuseType($InfuseTypeBuilder.builder().tint(0xffed4c)));
    event.createCustom("mierno:etrium", () => new $InfuseType($InfuseTypeBuilder.builder().tint(0x7cffda)));
});
