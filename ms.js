
function show(ms) {
    let seconds = ms / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let day = hours / 24;
    let year = day / 365;
    return (year,minutes,hours,day,seconds);
 }
 module.exports = show
