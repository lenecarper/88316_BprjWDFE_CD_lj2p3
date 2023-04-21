// Array of words
let words = ['A double-handed sword', 'A medieval set of armor', 'A large castle made up of stone and bricks', 'An improvised bow and arrow', 'A wooden catapult that can launch heavy objects'];

// Array of images
let images = ['sword.png', 'armor.png', 'castle.png', 'bow.png', 'catapult.png'];

// Declare variables
$checkedWords = 0, $checkedImages = 0, $selectedImage = "", $selectedWord = "", $matches = 0, $wordClass = "", $imageClass = "", $modal = document.getElementById('modal'), $span = document.getElementsByClassName('close')[0], $winnerText = document.getElementById('winnerText'), $timer = document.getElementById('timer'), $gameState = document.getElementById('gamestate');

// Initialize game function
function init()
{
    // Append an image to the game container as long as there are images to add
    for (let i = 0; i < images.length; i++)
    {
        // Create an image element
        var img = document.createElement("img");
        // Image source
        img.src = "img/" + images[i];
        // Add a class name to the img
        img.className = 'card' + [i + 1];
        // Append to the game-container div
        var src = document.getElementById("game-container");
        src.append(img) + [i + 1];
    }

    // Append a paragraph to the game container as long as there are paragraphs to add
    for (let i = 0; i < words.length; i++)
    {
        // Create a div element
        var para = document.createElement("div");
        // Add a class name to the div
        para.className = 'card' + [i + 1];
        // Add a paragraph to every div and append to the game-container div
        para.innerHTML = words[i];
        document.getElementById("game-container").appendChild(para) + "<br>";
    }
}

// Function to run when the page loads
$(document).ready(function() {
    // onClick function connected to the game-container's div & img elements
    $("#game-container div, img").on("click", function() {
        // Checks if the currently clicked element is a div
        if ($(this).is('div'))
        {
            // Check if timer has not ran out and if there aren't any other selected divs
            if ($checkedWords == 0 && $timer.innerHTML != "0 sec")
            {
                // Save the selected div in a variable
                $selectedWord = $(this);
                // Save the selected div's class in a variable
                $wordClass = $(this).attr('class');
                // Increment checked words variable
                $checkedWords++;
                // Add a class to the div to show it has been selected
                $(this).addClass('selected');
                console.log('paragraph');
            }
        }
        else
        {
            // Check if timer has not ran out and if there aren't any other selected images
            if ($checkedImages == 0 && $timer.innerHTML != "0 sec")
            {
                // Save the selected image in a variable
                $selectedImage = $(this);
                // Save the selected image's class in a variable
                $imageClass = $(this).attr('class');
                // Increment checked images variable
                $checkedImages++;
                // Add a class to the image to show it has been selected
                $(this).addClass('selected');
                console.log('image');
            }
        }
        // Check if an image and a paragraph has been selected
        if ($checkedWords == 1 && $checkedImages == 1)
        {
            // Check for gamestate
            checkState();
        }
    })

    // onClick function to close winner modal
    $span.onclick = function()
    {
        $modal.style.display = "none";
    }

    // Function to check the gamestate
    function checkState()
    {
        // If the image and paragraph have the same class
        if ($wordClass == $imageClass)
        {
            // Add a 'match' class to the matching elements
            $selectedWord.addClass('match');
            $selectedImage.addClass('match');
            // Increment matches counter
            $matches++;
            // Set checked words/images back to 0, set selected words/images back to an empty string
            $checkedWords = 0;
            $checkedImages = 0;
            $selectedWord = "";
            $selectedImage = "";
            // Update the text in the gameState div
            $gameState.innerHTML = "Correct match. Well done!";
        }
        else
        {
            // If the elements do not match, remove selected classes
            $selectedWord.removeClass('selected');
            $selectedImage.removeClass('selected');
            console.log($wordClass);
            console.log($imageClass);
            console.log('lose');
            // Set checked words/images back to 0
            $checkedWords = 0;
            $checkedImages = 0;
            // Update the text in the gameState div
            $gameState.innerHTML = "Wrong match. Try again!";
        }

        // Check if every element has been matched
        if ($matches == 5)
        {
            // Update the text in the winner modal
            $winnerText.innerHTML = "You won! Please fill in your name below.";
            // Display the winner modal with username form
            $modal.style.display = "block";
            // Pause timer
            $("#timer").timer('pause');
            // Update the text in the gameState div
            $gameState.innerHTML = "You matched every element! Well done!"
            // Save the user's time and username into SQL database
            saveScore();
        }
    }

    // Timer function that counts down from 30 seconds
    $("#timer").timer({
        countdown: true,
        duration: '30s',
        // Pauses timer, updates gameState div, prompts the user to restart the game when time runs out
        callback: function() {
            $("#timer").timer('pause');
            $gameState.innerHTML = "You ran out of time! Try again."
            if (confirm("You ran out of time! Click OK below to retry.")) {
                location.reload();
            }
        }
    });
})

// AJAX POST request to save data into database
function saveScore()
{
    // Get the values to save into the database
    var playerName = $('#username').val();
    var playerTime = $('#timer').text();

    $.ajax({
        type: 'POST',
        url: 'inc/saveData.php',
        data: {
            username: playerName,
            time: playerTime
        },
        success: function(data){
            console.log(data);
        }
    });
}

// Initialize the game
init();