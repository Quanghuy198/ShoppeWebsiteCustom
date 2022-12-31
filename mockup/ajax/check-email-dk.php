<?php
    include("/Applications/XAMPP/xamppfiles/htdocs/mockup/config/lib_db.php");
    connect();

    $email_user=$_GET["email"];
    $sql="SELECT * FROM user WHERE user_email='$email_user'";
    // echo $sql;
    $data_r= mysqli_query($link,$sql);
    $num_row=mysqli_num_rows($data_r);
    echo $num_row;
?>