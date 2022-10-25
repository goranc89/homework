suma = 0

for(let i=0; i <=10 ; i++){

suma += i;
}

console.log("The sum of first 10 natural numbers is: "+ suma);


//2.

let n=3;

for(let i=1; i<=n; i++){

var cube= i*i*i;
}

console.log(cube + " je kubni stepen od broja " + n);

/////////////////////////////////////////////////////////
//Komentar: zbog cega ides od i=1 i zbog cega ides i*i*i? :)
///////////////////////////////////////////////////




//3


let broj = 5;

let factorial = 1;


for(let i = 1; i<=broj; i++){

 factorial = factorial*i;

}

console.log (factorial + " je factorijal broja " + broj)

//4


for (i=1; i<=10 ; i++){
    if(i%2 == 0){
        console.log(i);
    }
}


//5


var number=232;
var sum=0;
var digit=0;


while(number>0){

 digit = number%10;
sum += digit;
number=(number - digit) /10;

}
console.log("Zbir brojeva je: " + sum);



//6

var word = "Eclip542se";
    var sumLetters = word.length;

    for (var index in word) {
      if (
        word[index] === "0" ||
        word[index] === "1" ||
        word[index] === "2" ||
        word[index] === "3" ||
        word[index] === "4" ||
        word[index] === "5" ||
        word[index] === "6" ||
        word[index] === "7" ||
        word[index] === "8" ||
        word[index] === "9"
      ) {
        sumLetters--;
      }
    }

    console.log("Postoje  " + sumLetters + " slova u reci " + word);


//7


let nizArray=[1, 3, 32, '$', 'g',' h', 't', 's', 'c', 66, 23, 'h2'];


for(let i=0; i<nizArray.length;i++){

 if(nizArray[i] === 'c'){

} 

}

 console.log("Slovo 'c' je na indeksu " + index + " u nizu")
