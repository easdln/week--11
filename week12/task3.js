'use strict';

let str = 'а, б, в, г, д, е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я';
let alphabet = str.replace(/\s/g , '')
let alphabet1 = str.split(',')
console.log(alphabet1);

function generateRandomWord() {
    let randomWord = '';
    for (let i = 0; i < 4; i++){
        let randomIndex = Math.floor(Math.random() * alphabet1.length);
        randomWord += alphabet1[randomIndex];
    }
    return randomWord
}
let randomWord = generateRandomWord();
console.log(randomWord);





/*
let arr2 = [];
for (let i = 0; i < 4; i++){
    let newArr = randomIndex(alphabet1);
    arr2.push(newArr)
}
console.log(arr2);
console.log(arr2[1])*/