var x = 99;

while (x > 0) {
    console.log(x + " bottles of beer on the wall, " + x + " bottles of beer.");
    x--;
    if(x == 0){
        x = "no";
    }
    console.log("Take one down and pass it around, " + x + " bottles of beer on the wall.");
}

console.log(x + " bottles of beer on the wall, " + x + " bottles of beer.");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");