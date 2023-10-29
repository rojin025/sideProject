function init(){
    let currentYear = 2023;
    // running();

    //Fucntion expression
    const calcAge = function(birthYear){
        return currentYear - birthYear;
    }

    //Arrow Function
    const calcAgeArrow = birthYear => currentYear - birthYear;
    let age = console.log('Enter your age:');
    const x = calcAgeArrow(age);
    console.log(`Your age is ${x}`);

}

function running(){
    console.log("I am connected!");
}


window.onload = init;