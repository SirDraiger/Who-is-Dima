let button = document.querySelector('.button');
let answer = document.querySelector('.answer');
let fon = document.querySelector('.fon');
let photo = document.querySelector('.photo');
let question = document.querySelector('.question')
let song = new Audio();

button.addEventListener('click', function() {
    console.log('Диман пивосос');
    answer.textContent = 'Диман пивосос'
    fon.style.backgroundImage = "url(img/pivo.jpg)";
    fon.style.color = "black";
    photo.src = "img/dima.jpg";
    photo.style.height = "700px";
    photo.style.border = "solid rgb(238, 44, 77) 5px";
    button.style.border = "1px solid black";
    button.style.display = "none";
    question.style.display = "none";
    song.src = 'song.mp3';
    song.autoplay = true;
    song.loop = true;
})
