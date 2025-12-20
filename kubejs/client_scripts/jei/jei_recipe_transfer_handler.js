JEIAddedEvents.registerRecipeTransferHandlers((event) => {
    // 大家好，欢迎来到我的自行车之旅。
    event.data.addRecipeTransferHandler(
        $ModularUIContainer, // containerclass 这个配方传输处理程序所针对的容器的类
        $ModularUIContainer.MENUTYPE, //  menuType 此配方传输处理程序用于的容器的可选菜单类型
        ENGRAVING_RECIPE_TYPE, // recipeType 此容器可以使用的配方类型
        0, // recipeSlotStart 用于配方输入的第一个槽
        9, // recipeSlotCount 用于配方输入的槽数
        10, // inventorySlotStart 背包可用的第一个插槽，通常就把上面参数（recipeSlotCount）+ 1就好了，比如上面那个是9，这里是10
        36 // inventorySlotCount 背包可用的槽数，通常都是36（玩家背包槽位总数）
    );
    // 其实还不如去看JEI的JavaDoc
});
