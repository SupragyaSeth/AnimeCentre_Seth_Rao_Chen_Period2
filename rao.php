<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "mydatabase";
$link=mysqli_connect($host,$user,$pass,$db);
if(!$link)
{
    die("Connection failed" . mysqli_connect_error());
}
if(isset($_POST['submit']))
{
    $name = $_POST['Name'];
    $email= $_POST['Email'];
    $message= $_POST['Message'];
    $insert_info= "INSERT INTO mydata (name,email,message)
    VALUES ('$name','$email','$message')"; 
    
    if(mysqli_query($link,$insert_info))
    {
        echo "Thank you for filling out this form";
    }
    mysqli_close($link);

}
?>
