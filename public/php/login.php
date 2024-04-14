<?php
session_start();

// Include your database connection file
include 'db_connection.php';

// Get form data
$email = $_POST['email'];
$password = $_POST['password'];

// Retrieve user data from the database based on email
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows == 1) {
    // Verify the password
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        // Password is correct, set session variables and redirect to dashboard or another page
        $_SESSION['email'] = $email;
        // Redirect to dashboard or another page
        header("Location: dashboard.php");
    } else {
        // Password is incorrect
        echo "Invalid email or password";
    }
} else {
    // User with provided email does not exist
    echo "User not found";
}

$conn->close();
?>
