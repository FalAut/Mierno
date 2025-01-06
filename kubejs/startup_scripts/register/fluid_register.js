StartupEvents.registry("fluid", (event) => {
    const gensousitu = event.create("mierno:gensousitu").thinTexture(0xffffff);
    gensousitu.attributes = gensousitu.createAttributes().convertToSource(true);

    event.create("mierno:liquid_mana").thinTexture(0x87ceeb);
    event.create("mierno:liquid_source").thinTexture(0x800080);
    event.create("mierno:molten_ender").thinTexture(0x0f594d);
    event.create("mierno:molten_lumium");
    event.create("mierno:molten_signalum");
    event.create("mierno:ether_memory_source");
    event.create("mierno:pink_memory_source");
});
