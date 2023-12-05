<?php
// Establish a connection to the database
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve messages from the database (replace 'your_messages_table' with the actual table name)
$sql = "SELECT message FROM your_messages_table";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<p>" . $row["message"]. "</p>";
    }
} else {
    echo "0 results";
}

// Close the database connection
$conn->close();
?>
