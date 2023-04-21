<?php
    function db()
    { // Connect to the MySQL database
    $db = new mysqli('localhost', 'root', '', 'rocmatch');

    // Checks the connection
    if($db -> connect_errno)
    {
        echo "Connection failed " . $db -> connect_error;
        array_push($errors, "The database has ran into a critical problem.");
        echo $errors;
        exit();
    }

    // Return the database
    return $db;
    }
?>