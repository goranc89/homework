//SWITCH
//1

var day = "Monday"
var result = ""

switch (day) {
    case "Monday":
        result = "Today is Monday"
        break;
    case "Tuesday":
        result = "Today is Tuesday"
        break
    case "Wednesday":
        result = "Today is Wednesday"
        break
    case "Thursday":
        result = "Today is Thursday"
        break    
    case "Friday":
        result = "Today is Friday"
        break
    case "Saturday":
            result = "Today is Saturday"
            break    
    case "Sunday":
        result = "Today is Sunday"
        break

    default:
        result ="I am not sure"
        break;
}
console.log(result)

//2

var day = 10
var result = ""

switch (day) {

case 1:
    result = "Today is Monday"
    break;
case 2:
    result = "Today is Tuesday"
    break
case 3:
    result = "Today is Wednesday"
    break
case 4:
    result = "Today is Thursday"
    break    
case 5:
    result = "Today is Friday"
    break
case 6:
        result = "Today is Saturday"
        break    
case 7:
    result = "Today is Sunday"

    default:
        result ="Input must be a number between 1 to 7"
        break;
}

console.log(result)

//3

var day = 7
var result = ""

switch (day) {
    case 1:
    case 2:
    case 3:   
    case 4:   
    case 5:   
        result = "It is  weekday"
        break;

    case 6:
    case 7:
        result = "It is weekend"
        break

    default:
        result ="Input must be a number between 1 to 7"
        break;
}

//4

var month = 6
var result = ""

switch (month) {
    case 1:
        result = "January"
        break;
    case 2:
        result = "February"
        break
    case 3:
            result = "March"
            break
    case 4:
            result = "April"
            break
    case 5:
            result = "May"
            break 
    case 6:
            result = "June"
            break 
    case 7:
            result = "July"
            break 
    case 8:
            result = "August"
            break 
    case 9:
            result = "September"
            break       
    case 10:
        result = "October"
        break
    case 11:
        result = "November"
        break
    case 12:
        result = "December"
        break

    default:
        result ="Input must be a number between 1 to 12"
        break;
}


console.log(result)

//5

var month = 7
var result = ""

switch (day) {
    case 1:
    case 2:
    case 3:         
        result = "It is winter"
        break;
    case 4:
    case 5:
    case 6:        
         result = "It is spring"
         break;
    case 7:
    case 8:
    case 9:        
         result = "It is summer"
         break;        
    case 10:
    case 11:     
    case 12:     
         result = "It is autumun"
         break
    default:
        result ="Input must be a number between 1 to 12"
        break;
}

console.log(result)

//6 

var grade = "F"
var result = ""

switch (grade) {
    case 1:
        result = "January"
        break;
    case "B":
        result = "Pretty good"
        break
    case "C":
            result = "Passed"
            break
    case "D":
            result = "Not so good"
            break
    
    case "F":
        result = "Failed"
        break

    default:
        result = "Unknown grade"
        break;
}


console.log(result)

//7

var city = "Beograd"
var result = ""

switch (city) {
    case "Beograd":
    case "Leskovac":
    case "Nis":   
    case "Kragujevac":    
        result = "This city belongs to Serbia"
        break;

    case "Berlin":
    case "Hamburg":
        result = "This city belongs to Germany"
        break

    case "Rome":
    case "Milan":
        result = "This city belongs to Italia"
        break
    case "Geneva":
    case "Lucerne":
    case "Bern":
        result = "This city belongs to Switzerland"
        break

    case "Vienna":
    case "Linz":
    case "Vilach":   
    case "Baden bei Wien":    
         result = "This city belongs to Austria"
         break;

    default:
        result ="Please choose a different city"
        break;
}
console.log(result)

//8

var num1 = 8
var num2 = 2
var operation = "/"
var result = ""


switch (operation) {
    case "+":
        result = num1+num2
        break;

    case "-":
        result = num1-num2
        break;

    case "*":
        result = num1*num2
        break;
    case "/":
        switch (num2) {
        case 0 :
            result = "The quotient cannot be 0, please choose another number"   
            break;
        
        default:
            result = num1/num2
            break;

 }  }


console.log(result)

//ARRAY

//1

var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(month[0])
console.log(month[5])
console.log(month[9])

//2

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];

console.log(days[6])


//3

var numbers = [2, -4, 5, -2, 11]
 var negativeNumber= []

 for (i = 0; i < numbers.length; i++) 
    if (numbers[i] < 0) {
        negativeNumber.push(numbers[i]);
    }
 
 console.log(negativeNumber)
