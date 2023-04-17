// Array of words
let words = ['A double-handed sword', 'A medieval set of armor', 'A large castle made up of stone and bricks', 'An improvised bow and arrow', 'A wooden catapult that can launch heavy objects'];

// Array of images
let images = ['sword.png', 'armor.png', 'castle.png', 'bow.png', 'catapult.png'];

// Declare variables
$checkedCounter = 0;

function init()
{
    for (let i = 0; i < images.length; i++)
    {
        var img = document.createElement("img");
        img.src = "img/" + images[i];
        var src = document.getElementById("image-container");
        src.appendChild(img);
    }
    
    for (let i = 0; i < words.length; i++)
    {
        var para = document.createElement("p");
        para.innerHTML = words[i];
        document.getElementById("word-container").appendChild(para) + "<br>";
    }
}

$(document).ready(function() {
    $("#image-container img").on("click", function() {
        console.log($(this));
        $(this).css('border-color', 'red');
        $checkedCounter++;
        console.log($checkedCounter);

        if ($checkedCounter == 2)
        {
            $checkedCounter = 0;
            $("#image-container img").css('border-color', 'gray');
            console.log('alert!!!!');
        }
    })
})


init();