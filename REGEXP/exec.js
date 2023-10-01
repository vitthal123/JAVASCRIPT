function geek() {
    let str =
        "GeeksforGeeks is the " +
        "computer science portal for geeks.";
 
    let regex = new RegExp("computer",);
    // match "computer" in string.                      
    let rex = regex.exec(str);
    // console.log(rex.length);
    console.log(rex)
}
geek()