ServerEvents.recipes((event) => {
    const { kubejs } = event.recipes;

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            // 加法
            if (i + j <= 9) {
                kubejs
                    .shaped(`mierno:${i + j}`, ['ABC'], {
                        A: `mierno:${i}`,
                        B: Item.of('mierno:addition_sigil').enchant('mierno:activate', 1).weakNBT(),
                        C: `mierno:${j}`,
                    })
                    .keepIngredient('mierno:addition_sigil');
            }

            // 除法
            if (j != 0 && i % j == 0) {
                kubejs
                    .shaped(`mierno:${i / j}`, ['ABC'], {
                        A: `mierno:${i}`,
                        B: Item.of('mierno:division_sigil').enchant('mierno:activate', 1).weakNBT(),
                        C: `mierno:${j}`,
                    })
                    .keepIngredient('mierno:division_sigil');
            }

            // 减法
            if (i - j >= 0) {
                kubejs
                    .shaped(`mierno:${i - j}`, ['ABC'], {
                        A: `mierno:${i}`,
                        B: Item.of('mierno:subtraction_sigil').enchant('mierno:activate', 1).weakNBT(),
                        C: `mierno:${j}`,
                    })
                    .keepIngredient('mierno:subtraction_sigil');
            }

            // 乘法
            if (i * j <= 9) {
                kubejs
                    .shaped(`mierno:${i * j}`, ['ABC'], {
                        A: `mierno:${i}`,
                        B: Item.of('mierno:multiplication_sigil').enchant('mierno:activate', 1).weakNBT(),
                        C: `mierno:${j}`,
                    })
                    .keepIngredient('mierno:multiplication_sigil');
            }
        }
    }
});
