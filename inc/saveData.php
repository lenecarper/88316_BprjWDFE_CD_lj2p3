<?php
# Function to retrieve and upload the data into the database
    include('functions.php');
    # Define variables to store data in and connect to the SQL database
    $db = db();

    $playerName = $_POST['username'];
    $playerTime = $_POST['time'];

    // Make sure the player's name is set before executing SQL query
    if ($playerName != "")
    {
        # Gather all the data into an SQL query
        $saveHighscore = "INSERT INTO score (username, userTime) VALUES ('" . $playerName .  "', '" . $playerTime . "')";
    }
    
#You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near ''userTime') VALUES ('fdfdfd', '19 sec')' at line 1

    # Query the data to be sent into the corresponding database tables
    $query = $db->query($saveHighscore) or die($db->error);
?>
