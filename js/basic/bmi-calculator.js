main();

function main(){
    calculateBMI(86,1.96)
}

function calculateBMI(weight,height){
    let bmi = weight/(Math.pow(height,2));
    bmi = Math.round(bmi);
    console.log("BMI: " + bmi);
    classify(bmi);
}

function classify(bmi){
    if(bmi < 18.5){
        console.log("Underweight - BMI < 18.5");
    }else if(bmi < 24.9){
        console.log("Normal weight - BMI 18.5 to 24.9");
    }else if(bmi < 29.9){
        console.log("Overweight - BMI 25 to 29.9");
    }else{
        console.log("Obese - BMI > 30");
    }
}