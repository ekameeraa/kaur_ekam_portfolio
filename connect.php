<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstname'];
    $lastName = $_POST['lastname'];
    $country = $_POST['country'];
    $subject = $_POST['subject'];

    $connect = new mysqli('localhost', 'root', 'root', 'EMAILdb');

    if ($connect->connect_error) {
        die('Connection failed: ' . $connect->connect_error);
    }

    $sql = "INSERT INTO EMAILdb (firstname, lastname, country, subject) VALUES ('$firstName', '$lastName', '$country', '$subject')";

    if ($connect->query($sql) === TRUE) {
        echo "Record inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $connect->error;
    }

    $connect->close();
}
?>

