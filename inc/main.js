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
        if ($(this).is('div'))
        {
            $selectedWord = $(this);
            if ($flipCounter < 2)
            {
                $flipCounter++;
                $(this).addClass('selected');
            }
            console.log('paragraph');
        }
        else
        {
            $selectedImage = $(this);
            if ($flipCounter < 2)
            {
                $flipCounter++;
                $(this).addClass('selected');
            }
            console.log('image');
        }
        if ($flipCounter == 2)
        {
            checkState();
        }
    })

    function checkState()
    {
        if ($selectedWord.className = $selectedImage.className)
        {
            $selectedWord.addClass('match');
            $selectedImage.addClass('match');
            $matches++;
            $flipCounter = 0;
            $selectedWord = "";
            $selectedImage = "";
        }
        else
        {
            console.log('lose');
            $selectedWord.removeClass('selected');
            $selectedImage.removeClass('selected');
            $flipCounter = 0;
        }
    }
})


init();