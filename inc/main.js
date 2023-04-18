// Array of words
let words = ['A double-handed sword', 'A medieval set of armor', 'A large castle made up of stone and bricks', 'An improvised bow and arrow', 'A wooden catapult that can launch heavy objects'];

// Array of images
let images = ['sword.png', 'armor.png', 'castle.png', 'bow.png', 'catapult.png'];

// Declare variables
$checkedWords = 0, $checkedImages = 0, $selectedImage = "", $selectedWord = "";

function init()
{
    for (let i = 0; i < images.length; i++)
    {
        var img = document.createElement("img");
        img.src = "img/" + images[i];
        var src = document.getElementById("game-container");
        src.appendChild(img);
    }

    for (let i = 0; i < words.length; i++)
    {
        var para = document.createElement("p");
        para.innerHTML = words[i];
        document.getElementById("game-container").appendChild(para) + "<br>";
    }
}

$(document).ready(function() {
    // $("#image-container img").on("click", function() {
    //     $(this).addClass('selected');
    //     $selectedImage = $(this);
    //     $checkedImages++;
    //     if ($selectedImage != "" && $checkedImages > 1 && $selectedWord != "")
    //     {
    //         checkState();
    //         $selectedImage = "";
    //         $("#image-container img").removeClass('selected');
    //         $checkedImages = 0;
    //     }
    // })

    $("#game-container p, img").on("click", function() {
        $(this).addClass('selected');
        $selectedWord = $(this);
        $checkedWords++;
        $selectedImage = $(this);
        $checkedImages++;
        if ($checkedWords > 1 && $checkedImages > 1)
        {
            checkState();
            $selectedWord   = "";
            $selectedImage  = "";
            $("#game-container p").removeClass('selected');
            $checkedWords = 0;
            $checkedImages = 0;
        }
    })

    function checkState()
    {
        if ($selectedWord.innerHTML == $selectedImage.src && $selectedWord != "" && $selectedImage != "")
        {
            $selectedWord.addClass('match');
            $selectedImage.addClass('match');
        } else
        {
            console.log('lose');
        }
    }
})


init();