<?php
    include("/Applications/XAMPP/xamppfiles/htdocs/mockup/config/lib_db.php");
    connect();

    $product_id=$_GET["product_id"];
    $amount_order=$_GET["amount_order"];
    $data=array();
    $data["product_id"]=$product_id;
    $data["amount"]=$amount_order;
    $tbl="cart";
    $sql_insert=data_to_sql_insert($tbl,$data);
    $res=exec_update($sql_insert);

?>