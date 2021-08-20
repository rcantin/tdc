<?php

include_once './connection.php';

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="theme-color" content="#000000" />
    <link href="../scss/theme.css" type="text/css" rel="Stylesheet" />
    <script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ" crossorigin="anonymous"></script>
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <script src="../node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <title>Database Testing</title>
  </head>
  <body>
    
    <?php
    $sql = "SELECT * from summercamp;";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if ($resultCheck > 0) {
        echo "<table class=\"table table-hover table-borderless table-sm\">
        <tr>
        <th>ID</th>
        <th>Category</th>
        <th>Name</th>
        <th>Ages</th>
        <th>Cost</th>
        <th>Register</th>
        </tr>";
        while ($row = mysqli_fetch_assoc($result)) {
            // echo $row['title'];
            echo 
            "<tr>
            <td>".$row["id"]."</td>
            <td>".$row["category"]."</td>
            <td>".$row["title"]."</td>
            <td>".$row["min_age"]."-".$row["max_age"]."</td>
            <td>$".$row["cost"]."</td>
            <td><a href='".$row["register_link"]." target=\"_blank\"'>Register</a></td>
            </tr>"
            ;            
        }
        echo "</table>";
    }
    else {
        echo "no results found";
    }

    ?>

  </body>
</html>
