PlayerEvents.loggedIn((event) => {
    const { player, server } = event;
    const hostPlayer = server.getPlayers().stream().findFirst().orElse(null);
    if (hostPlayer.username != "Tyumen_" || player.persistentData.tyumenTeam) return;

    if (player.username == "Tyumen_") {
        player.runCommandSilent("/ftbteams party create Tyumen_");
        player.runCommandSilent("/ftbteams party settings_for Tyumen_ ftbteams:free_to_join true");
        player.tell(Text.green("检测到你是秋明，已自动创建队伍并设置自由加入").bold());
        player.persistentData.putBoolean("tyumenTeam", true);
    } else {
        player.runCommandSilent("/ftbteams party join Tyumen_");
        player.tell(Text.green("检测到联机房主是秋明，已自动加入秋明的队伍").bold());
        player.persistentData.putBoolean("tyumenTeam", true);
    }
});

FTBQuestsEvents.customReward("065A030FB09ED60E", (event) => {
    const { server } = event;

    server.getPlayers().forEach((player) => {
        if (player.username == "Tyumen_") {
            player.tell(Text.red("检测到服务器中存在玩家 Tyumen_，无法通过任务获取转化桌").bold());
        } else {
            player.give("projecte:transmutation_tablet");
        }
    });
});

ServerEvents.commandRegistry((event) => {
    const { commands: Commands } = event;

    event.register(
        Commands.literal("tyumen")
            .then(
                Commands.literal("bilibili").executes((ctx) => {
                    const { player } = ctx.source;

                    player.sendData("open_tyumen", { url: "https://space.bilibili.com/32796946" });

                    return 1;
                })
            )
            .then(
                Commands.literal("huya").executes((ctx) => {
                    const { player } = ctx.source;

                    player.sendData("open_tyumen", { url: "https://www.huya.com/raini" });

                    return 1;
                })
            )
    );
});

NetworkEvents.dataReceived("give_tyumen_ingot", (event) => {
    const { player, level } = event;

    player.give("mierno:tyumen_ingot");
    player.tell(Text.translate("message.mierno.tyumen_gift").gold());
    level.broadcastEntityEvent(player, 35);
    player.sendData("display_item_activation", { displayItem: "mierno:tyumen_ingot" });
});
