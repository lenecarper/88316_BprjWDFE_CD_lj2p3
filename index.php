<?php require ('inc/functions.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Word Match</title>
    <link rel="stylesheet" href="style/style.css" />
</head>
<body>
    <!-- Main styling container -->
    <div id="flex-container">
     <!-- (Hidden) winner modal that shows after winning the game -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <p id="winnerText"></p>
            <!-- Form to set username in after winning -->
            <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                <input type="text" name="username" id="username" maxlength="25" placeholder="Username" required />
                <input type="submit" name="submit" id="submit" value="Save & replay" onclick="saveScore()" />
            </form>
        </div>
    </div>
    <!-- Main game container -->
    <div id="game-container"></div>
        <div id="timer">Timer</div>
        <div id="gamestate">Click on an image and a paragraph to match them!</div>
    </div>
    <!-- Leaderboard container -->
    <div id="leaderboard-container"><?php getScore(); ?></div>

    <!-- Load scripts after DOM is initialized -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/timer.jquery/0.7.0/timer.jquery.js'></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="inc/main.js"></script>
</body>
</html>
