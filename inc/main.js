// Array of words
let words = ['A double-handed sword', 'A medieval set of armor', 'A large castle made up of stone and bricks', 'An improvised bow and arrow', 'A wooden catapult that can launch heavy objects'];

// Array of images
let images = ['sword.png', 'armor.png', 'castle.png', 'bow.png', 'catapult.png'];

// Declare variables
$checkedWords = 0, $checkedImages = 0, $selectedImage = "", $selectedWord = "", $matches = 0, $flipCounter = 0;

function init()
{
    for (let i = 0; i < images.length; i++)
    {
        var img = document.createElement("img");
        img.src = "img/" + images[i];
        img.className = 'card' + [i + 1];
        var src = document.getElementById("game-container");
        src.append(img) + [i + 1];
    }

    for (let i = 0; i < words.length; i++)
    {
        var para = document.createElement("div");
        para.className = 'card' + [i + 1];
        para.innerHTML = words[i];
        document.getElementById("game-container").appendChild(para) + "<br>";
    }
}

$(document).ready(function() {
    $("#game-container div, img").on("click", function() {
        $(this).addClass('selected');
        if ($(this) == document.getElementsByClassName('div'))
        {
            $selectedWord = $(this);
            console.log('paragraph');
        }
        else
        {
            $selectedImage = $(this);
            console.log('image');
        }
        $flipCounter++;
        console.log($(this));
        if ($flipCounter == 2)
        {
            checkState();
        }
    })

    function checkState()
    {
        if ($flipCounter == 2 && $selectedWord.className == $selectedImage.className && $selectedWord != "")
        {
            $selectedWord.addClass('match');
            $selectedImage.addClass('match');
            $matches++;
            $selectedImage = "";
            $selectedWord = "";

        } else
        {
            console.log('lose');
            $
        }
    }
})


init();