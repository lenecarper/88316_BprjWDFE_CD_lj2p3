// Array of words
let words = ['A double-handed sword', 'A medieval set of armor', 'A large castle made up of stone and bricks', 'An improvised bow and arrow', 'A wooden catapult that can launch heavy objects'];

// Array of images
let images = ['sword.png', 'armor.png', 'castle.png', 'bow.png', 'catapult.png'];

// Declare variables
$checkedWords = 0, $checkedImages = 0, $selectedImage = "", $selectedWord = "", $matches = 0, $wordClass = "", $imageClass = "", $modal = document.getElementById('modal'), $span = document.getElementsByClassName('close')[0], $winnerText = document.getElementById('winnerText');

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

    $span.onclick = function()
    {
        $modal.style.display = "none";
    }

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
            $selectedWord.removeClass('selected');
            $selectedImage.removeClass('selected');
            console.log($wordClass);
            console.log($imageClass);
            console.log('lose');
            $checkedWords = 0;
            $checkedImages = 0;
        }

        if ($matches == 5)
        {
            $winnerText.innerHTML = "You won! Please fill in your name below.";
            $modal.style.display = "block";
        }
    }

    $("#timer").timer({
        countdown: true,
        duration: '30s',
        callback: function() {
            alert('Time is up!');
            $("#timer").timer('pause');
        }

    });
})


init();