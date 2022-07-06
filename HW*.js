let age_2 = 18
let age_3 = 60

// 1) функция принимающая на вход возраст

const checkAge = function(age) {
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
}

checkAge(17)
checkAge(18)
checkAge(60)
checkAge(62)

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

// 4) возраст вводится используя функцию prompt в привязанной верстке

const checkAge4 = function(age) {
    if (age && !isNaN(age)) {
        if (age < age_2) {
            alert("You don’t have access cause your age is " + age + " It’s less then " + age_2)
        }
        else if (age >=  age_2 && age <  age_3) {
            alert("Welcome !") 
        }
        else if (age > age_3) {
            alert("Keep calm and look Culture channel")
        }
        else {
            alert("Technical work")
        }
    } else alert("Not an integer value")
}
let v = prompt('Enter your age')
checkAge4(v)
