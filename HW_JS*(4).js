let age_2 = 18
let age_3 = 60

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