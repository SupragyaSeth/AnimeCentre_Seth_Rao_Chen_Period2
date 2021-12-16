
<?php
 $option = isset($_POST['myRequest']) ? $_POST['myRequest'] : false;
        if ($option){
            $request = $_POST['myRequest'];
            $query = "    select myField, from myTable where mySelection = '" . $request . "';"; // create the query
            $result = mysqli_query($conn, $query); //post the query
            while ($row = mysqli_fetch_assoc($result)) { //extract data from the response //look to see if there is a record
                echo "some html";
                echo $row['myField']; //add the record to your html
            }
        }
        $result->close();
        $conn->close();
?>