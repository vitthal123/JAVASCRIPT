// 4. Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function lettersAphabeticalOrder(inputStr){
     let Seq=inputStr.split('').sort().join('');
     console.log(Seq);
}

lettersAphabeticalOrder('webmaster');
