// Array of words
let words = ['A double-handed sword', 'A medieval set of armor', 'A large castle made up of stone and bricks', 'An improvised bow and arrow', 'A wooden catapult that can launch heavy objects'];

// Array of images
let images = ['sword.png', 'armor.png', 'castle.png', 'bow.png', 'catapult.png'];

// Declare variables
$checkedWords = 0, $checkedImages = 0, $selectedImage = "", $selectedWord = "", $matches = 0, $wordClass = "", $imageClass = "";   

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
            if ($checkedWords == 0)
            {
                $selectedWord = $(this);
                $wordClass = $(this).attr('class');
                $checkedWords++;
                $(this).addClass('selected');
                console.log('paragraph');
            }
        }
        else
        {
            if ($checkedImages == 0)
            {
                $selectedImage = $(this);
                $imageClass = $(this).attr('class');
                $checkedImages++;
                $(this).addClass('selected');
                console.log('image');
            }
        }
        if ($checkedWords == 1 && $checkedImages == 1)
        {
            checkState();
        }
    })

    function checkState()
    {
        if ($wordClass == $imageClass)
        {
            $selectedWord.addClass('match');
            $selectedImage.addClass('match');
            $matches++;
            $checkedWords = 0;
            $checkedImages = 0;
            $selectedWord = "";
            $selectedImage = "";
        }
        else
        {
            console.log($wordClass);
            console.log($imageClass);
            console.log('lose');
            $checkedWords = 0;
            $checkedImages = 0;
        }
    }
})


init();