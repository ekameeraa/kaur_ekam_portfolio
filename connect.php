<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$firstName = $_POST['firstName'];
$contactInfo = $_POST['contactInfo'];
$msg = $_POST['msg'];
$submit = $_POST['submit'];

$connect = new mysqli('localhost', 'root', 'root', 'EMAILdb');

if ($connect->connect_error) {
    die('Connection failed: ' . $connect->connect_error);
}

$sql = "INSERT INTO EMAILdb (firstname, contactinfo, msg, submit) VALUES ('$firstName', '$contactInfo', '$msg', '$submit')";

if ($connect->query($sql) === TRUE) {
    echo "Record inserted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $connect->error;
}

$connect->close();

?>