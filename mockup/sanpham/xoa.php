<?php
    $product_id= $_GET['product_id'];
    $sql= "DELETE FROM product WHERE product_id=$product_id";
    
    mysqli_query($link,$sql);
    header("Location: admin.php?Page_layout=danhsach");
?>