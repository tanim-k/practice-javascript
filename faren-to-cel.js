// a function for  converting farenheit(℉) to celcius(℃)00..
function farenToCel(Ο) {
    var celcius = (Ο-32)*5/9
    return celcius;
}
// ex-1
var todaysFarenheit = 32;
var celcius = farenToCel(todaysFarenheit);
console.log('32℉=', celcius)

// ex-2
var yesterdaysFaren = 89;
var celcius = farenToCel(yesterdaysFaren);
console.log('89℉=', celcius);

// ex-3
var celcius = farenToCel(10);
console.log('10℉=', celcius);

