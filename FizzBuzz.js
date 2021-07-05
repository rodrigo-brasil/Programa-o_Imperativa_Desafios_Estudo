/* function fizzbuzz( num1, num2){
    for (let i = 1; i <= 100; i++) {
        if(multiplo(i,num1) && multiplo(i,num2))
            console.log("Fizzbuzz")
        else if( multiplo(i,num1)) 
            console.log("Fizz")
        else if( multiplo(i,num2)) 
            console.log("Buzz")
        else
            console.log(i)
    }
}


function multiplo(num , mult){
    if(num % mult == 0)   
        return true;
    else 
        return false;
}

fizzbuzz(2,3) */

function fizzbuzz(num1, num2) {
  for (let i = 1; i <= 100; i++) {
    if (multiplo(i, num1) && multiplo(i, num2)) console.log("FizzBuzz");
    else if (multiplo(i, num1)) console.log("Fizz");
    else if (multiplo(i, num2)) console.log("Buzz");
    else console.log(i);
  }
}

let multiplo = (num, mult) => {
  if (num % mult == 0) return true;
  else return false;
};

fizzbuzz(2,3)