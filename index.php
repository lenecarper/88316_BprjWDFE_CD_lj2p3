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
    <div id="flex-container">
    <div id="modal" class="modal">
    <div class="modal-content">
    <span class="close">&times;</span>
    <p id="winnerText"></p>
    <form method="POST" action="index.php">
        <input type="text" name="username" id="username" maxlength="25" placeholder="Username" required />
    </form>
    </div>

    </div>
        <div id="game-container"></div>
        <div id="timer">Timer</div>
    </div>


    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/timer.jquery/0.7.0/timer.jquery.js'></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="inc/main.js"></script>
</body>
</html>