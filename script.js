let letterIndex = 0;
const letterText = [
    "My Dearest Love,",
    "Every time I think of you, my heart dances in a rhythm only your name can orchestrate.",
    "You are the sunrise that brightens my darkest days and the gentle whisper of the breeze that soothes my soul.",
    "I find myself in awe of the magic you bring into my life.",
    "Your laughter is the sweetest melody, and your smile has a way of lighting up even the gloomiest corners of my world.",
    "In your presence, everything feels right—calm yet thrilling, steady yet adventurous.",
    "You are my confidant, my partner, my safe haven.",
    "With you, love is not just a feeling; it’s a living, breathing experience that grows richer with every moment we share.",
    "Whether we are lost in deep conversation or sitting in comfortable silence, I treasure every second by your side.",
    "I love you not just for who you are but for the way you make me feel—cherished, understood, and deeply valued.",
    "You inspire me to be better, dream bigger, and love harder.",
    "As I write this, I want you to know that my love for you is limitless.",
    "It transcends the boundaries of time and space, growing stronger with every heartbeat.",
    "I look forward to a lifetime of making memories with you—of adventures, laughter, and love that knows no bounds.",
    "You are my everything, and I promise to love you with all that I am, for all that you are.",
    "Forever yours,"
];

function revealLetter() {
    const letterTextElement = document.getElementById("letter-text");

    if (letterIndex < letterText.length) {
        letterTextElement.innerHTML += `<p>${letterText[letterIndex]}</p>`;
        letterIndex++;

        setTimeout(revealLetter, 1000); // 1 second delay between lines
    }
}

document.addEventListener("DOMContentLoaded", function () {
    revealLetter();
});




function showPopup(choice) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');

    // Set image based on choice
    if (choice === 'yes') {
        popupImg.src = '"C:\Users\Aman Raj\Downloads\KBHI NI\You Are Mine Forever.jpeg"'; // Replace with a romantic image URL
    } else if (choice === 'ofc') {
        popupImg.src = '"C:\Users\Aman Raj\Downloads\KBHI NI\You Are Mine Forever.jpeg"';

    popup.style.display = 'block';
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
