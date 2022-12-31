<?php
    $sql_catalog="SELECT * FROM catalog";
    $data_catalog=select_list($sql_catalog);

    if(isset($_POST['sbm'])){
        $data=array();
        $catalog_id=$_POST['catalog_id'];
        $product_name= $_POST['product_name'];
        $price=$_POST['price'];
        $content=$_POST['content'];
        $quantity=$_POST['quantity'];
        $discount=$_POST['discount'];

        $image_link= upload_file_by_name("image_link");
        $image_list= upload_file_by_name("image_list");
        //  print_r($image_link);
        // // echo $_FILES['image_link'];
        // exit();
        $data["catalog_id"] = $catalog_id;
        $data["product_name"] = $product_name;
        $data["price"] = $price;
        $data["content"] = $content;
        $data["quantity"] = $quantity;
        $data["discount"] = $discount;
        $data["image_link"] = $image_link;
        $data["image_list"] = $image_list;

        $tbl = "product";
        $sql_insert_product = data_to_sql_insert($tbl, $data);
        // print_r($sql_insert_product);exit();
        $ret = exec_update($sql_insert_product);
        // print_r($ret);exit();
        header("Location: admin.php?Page_layout=danhsach");
    }
?>
<div class="container-fluid">
    <div class="card">
        <div class="card-header">
            <h2>Thêm Sản Phẩm</h2>
        </div>
        <div class="card-body">
            <form action="" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                  <label for="">Loại sản phẩm</label>
                    <select name="catalog_id" id="" class="form-control">
                        <option value="">--Select--</option>
                        <?php foreach($data_catalog as $r){ ?>
                            <option value="<?php echo $r['catalog_id'];?>"> <?php echo $r['catalog_name']; ?> </option>
                        <?php } ?>
                    </select>
                </div>

                <div class="form-group">
                  <label for="">Tên sản phẩm</label>
                  <input type="text" name="product_name" id="" class="form-control" placeholder="" required>
                </div>

                <div class="form-group">
                  <label for="">Giá</label>
                  <input type="number" name="price" id="" class="form-control" placeholder="" required>
                </div>

                <div class="form-group">
                  <label for="">Nội dung</label>
                  <input type="text" name="content" id="" class="form-control" placeholder="" required>
                </div>

                <div class="form-group">
                  <label for="">Số lượng</label>
                  <input type="number" name="quantity" id="" class="form-control" placeholder="" required>
                </div>

                <div class="form-group">
                  <label for="">Giảm giá</label>
                  <input type="number" name="discount" id="" class="form-control" placeholder="" required>
                </div>

                <div class="form-group">
                  <label for="">Ảnh</label><br>
                  <input type="file" name="image_link" id="" placeholder="">
                </div>

                <div class="form-group">
                  <label for="">Danh sách ảnh</label><br>
                  <input type="file" name="image_list" id="" placeholder="">
                </div>

                <button name="sbm" class="btn btn-success" type="submit">Thêm sản phẩm</button>
            </form>
        </div>

    </div>
</div>