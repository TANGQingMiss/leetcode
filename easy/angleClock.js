/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
//给你两个数 hour 和 minutes 。请你返回在时钟上，由给定时间的时针和分针组成的较小角的角度（60 单位制）
var angleClock = function(hour, minutes) {
    let h = hour * 30 + minutes * 0.5;
    let m = minutes * 6;
    let diff = Math.abs(h-m);
    return diff > 180 ? 360 - diff : diff;
};
