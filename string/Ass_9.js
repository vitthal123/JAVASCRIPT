// 10. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter.
//  It converts upper case letters to lower case, and lower case letters to upper case.

swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
// console.log(swapcase('AaBbc'));
console.log(swapcase('lbvAaBbc'));

