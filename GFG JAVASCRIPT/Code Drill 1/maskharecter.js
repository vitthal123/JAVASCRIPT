let CardNumber="8963254754627531";
let MaskCard=CardNumber.slice(0,CardNumber.length-4)+'#'.repeat(4);
console.log(MaskCard);