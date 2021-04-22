var str = "The quick brown fox jumps over the lazy dog"
//full phrase
console.log(str);
//single slice
console.log(str.slice(4,19));
//multiple slices concatenated
var a = str.slice(0,4);
var b = str.slice(16,19);
console.log(a + b);