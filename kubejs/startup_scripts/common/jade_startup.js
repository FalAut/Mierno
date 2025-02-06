JadeEvents.onCommonRegistration((event) => {
    const manaMethods = ['currentMana', 'maxMana', 'mana', 'manaToGet'];

    event.blockDataProvider('mierno:numerical_mana', $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity } = accessor;

        manaMethods.forEach((key) => {
            if (blockEntity[key] != null) {
                tag.putInt(key, blockEntity[key]);
            }
        });
    });

    event.blockDataProvider('mierno:numerical_source', $BlockEntity).setCallback((tag, accessor) => {
        const { blockEntity, block } = accessor;

        if (blockEntity.source != null) {
            tag.putInt('source', blockEntity.source);
        }

        if (block.id == 'mierno:source_flower' || block.id == 'mierno:flowing_source_flower') {
            tag.putInt('source', blockEntity.persistentData.getInt('source'));
        }
    });
});
