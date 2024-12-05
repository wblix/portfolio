<?php
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "user_system"; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_name = filter_var($_POST['username'], FILTER_SANITIZE_SPECIAL_CHARS);
    $user_email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $user_password = $_POST['password'];  
    $confirm_password = $_POST['confirm_password']; 

    if ($user_password !== $confirm_password) {
        echo "Passwords do not match.";
        exit();
    }
    
    $hashed_password = password_hash($user_password, PASSWORD_DEFAULT);

    $conn = new mysqli($servername, $username, $password, $dbname);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $user_name, $user_email, $hashed_password);

    if ($stmt->execute()) {
        header("Location: account.html");
        exit(); 
    } else {
        echo "Error: " . $stmt->error;
    }


    $stmt->close();
    $conn->close();
}
?>
