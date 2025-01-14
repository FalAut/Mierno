/**
 * 转化playTime为天时分秒
 * @param {number} playTime
 * @returns
 */
function convertTime(playTime) {
    const totalSeconds = Math.floor(playTime / 20);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let result;
    if (seconds > 0) result = Text.translate("mierno.time.seconds", seconds.toFixed(0)).getString();
    if (minutes > 0) result = Text.translate("mierno.time.minutes", minutes.toFixed(0)).getString();
    if (hours > 0) result = Text.translate("mierno.time.hours", hours.toFixed(0)).getString();
    if (days > 0) result = Text.translate("mierno.time.days", days.toFixed(0)).getString();

    return result || "";
}
