<?php
    include("/Applications/XAMPP/xamppfiles/htdocs/mockup/config/lib_db.php");
    connect();

    $sql="SELECT * FROM cart";
    // echo $sql;
    $data_r= mysqli_query($link,$sql);
    $num_row=mysqli_num_rows($data_r);
    echo $num_row;
?>