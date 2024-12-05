<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "user_system"; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_name = filter_var($_POST['username'], FILTER_SANITIZE_SPECIAL_CHARS);
    $user_password = $_POST['password'];  

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $user_name);
    $stmt->execute();

    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($user_password, $user['password'])) {
        echo "Login successful! Welcome, " . htmlspecialchars($user['username']); 
    } else {
        echo "Invalid username or password.";
    }

    $stmt->close();
    $conn->close();
}
?>
