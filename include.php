<?php
include_once 'https://github.com/SupragyaSeth/AnimeCentre_Seth_Rao_Chen_Period2/blob/main/Homepage.html'; //add template
require_once 'login.php';  //add login credentials
$conn = mysqli_connect($host, $user, $pass, $db, $port); //create connection to db
if($conn->connect_error) die($conn->connect_error); // quit if it fails ?php>
?>
