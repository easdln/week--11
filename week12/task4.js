'use strict';


let button = document.querySelector('#btn');
let form = document.querySelector('.form')


button.addEventListener('click', evt => {
    //ввод имени
    let input = document.querySelector('.input').value.trim();
    if(input !== '') {
        let textTransform = input[0].toUpperCase() + input.slice(1).toLowerCase();
        input = textTransform;
    };
    let text = document.querySelector('.text');
    text.textContent = input;
    //ввод ссылки на картинку
    let img = document.querySelector('.img');
    let avatarSrc = document.querySelector('#avatar');
    img.src = avatarSrc.value;
    //замена слова в комментариях
    let textarea = document.querySelector('#comment');
    let comment = document.querySelector('.place__comment');
    let newText = textarea.value.replace(/viagra|XXX/gi, '***');
    comment.textContent = newText
    form.reset();
    evt.preventDefault()
});



// let str = {
//     'viagra': 'vvvvh', 
//     'XXX': 'bjvhj',};
// button.addEventListener('click', () => {
//     let regex = new RegExp(Object.keys(str).join("|"), "gi");
//     textarea = textarea.value.replace(regex, function(matched) {
//         return str[matched];
//     });
//     console.log(textarea);
//     comment.textContent = textarea;
// }
// )

