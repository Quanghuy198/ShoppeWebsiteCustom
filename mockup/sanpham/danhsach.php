<?php
    $sql= "SELECT * FROM product inner join catalog on product.catalog_id = catalog.catalog_id";
    $data= select_list($sql);
?>

<div class="container-fluid">
    <div class="card">
        <div class="card-header">
            <h2>Danh sách sản phẩm</h2>
        </div>
        <div class="card-body">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Danh mục</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Nội dung</th>
                        <th>Số lượng</th>
                        <th>Giảm giá</th>
                        <th>Ảnh</th>
                        <th>Danh sách ảnh</th>
                        <th>Sửa</th>
                        <th>Xoá</th>
                    </tr>
                </thead>

                <tbody>
                    <?php
                        $i=1;
                        foreach($data as $r){?>
                            <tr>
                                <td><?php echo $i++; ?> </td>
                                <td><?php echo $r['catalog_name']; ?></td>
                                <td><?php echo $r['product_name']; ?></td>
                                <td><?php echo $r['price']; ?></td>
                                <td><?php echo $r['content']; ?></td>
                                <td><?php echo $r['quantity']; ?></td>
                                <td><?php echo $r['discount']; ?></td>
                                <td>
                                    <img style="width: 100px; height:120px;" src="image/<?php echo $r['image_link']; ?>" alt="photo">
                                </td>

                                <td><?php echo $r['image_list']; ?></td>
                                <td><a href="admin.php?Page_layout=sua&product_id=<?php echo $r['product_id'] ?>">Sửa</a></td>
                                <td><a onclick="return confirm_del('<?php echo $r['product_name'] ?>')" href="admin.php?Page_layout=xoa&product_id=<?php echo $r['product_id'] ?>">Xoá</a></td>
                            </tr>
                    <?php } ?>
                </tbody>
            </table>

            <a href="admin.php?Page_layout=them" class="btn btn-primary">Thêm mới</a>
        </div>
    </div>
</div>

<script>
    function confirm_del(name){
        return confirm("Bạn có chắc chắn muốn xoá : "+name+" ?");
    }
</script>