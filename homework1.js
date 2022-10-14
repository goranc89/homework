//1

a = 3
b = 4
c = 5

if (a==b==c) {
  result= "Triangle is equilateral"
} else if (a==b || b==c || a==c) {
    result= "Triangle is isoscalene"
    } else result = "Triangle is scalene"

    console.log(result)


//2

var one=10;
var two=5;
var a, s, m , d;

a= one + two;
s= one - two;
m= one * two;
d= one / two;
console.log("Results are " + a, s, m, d);

// 3
var b=50; 
var c=100;
var a=(b+c)/2;

if (a>=51 && a<=60) 
{result = "Grade E"}
else if (a>=61 && a<=70) 
{result = "Grade D"}
else if (a>=71 && a<=80) 
{result = "Grade C"}
else if (a>=81 && a<=90) 
{result = "Grade E"}
else if (a>=91 && a<=100) 
{result = "Grade E"}
else { result = "Student has failed the exam."}

console.log(result)

//4

var a=1;
var noun= "cat";

if (a>1) {
    result = a + " " + noun +"s";
} else {
    result = a + " " + noun ;
}
console.log(result);

//5

var age=13;
if(age>=18) 
{result ="You are old enough to drive";}
else (age<18) 
{result= "You need " + (18-age )+ " years to turn 18";}

console.log(result)

//6

var myAge=26;
var difference= age-myAge;
if(age>myAge)
{difference=age-myAge}
else {diference=myAge-age}

if(age == myAge)
{result = "We are the same age."}
else if(difference > 0 )
 {result = "He/She is "+ difference + " younger than me"}
else if ( difference < 0) 
{result ="He/She is "+ difference + " older than me"}

console.log(result)

//7

var a="Golden Retrieve";
var b="German Shepherd";
var c="Cavapoo";
var d= "Alaskan Klee Kai";
var e="Pomeranian";

var myDog="Pomeranian";
if (a==myDog) 
{result = "This is "  + a + " called Neo"}
else if (b==myDog) 
{result = "This is " + b  + " called Neo"}
else if (c==myDog) 
{result = "This is " + c +  " called Neo"}
else if (d==myDog)
 {result = "This is " + d + " called Neo"}
else if (e==myDog) 
{result = "This is " +  e  +" called Neo"}
else
{result = "This is a mixed breed"}

console.log(result)


