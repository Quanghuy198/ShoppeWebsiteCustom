<?php
    include("/Applications/XAMPP/xamppfiles/htdocs/mockup/config/lib_db.php");
    connect();
    // $link = mysqli_connect('localhost', 'root', '');
    $product_name= $_GET['product_name'];
    // $product_name= "Jex Max 30V";
    $sql_select_id_pro="SELECT * FROM product WHERE product_name='$product_name'";
    // echo $sql_select_id_pro;exit;
    $data_select_id_pro=select_one($sql_select_id_pro);
    // print_r($data_select_id_pro) ;exit;
    $product_id=$data_select_id_pro["product_id"];
    // echo $product_id;exit;
    connect();
    $sql_r= "DELETE FROM cart WHERE product_id=$product_id";
    // echo $sql;exit;
    mysqli_query($link,$sql_r);

?>