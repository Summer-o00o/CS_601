const getRandomPosition = () => {
    return Math.floor(Math.random() * 4) + 1;
};

let yesButton;
let noButton;

const findDog = async () => {
    let response = await fetch("https://dog.ceo/api/breeds/image/random/3");
    let data = await response.json();
    let { message } = data;
    let correctPhotoPosition = getRandomPosition();
    let correctPhoto = document.getElementById(correctPhotoPosition);
    correctPhoto.setAttribute("src", "./image/Amber_400x300.jpg");
    let otherPhoto;
    for (let i = 1; i <= 4; i++) {
        if (i != correctPhotoPosition) {
            otherPhoto = document.getElementById(i);
            otherPhoto.setAttribute("src", message.pop());
        }
    }

    const photo1 = document.getElementById("1");
    const photo2 = document.getElementById("2");
    const photo3 = document.getElementById("3");
    const photo4 = document.getElementById("4");
    const figcaption = document.getElementById('figcaption');
    const instruction = document.getElementById('game-instruction');
    const photoList = [photo1, photo2, photo3, photo4];
    photo1.classList.toggle('hide');
    photo2.classList.toggle('hide');
    photo3.classList.toggle('hide');
    photo4.classList.toggle('hide');
    figcaption.classList.toggle('hide');
    instruction.classList.toggle('hide');


    const ifCorrect = (element) => {
        let ID = element.getAttribute("id");
        let wrongMessage = document.getElementById("wrong");
        if (ID != correctPhotoPosition) {
            element.style.display = "none";
            alert("This is not Amber, please guess again!");
        } else {
            photoList.forEach(eachPhoto => {
                if (eachPhoto.getAttribute("id") != correctPhotoPosition) {
                    eachPhoto.style.display = "none";
                }
            });
            figcaption.innerText = "Correct! This is Amber!";
            document.getElementById('cute-Amber').classList.toggle('hide', false);
            instruction.classList.toggle('hide', true);
        }
    };

    yesButton.classList.toggle('hide');
    noButton.classList.toggle('hide');
    document.getElementById("if-game").classList.toggle('hide');
    photo1.addEventListener("click", function () {
        ifCorrect(photo1);
    });
    photo2.addEventListener("click", function () {
        ifCorrect(photo2);
    });
    photo3.addEventListener("click", function () {
        ifCorrect(photo3);
    });
    photo4.addEventListener("click", function () {
        ifCorrect(photo4);
    });
};

const showAmber = () => {
    const photo1 = document.getElementById('1');
    const photo2 = document.getElementById("2");
    const instruction = document.getElementById('game-instruction');
    photo1.setAttribute("src", "./image/Amber_400x300.jpg");
    photo2.setAttribute("src", "./image/Amber_2JPG_400x300.jpg");
    figcaption.innerText = "Amber tries to be cute!";
    photo1.classList.toggle('hide');
    photo2.classList.toggle('hide');
    figcaption.classList.toggle('hide');
    document.getElementById('cute-Amber').classList.toggle('hide');
    yesButton.classList.toggle('hide');
    noButton.classList.toggle('hide');
    document.getElementById("if-game").classList.toggle('hide');
    instruction.classList.toggle('hide', true);
};




window.addEventListener("DOMContentLoaded", function () {
    yesButton = document.getElementById('yes-button');
    noButton = document.getElementById('no-button');
    yesButton.addEventListener('click', findDog);
    noButton.addEventListener('click', showAmber);
});

