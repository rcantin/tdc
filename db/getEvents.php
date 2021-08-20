<?php
    include_once './connection.php';

    $output = array();

    $sql = "SELECT * FROM events";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);

    if ($resultCheck > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $output[] = $row;
        }
        echo json_encode($output);
    }
?>