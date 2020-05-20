let ms = +prompt("enter the milliseconds");
function show() {
    let seconds = ms / 1000;
    console.log("in seconds : ",seconds);
    let minutes = seconds / 60;
    console.log("in minutes : ",minutes);
    let hours = minutes / 60;
    console.log("in hours : ",hours);
    let day = hours / 24;
    console.log("in days : ",day);
    let year = day / 365;
    console.log("in years : ",year);
    return (seconds,minutes,hours,day,year);
 }
