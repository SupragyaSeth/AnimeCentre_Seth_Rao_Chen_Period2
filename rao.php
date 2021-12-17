<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "mydatabase";
$port = 80;
$link=mysqli_connect($host,$user,$pass,$db,$port);
if(isset($_Post['submit']))
{
    $name = $_POST['Name'];
    $email= $_POST['Email'];
    $message= $_POST['Message'];
    $insert_info = "INSERT INTO mydata (name,email,message)
    VALUES ('$name','$email','$message')"; 
    mysqli_close($link);
}
?>