
let age_2 = 18
let age_3 = 60

//2) проверка типа данных, ошибка если не Number

const checkAge2 = function(age) {
    if (typeof(age) != "string") {
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
checkAge2(17)
checkAge2(18)
checkAge2(60)
checkAge2(62)
checkAge2("five")
checkAge2("")
