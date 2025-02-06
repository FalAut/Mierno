ItemEvents.modelProperties((event) => {
    event.register('mierno:sun_crystal', 'mierno:solar', (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains('Solar') ? stack.nbt.getInt('Solar') / 100 : 0
    );

    event.register('mierno:moon_stone', 'mierno:lunar', (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains('Lunar') ? stack.nbt.getInt('Lunar') / 100 : 0
    );

    event.register('mierno:unstable_ingot', 'mierno:stable', (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains('Stable') ? stack.nbt.getInt('Stable') / 100 : 0
    );

    event.register(
        [
            'mierno:addition_sigil',
            'mierno:subtraction_sigil',
            'mierno:multiplication_sigil',
            'mierno:division_sigil',
            'mierno:pseudo_inversion_sigil',
        ],
        'mierno:activate',
        (stack, world, living, seed) => (stack.hasEnchantment('mierno:activate', 1) ? 1 : 0)
    );
});
