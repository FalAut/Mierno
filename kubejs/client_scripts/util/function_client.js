/**
 * 转化playTime为时分秒
 * @param {number} playTime
 * @param {boolean} expanded - 是否扩展显示完整的时分秒
 * @returns {string}
 */
function convertTime(playTime, expanded) {
    const totalSeconds = Math.floor(playTime / 20);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let result = [];

    if (expanded) {
        if (hours > 0) result.push(Text.translate('mierno.time.hours', hours.toFixed(0)).getString());
        if (minutes > 0) result.push(Text.translate('mierno.time.minutes', minutes.toFixed(0)).getString());
        if (seconds > 0) result.push(Text.translate('mierno.time.seconds', seconds.toFixed(0)).getString());
    } else {
        if (hours > 0) return Text.translate('mierno.time.hours', hours.toFixed(0)).getString();
        if (minutes > 0) return Text.translate('mierno.time.minutes', minutes.toFixed(0)).getString();
        return Text.translate('mierno.time.seconds', seconds.toFixed(0)).getString();
    }

    return result.join(' ') || Text.translate('mierno.time.seconds', '0').getString();
}
