// Array of words
let words = ['A double-handed sword', 'A medieval set of armor', 'A large castle made up of stone and bricks', 'An improvised bow and arrow', 'A wooden catapult that can launch heavy objects'];

// Array of images
let images = ['sword.png', 'armor.png', 'castle.png', 'bow.png', 'catapult.png'];

// Declare variables
// $imageContainer = document.getElementById('image-container');

function init()
{
    for (let i = 0; i < words.length; i++)
    {
        var img = document.createElement("img");
        img.src = "img/" + images[i];
        var src = document.getElementById("image-container");
        src.appendChild(img);
    }
}


init();