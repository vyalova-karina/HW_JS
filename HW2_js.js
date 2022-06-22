
// 1) скрипт, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

function pow1() {
    let result = 1;
    for (let i = 0; i < 10; i++) {
      result *= 2;
      console.log(result)
    }
}
pow1()

// 1*) Преобразовать предыдущую задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function pow2(b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= 2;
      console.log(result)
    }
}
pow2(10)

// 2) вывести треугольник из смайликов
function printSmiles() {
    let print = ":)";
    for (let i = 0; i < 5; i++) {
        let result = print
        for (let k = 0; k < i; k++){
            result += " " + print
        }
      console.log(result)
    }
}
printSmiles()

// 2*) Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 

function printSmile(print, numberOfRows) {
    for (let i = 0; i < numberOfRows; i++) {
        let result = print
        for (let k = 0; k < i; k++){
            result += " " + print
        }
      console.log(result)
    }
}
printSmile(8, 6)

//3** Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
  
function getWordStructure(word) {
    const vowel_list = "aeiou";
    const consonants_list = "bcdfghjklmnpqrstvwxyz";
    let vCount = 0;
    let cCount = 0;
    let lowerWord = word.toLowerCase()
    for(let i = 0; i < lowerWord.length ; i++) {
        if (vowel_list.indexOf(lowerWord[i]) !== -1) {
        vCount++;
        } else if (consonants_list.indexOf(lowerWord[i])!== -1) {
        cCount++;
        }
  
    }
    console.log("Слово " + "\"" + word + "\"" + " состоит из" + " " + vCount + " " + "гласных и" + " " + cCount + " согласных букв")
}

getWordStructure("Case");
getWordStructure("case");
getWordStructure("Check-list"); 

//4** Написать функцию, которая проверяет, является ли слово палиндромом 

function isPalindrom(word) { 
    return word.toLowerCase() == word.toLowerCase().split('').reverse().join('');
}
console.log(isPalindrom('abba'));
console.log(isPalindrom('Abba'));
console.log(isPalindrom('Ashot'));