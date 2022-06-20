
let age_2 = 18
let age_3 = 60

// 3) строка в которой лежит число пропускается, преобразовываясь в number

const checkAge3 = function(age) {
    if (age && !isNaN(age)) {
        if (age < age_2) {
            console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
        }
        else if (age >=  age_2 && age <  age_3) {
            console.log("Welcome !") 
        }
        else if (age > age_3) {
            console.log("Keep calm and look Culture channel")
        }
        else {
            console.log("Technical work")
        }
    } else console.log("Not an integer value")
}
checkAge3(17)
checkAge3(18)
checkAge3("62")
checkAge3("five")
