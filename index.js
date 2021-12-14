const leftImageRandomGen = Math.floor(Math.random() * 6) + 1;
const rightImageRandomGen = Math.floor(Math.random() * 6) + 1;

const leftImage = document.getElementById("left-image");
const rightImage = document.getElementById("right-image");

leftImage.setAttribute('src', 'images/dice' + leftImageRandomGen + '.png');
rightImage.setAttribute('src', 'images/dice' + rightImageRandomGen + '.png');

// function changeImageAndTellScores() {
//     leftImage.setAttribute('src', 'images/dice' + leftImageRandomGen + '.png');
//     rightImage.setAttribute('src', 'images/dice' + rightImageRandomGen + '.png');
//     // leftImage.src = 'images/dice' + leftImageRandomGen + '.png';
//     // rightImage.src = 'images/dice' + rightImageRandomGen + '.png';
//     CheckScores();
//     console.log(leftImage.src);
//     console.log(rightImage.src);
// }

// leftImage.addEventListener("click", changeImageAndTellScores);
// rightImage.addEventListener("click", changeImageAndTellScores);

const winner = document.getElementById("winners");

if (leftImageRandomGen > rightImageRandomGen) {
    winner.innerHTML = "🚩 player 1 wins";
} else if (rightImageRandomGen > leftImageRandomGen) {
    winner.innerHTML = "🚩 player 2 wins";
} else {
    winner.innerHTML = "📍 Draw";
}

// function CheckScores() {
//     if (leftImageRandomGen > rightImageRandomGen) {
//         winner.innerHTML = "🚩 player 1 wins";
//     } else if (rightImageRandomGen > leftImageRandomGen) {
//         winner.innerHTML = "🚩 player 2 wins";
//     } else {
//         winner.innerHTML = "📍 Draw";
//     }
// }