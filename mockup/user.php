<?php
    include("/Applications/XAMPP/xamppfiles/htdocs/mockup/config/lib_db.php");
    connect();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dược Phẩm Hoa Giang</title>

    <!-- link file css -->

    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/grid.css">
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/responsive.css">
    <link rel="stylesheet" href="./css/style.css">
    

    <!-- link font tren googlefont -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">

    <!-- link file icon  -->
    <link rel="stylesheet" href="./fontawesome-free-5.15.1-web/css/all.min.css">
    <script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>  
    <script>
        $(document).ready(function(){
            $("#btn-add-cart").click(function(){
                var URL = window.location.search;
                var index=URL.indexOf("product_id=")+"product_id=".length
                var pro_id=URL.substring(index)
                var amount_order=$("#amount_order").val()
 
            // Using path
                // var URL = window.location.pathname;
                // alert(pro_id)
                $.get("./ajax/add-into-cart.php", {product_id:pro_id,amount_order:amount_order}, function(data){
                    location.reload()
                    alert("Thêm vào giỏ hàng thành công!")
                })
            })

        })
        $(document).ready(function(){
            $.get("./ajax/product-in-cart.php", function(data){
                // alert(data==0)
                $("#notice_no_product").css("display","block")
                $("#notice_no_product").css("display","none")
                $("#header_search_cart_notice_id").css("display","none")  
                if( data == 0 ){
                    $("#notice_no_product").css("display","block")
                    $("#notice_have_product").css("display","none")
                    $("#header_search_cart_notice_id").css("display","none")                        
                }
                else{
                    $("#notice_no_product").css("display","none")
                    $("#notice_have_product").css("display","block")
                    $("#header_search_cart_notice_id").css("display","block") 
                }
            })
        })
        
        $(document).ready(function(){  
            $("#delete_pro_in_cart").click(function(){
                var pro_name=$("#name_pro_in_cart").html()
                // alert(pro_name)
                $.get("./ajax/delete_into_cart.php", {product_name:pro_name}, function(data){
                        location.reload()
                        // alert("Xoá khỏi giỏ hàng thành công!")
                })
            })  
        })

    </script> 

</head>

<body>
    <!-- the chinh -->
    <div class="main">
        <!-- header -->
        <header class="header">
            <div class="grid wide">

                <nav class="header__navbar hide-on-moblie-tablet">
                    <ul class="header__navbar-list">
                        <li class="header__navbar-item Taiungdung">
                            <a id="id_tc" href="#">Tải Ứng Dụng</a>
                            <div class="header_QR">
                                <img src="./image/QR_app.png" alt="Photo" class="Qr_code">
                                <div class="header_QR_app">
                                    <a href="#"><img src="./image/gg_play.png" alt="Photo"
                                            class="header_QR_app_download" id="gg_play"></a>
                                    <a href="#"><img src="./image/app_store.png" alt="Photo"
                                            class="header_QR_app_download" id="app_store"></a>
                                </div>
                            </div>


                        </li>
                        <li class="header__navbar-item">
                            <span>Kết Nối</span>
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </li>

                    </ul>

                    <ul class="header__navbar-list">
                        <li class="header__navbar-item notification">
                            <a href="#">Thông Báo</a>
                            <a href="#"><i class="far fa-bell"></i></a>

                            <div class="header-notifi">
                                <header class="header-notifi-header2">
                                    <h3>Thông Báo Mới</h3>
                                </header>

                                <ul class="header-notifi-list">
                                    <li class="header-notifi-items">
                                        <a href="#" class="header-notifi-items-link">
                                            <img src="./image/notification_sale.jpg" alt="Photo"
                                                class="header-notifi-items-img">

                                            <div class="header-notifi-items-info">
                                                <p class="header-notifi-items-name">Khuyến Mại-Giảm Giá</p>
                                                <p class="header-notifi-items-description">Hoa Giang tặng bạn mã giảm
                                                    giá 30%</p>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="header-notifi-items">
                                        <a href="#" class="header-notifi-items-link">
                                            <img src="./image/notification_bcs.jpg" alt="Photo"
                                                class="header-notifi-items-img">

                                            <div class="header-notifi-items-info">
                                                <p class="header-notifi-items-name">Bao cao su Durex</p>
                                                <p class="header-notifi-items-description">Hàng chính hãng 100%</p>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="header-notifi-items">
                                        <a href="#" class="header-notifi-items-link">
                                            <img src="./image/notification_thuoc.jpg" alt="Photo"
                                                class="header-notifi-items-img">

                                            <div class="header-notifi-items-info">
                                                <p class="header-notifi-items-name">Thực phẩm chức năng</p>
                                                <p class="header-notifi-items-description">Bộ 3 giúp tăng cường sức khoẻ
                                                </p>
                                            </div>
                                        </a>
                                    </li>

                                    <li class="header-notifi-items">
                                        <a href="#" class="header-notifi-items-link">
                                            <img src="./image/notification_sua.jpg" alt="Photo"
                                                class="header-notifi-items-img">

                                            <div class="header-notifi-items-info">
                                                <p class="header-notifi-items-name">Sữa Pedia Sure</p>
                                                <p class="header-notifi-items-description">Nhập khẩu tại Úc</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                                <div class="header-notifi-footer">
                                    <p class="header-notifi-btn"><a id="header-notifi-btn" href="#">Xem tất cả</a></p>
                                </div>
                            </div>
                        </li>
                        <li class="header__navbar-item">
                            <a href="#">Trợ Giúp</a>
                            <a href="#"><i class="far fa-question-circle"></i></a>
                        </li>

                        <!-- khi chua dang nhap -->
