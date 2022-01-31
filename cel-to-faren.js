// a function for celcius to farenheit 
function celToFaren(degree) {
    var farenheit = (degree * 9/5)+32;
    return farenheit;
}

// ex-1
var todayCelcius = 30;
var farenheit = celToFaren(todayCelcius);
console.log('todays celcius in farenheit :', farenheit) 
// ex-2
var farenheit = celToFaren(200);
console.log('200℃ to farenheit:', farenheit);
// ex-3
var farenheit = celToFaren(38.7);
console.log('38.7℃ to farenheit:', farenheit)