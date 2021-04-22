fibonacciGenerator(100);

function fibonacciGenerator(n){
    let arr = [0,1];
    for (let index = (n - 2); index > 0; index--){
        let valueOne = arr[arr.length-1];
        let valueTwo = arr[arr.length-2];
        arr.push(valueOne + valueTwo);
    }
    console.log(arr);
}