<!-- 
                        <li class="header__navbar-item">
                            <a id="id_dk" onclick="dangky()" href="#">Đăng Ký</a>
                        </li>
                        <li class="header__navbar-item"><a id="id_dn" href="#" onclick="dangnhap()">Đăng Nhập</a></li> -->
                        <!-- khi da dang nhap -->
                        <?php
                            $email_user=$_GET['email_user'];
                            // echo $email_user;exit;
                            $sql_data_user= "SELECT * FROM user WHERE user_email='$email_user'";

                            $data_user= select_one($sql_data_user);
                            // print_r($data_user);exit;
                        ?>
                        <li class="header__navbar-item header__navbar-user">
                            <img src="./image/unnamed.png" alt="Photo" class="header__navbar-user_img">
                            <span class="header__navbar-user_name">
                                <?php echo $data_user["name_user"] ?>
                            </span>

                            <ul class="header__navbar-user_menu">
                                <li class="header__navbar-user_menu-item">
                                    <a id="header__navbar-user_menu-item_link" href="#">Tài khoản của tôi</a>
                                </li>
                                <li class="header__navbar-user_menu-item">
                                    <a id="header__navbar-user_menu-item_link" href="#">Địa chỉ của tôi</a>
                                </li>
                                <li class="header__navbar-user_menu-item">
                                    <a id="header__navbar-user_menu-item_link" href="#">Đơn mua</a>
                                </li>
                                <li class="header__navbar-user_menu-item header__navbar-user_menu-item--logout">
                                    <a id="header__navbar-user_menu-item_link" href="index.php">Đăng xuất</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div class="header_search">
                    <div class="header_search_mobile">
                        <i class="header_search_mobile_icon fas fa-bars"></i>
                        <i class="header_search_mobile_icon fas fa-search"></i>
                    </div>
                    <div class="header__logo hide-on-tablet">
                        <?php
                            $email_login=$_GET['email_user'];
                            // echo $email_login; exit;
                            $pass_login=$_GET['pass_user'];
                        ?>
                        <a href="user.php?email_user=<?php echo $email_login;?>&pass_user=<?php echo $pass_login;?>" class="logo_link"><img src="./image/logoHG.png" alt="Photo"
                                class="header__logo_img hide-on-tablet"></a>
                    </div>

                    <div class="header_form_search hide-on-moblie">
                        <div class="header_form_search--input-wrap">
                            <input type="text" class="header_form_search--input"
                                placeholder="Tìm Kiếm Sản Phẩm Trong Shop">

                            <!-- search history -->
                            <div class="header_form_search--input-history">
                                <h4 class="header_form_search--input-history-heading">
                                    Lịch sử tìm kiếm
                                </h4>

                                <ul class="header_form_search--input-history-list">
                                    <li class="header_form_search--input-history-item">
                                        <a href="#">Sữa trẻ em</a>
                                    </li>
                                    <li class="header_form_search--input-history-item">
                                        <a href="#">Thực phẩm chức năng</a>
                                    </li>
                                    <li class="header_form_search--input-history-item">
                                        <a href="#">Kem dưỡng da</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="header_form_search--select">
                            <span class="header_form_search--select-lable">Trong Shop</span>
                            <i class="header_form_search--select-icon fas fa-chevron-down"></i>

                            <ul class="header_form_search--select-option">
                                <li class="header_form_search--select-item header_form_search--select-item--active">
                                    <span>Trong Shop</span>
                                    <i class="fas fa-check"></i>
                                </li>

                                <li class="header_form_search--select-item">
                                    <span>Ngoài Shop</span>
                                    <i class="fas fa-check"></i>
                                </li>
                            </ul>
                        </div>

                        <div class="header_form_search_btn">
                            <i class="header_form_search_btn-icon fas fa-search"></i>
                        </div>
                    </div>

                    <?php 
                        connect();
                        $sql_amount_pro="SELECT * FROM cart";
                        $data_amount_pro=mysqli_query($link, $sql_amount_pro);
                        $amount_pro=mysqli_num_rows($data_amount_pro);
                        // echo $amount_pro; exit;

                        $sql_pro_in_cart="SELECT * FROM cart INNER JOIN product ON cart.product_id=product.product_id";
                        $data_pro_in_cart=select_list($sql_pro_in_cart);
                        // print_r($data_pro_in_cart); exit;


                    ?>

                    <div class="header_search_icon">
                        <div class="header_search_cart_wrap">
                            <i class="header_search_icon_cart fas fa-shopping-cart"></i>

                            <span class="header_search_cart_notice" id="header_search_cart_notice_id"><?php echo $amount_pro ?></span>
                            <!-- empty cart -->
                            <!-- class noitem : header_search_cart_list_no_item  -->
                            <div class="header_search_cart_list ">
                                <div id="notice_no_product">
                                    <img src="./image/no_cart.png" alt="Photo" class="header_search_cart_img_no_item">
                                    <p class="header_search_cart_list_no_item_msg">Chưa có sản phẩm</p>
                                </div>

                                <!-- cart have items -->
                                <div id="notice_have_product">
                                    <h3 class="header_cart_heading">Sản phẩm đã thêm</h3>

                                    <?php foreach($data_pro_in_cart as $r){?>
                                    <ul class="header_cart_list_have_item">
                                        
                                        <li class="header_cart_list_have_item_item">
                                            <img src="image/<?php echo $r["image_link"]; ?>" alt="Photo"
                                                class="header_cart_list_have_item_item_img">
                                            <div class="header_cart_list_have_item_item_info">
                                                <div class="header_cart_list_have_item_item_info_head">
                                                    <h5 class="header_cart_list_have_item_item_info_head_name" id="name_pro_in_cart"><?php echo $r["product_name"]; ?></h5>
                                                    <div class="header_cart_list_have_item_item_info_head_price_wrap">
                                                        <span
                                                            class="header_cart_list_have_item_item_info_head_price"><?php echo $r['price'] - $r['price']*$r['discount']/100; ?>đ</span>
                                                        <span
                                                            class="header_cart_list_have_item_item_info_head_multiply">x</span>
                                                        <span
                                                            class="header_cart_list_have_item_item_info_head_quantity"><?php echo $r["amount"]; ?></span>
                                                    </div>
                                                </div>
    
                                                <div class="header_cart_list_have_item_item_info_body">
                                                    <span class="header_cart_list_have_item_item_info_body_description">
                                                        Mô tả: <?php echo $r["content"]; ?>
                                                    </span>
    
                                                    <span
                                                        class="header_cart_list_have_item_item_info_body_remove" id="delete_pro_in_cart">Xoá</span>
    
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                    

                                    <?php } ?>
                                    <a href="#" class="view_cart btn btn--primary">Xem giỏ hàng</a>
                                </div>

                                <!-- <button class="view_cart btn btn--primary"><a href="#">Xem giỏ hàng</a></button> -->
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <ul class="header_sort_bar">
                <li class="header_sort_items">
                    <a href="#" class="header_sort_bar_item_link">Liên Quan</a>
                </li>
                <li class="header_sort_items">
                    <a href="#" class="header_sort_bar_item_link">Mới Nhất</a>
                </li>
                <li class="header_sort_items">
                    <a href="#" class="header_sort_bar_item_link">Bán chạy</a>
                </li>
                <li class="header_sort_items">
                    <a href="#" class="header_sort_bar_item_link">Giá</a>
                </li>
            </ul>
        </header>

        <!-- container -->
        <div class="app_container">
            <div class="grid wide">
                <div class="row sm-gutter app_content">
                    <div class="col l-2 m-0 c-0">
                        <nav class="category">
                            <h3 class="category_heading">
                                <i class="category_heading_icon fas fa-list"></i>
                                Danh mục
                            </h3>

                            <ul class="category_list">
                                <li class="category_item category_item_active">
                                    <a href="#" class="category_item_link">Sản phẩm</a>
                                </li>

                                <li class="category_item">
                                    <a href="#" class="category_item_link">Best saller</a>
                                </li>

                                <li class="category_item">
                                    <a href="#" class="category_item_link">Sữa</a>
                                </li>

                                <li class="category_item">
                                    <a href="#" class="category_item_link">Thực phẩm chức năng</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="col l-10">

                        <div class="home_filter hide-on-moblie-tablet">
                            <span class="home_filter_title">Sắp xếp theo</span>

                            <button class="home_filter_btn btn">Phổ biến</button>
                            <button class="home_filter_btn btn btn--primary">Mới nhất</button>
                            <button class="home_filter_btn btn">Bán chạy</button>

                            <div class="select_input">
                                <span class="select_input_lable">Giá</span>
                                <i class="fas fa-chevron-down"></i>

                                <ul class="select_input_list">
                                    <li class="select_input_item">
                                        <a href="#" class="select_input_item_link">Giá từ cao đến thấp</a>
                                    </li>

                                    <li class="select_input_item">
                                        <a href="#" class="select_input_item_link">Giá từ thấp đến cao</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="home_filter_page">
                                <span class="home_filter_num_page">
                                    <span class="home_filter_num_page_current">1</span>/14
                                </span>

                                <div class="home_filter_page_control">
                                    <a href="#"
                                        class="home_filter_page_control_btn home_filter_page_control_btn_disable">
                                        <i class="home_filter_page_control_btn_icon fas fa-chevron-left"></i>
                                    </a>
                                    <a href="#" class="home_filter_page_control_btn">
                                        <i class="home_filter_page_control_btn_icon fas fa-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <?php
                            $sql_product="SELECT * FROM product limit 20";
                            $datar=select_list($sql_product);
                            // echo $datar['image_link'];
                            // print_r($datar);exit;

                            $email_user=$_GET['email_user'];
                            $pass=$_GET['pass_user'];

                            
                        ?>
                        
                        
                            
                        <div class="home_procduct">
                            <div class="row sm-gutter">
                            <?php foreach($datar as $r){?>
                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="chitiet-user.php?email_user=<?php echo $email_user;?>&pass_user=<?php echo $pass ?>&product_id=<?php echo $r['product_id']?>">

                                        <div class="home_product_item_img"
                                            style="background-image: url(image/<?php echo $r['image_link']; ?>);"></div>
                                        <h5 class="home_product_item_name">
                                        <?php echo $r['product_name']; ?>
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old"><?php echo $r['price']; ?>đ</span>
                                            <span class="home_product_item_price_current"><?php echo $r['price']-$r['price']*$r['discount']/100; ?>đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold"><?php echo $r['quantity']; ?>còn lại</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent"><?php echo $r['discount']; ?>%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>
                                </div>
                                <?php } ?>

                                <!-- 
                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>
                                </div>

                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>
                                </div>

                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>
                                </div>

                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>
                                </div>

                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>
                                </div>

                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>


                                </div>

                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>


                                </div>

                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>


                                </div>

                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>


                                </div>

                                <div class="col l-2-4 m-4 c-6">
                                    <a class="home_product_item" href="#">

                                        <div class="home_product_item_img"
                                            style="background-image: url(./image/sua_product.jpeg);"></div>
                                        <h5 class="home_product_item_name">
                                            [Nhập GRO1AB12 giảm 4%] Sữa bột dành cho người bị tiểu đường
                                        </h5>
                                        <div class="home_product_item_price">
                                            <span class="home_product_item_price_old">1.200.000đ</span>
                                            <span class="home_product_item_price_current">999.000đ</span>
                                        </div>

                                        <div class="home_product_item_action">
                                            <span class="home_product_item_action_like ">
                                                <i class="home_product_item_action_like_icon_like far fa-heart"></i>
                                                <i id="home_product_item_action_like_icon_liked"
                                                    class="home_product_item_action_like_icon_liked fas fa-heart"></i>
                                            </span>

                                            <div class="home_product_item_action_rating">
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </div>

                                            <span class="home_product_item_action_sold">88 đã bán</span>
                                        </div>

                                        <div class="home_product_item_origin">
                                            <span class="home_product_item_origin_brand">Wholle</span>
                                            <span class="home_product_item_origin_name">USA</span>

                                        </div>

                                        <div class="home_product_item_favourite">
                                            <i class="fas fa-check"></i>
                                            Yêu thích
                                        </div>

                                        <div class="home_product_item_sale_off">
                                            <span class="home_product_item_sale_off_percent">10%</span>
                                            <span class="home_product_item_sale_off_lable">Giảm</span>
                                        </div>

                                    </a>


                                </div> -->


                            </div>
                        </div>
                        

                        <ul class="pagination home_pagination">
                            <li class="pagination_item">
                                <a href="#" class="pagination_item_link">
                                    <i class="pagination_item_icon fas fa-angle-left"></i>
                                </a>
                            </li>

                            <li class="pagination_item">
                                <a href="#" class="pagination_item_link pagination_item_active">1</a>
                            </li>
                            <li class="pagination_item">
                                <a href="#" class="pagination_item_link">2</a>
                            </li>
                            <li class="pagination_item">
                                <a href="#" class="pagination_item_link">3</a>
                            </li>
                            <li class="pagination_item">
                                <a href="#" class="pagination_item_link">4</a>
                            </li>
                            <li class="pagination_item">
                                <a href="#" class="pagination_item_link">...</a>
                            </li>

                            <li class="pagination_item">
                                <a href="#" class="pagination_item_link">14</a>
                            </li>

                            <li class="pagination_item">
                                <a href="#" class="pagination_item_link">
                                    <i class="pagination_item_icon fas fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

        <!-- footer -->
        <footer class="footer">
            <div class="grid wide">
                <div class="row">
                    <div class="col l-2-4 m-4 c-6">
                        <h3 class="footer-heading">
                            Chăm sóc khách hàng
                        </h3>
                        <ul class="footer-list">
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">Trung tâm trợ giúp</a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">Mail</a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col l-2-4 m-4 c-6">
                        <h3 class="footer-heading">
                            Giới thiệu
                        </h3>
                        <ul class="footer-list">
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">Giới thiệu</a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">Tuyển dụng</a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">Điều khoản</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col l-2-4 m-4 c-6">
                        <h3 class="footer-heading">
                            Danh mục
                        </h3>
                        <ul class="footer-list">
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">Sữa</a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">Thực phẩm chức năng</a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">Thuốc</a>
                            </li>
                        </ul>

                    </div>

                    <div class="col l-2-4 m-4 c-6">
                        <h3 class="footer-heading">
                            Theo dõi
                        </h3>
                        <ul class="footer-list">
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">
                                    <i class="fab fa-facebook"></i>
                                    Facebook</a>
                            </li>
                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">
                                    <i class="fab fa-instagram"></i>
                                    Instagram</a>
                            </li>

                            <li class="footer-list-item">
                                <a href="#" class="footer-list-item_link">
                                    <i class="fab fa-linkedin"></i>
                                    Linkedin</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col l-2-4 m-4 c-6">
                        <h3 class="footer-heading">
                            Vào cửa hàng trên ứng dụng
                        </h3>

                        <div class="footer_download">
                            <img src="./image/QR_app.png" alt="QRcode" class="footer_download_qr">
                            <div class="footer_download_app">
                                <img src="./image/gg_play.png" alt="photo" class="footer_download_app_gg">
                                <img src="./image/app_store.png" alt="Photo" class="footer_download_app_app_store">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


        <!-- modal layout -->
         <!-- <div class="modal" id="login">
            <div class="modal__overlay" onclick="click_over_lay()">

            </div>

            <div class="modal__body">
                

                    <!-- form register -->

                    <!-- <form class="auth-form" id="form_register" action="dangky.php" method="POST">

                        <div class="auth-form_container">

                            <div class="auth-form_header">
                                <h3 class="auth-form_header_heading">
                                    Đăng Ký
                                </h3>
                                <a href="#" class="auth-form_header__btn" id="form_register_btn" onclick="dangnhap_btn()">Đăng Nhập</a>
                            </div>

                            <div class="auth-form_form">
                                <div class="auth-form_form_group">
                                    <input type="text" class="auth-form_form_input" placeholder="Email của bạn" name="email_dk">
                                </div>

                                <div class="auth-form_form_group">
                                    <input type="password" class="auth-form_form_input" placeholder="Mật khẩu của bạn" name="pass_dk">
                                </div>

                                <div class="auth-form_form_group">
                                    <input type="password" class="auth-form_form_input" placeholder="Nhập lại mật khẩu" name="repass_dk">
                                </div>

                            </div>

                            <div class="auth-form_aside">
                                <p class="auth-form_policy_text">
                                    Bằng việc đăng ký, bạn đã đồng ý với Hoa Giang về
                                    <a href="#" class="auth-form_policy_link">Điều khoản dịch vụ</a> &
                                    <a href="#" class="auth-form_policy_link">Chính sách bảo mật</a>
                                </p>
                            </div>

                            <div class="auth-form_controls">
                                <button class="btn" id="auth-form_controls_btn_back" type="reset" name="reset_dk" onclick="click_over_lay()">TRỞ LẠI</button>
                                <button class="btn btn--primary" type="submit" name="submit_dk">ĐĂNG KÝ</button>
                            </div>
                        </div>

                        <div class="auth-form_socials">
                            <a href="#" class="btn btn-with_icon" id="auth-form_socials_fb">
                                <i class="auth-form_socials_icon fab fa-facebook"></i>
                                Kết nối với Facebook
                            </a>

                            <a href="#" class="btn btn-with_icon" id="auth-form_socials_gg">
                                <i class="auth-form_socials_icon fab fa-google"></i>
                                Kết nối với Google
                            </a>
                        </div>
                    </form> -->

                    <!-- form login -->


                    <!-- <div class="auth-form" id="form_login">

                        <div class="auth-form_container">

                            <div class="auth-form_header">
                                <h3 class="auth-form_header_heading">
                                    Đăng Nhập
                                </h3>
                                <a href="#" class="auth-form_header__btn" onclick="dangky_btn()">Đăng Ký</a>
                            </div>

                            <div class="auth-form_form">
                                <div class="auth-form_form_group">
                                    <input type="text" class="auth-form_form_input" placeholder="Email của bạn">
                                </div>

                                <div class="auth-form_form_group">
                                    <input type="text" class="auth-form_form_input" placeholder="Mật khẩu của bạn">
                                </div>

                            </div>

                            <div class="auth-form_aside">
                                <div class="auth-form_help">
                                    <a href="#" class="auth-form_help_link auth-form_help_link_forgot">Quên mật khẩu</a>
                                    <a href="#" class="auth-form_help_link auth-form_help_link_support">Cần trợ giúp</a>
                                </div>
                            </div>

                            <div class="auth-form_controls">
                                <button class="btn " id="auth-form_controls_btn_back">TRỞ LẠI</button>
                                <button class="btn btn--primary">Đăng Nhập</button>
                            </div>
                        </div>

                        <div class="auth-form_socials">
                            <a href="#" class="btn btn-with_icon" id="auth-form_socials_fb">
                                <i class="auth-form_socials_icon fab fa-facebook"></i>
                                Đăng Nhập với Facebook
                            </a>

                            <a href="#" class="btn btn-with_icon" id="auth-form_socials_gg">
                                <i class="auth-form_socials_icon fab fa-google"></i>
                                Đăng Nhập với Google
                            </a>
                        </div>
                    
                    </div> -->


            </div>
        </div> 

        
    </div>

    </div>
        <!-- link js -->
        <!-- <script  src="./js/login_register.js"></script> -->
</body>


</html>

