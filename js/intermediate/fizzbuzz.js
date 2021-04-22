var output = [0];
var count = 1;

while (count <= 100) {
    fizzBuzz();
}

function fizzBuzz(){
    //output.push(count);
    //count++;
    if(count%3 === 0){
        output.push("Fizz");
        if(count%5 === 0){
            output.push("FizzBuzz");
        }
    }else if(count%5 === 0){
        output.push("Buzz");
    }else{
        output.push(count);
    }
    count++;
    console.log(output);
}
