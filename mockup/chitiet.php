<?php 
    include("/Applications/XAMPP/xamppfiles/htdocs/mockup/config/lib_db.php");
    connect();
    if(isset($_GET)){
        // echo 'ok';exit;
        $product_id=$_GET['product_id'];
        // echo $product_id;exit;
        $sql="SELECT * FROM product INNER JOIN catalog on product.catalog_id = catalog.catalog_id WHERE product.product_id=$product_id";
        // echo $sql;exit;
        $data_r=select_one($sql);
        // print_r($data_r);exit;
    }
    else{
        header("Location: index.php");
    }
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
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/responsive.css">
    <link rel="stylesheet" href="./css/chitiet.css">
    

    <!-- link font tren googlefont -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">

    <!-- link file icon  -->
    <link rel="stylesheet" href="./fontawesome-free-5.15.1-web/css/all.min.css">


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

                        <li class="header__navbar-item">
                            <a id="id_dk" onclick="dangky()" href="#">Đăng Ký</a>
                        </li>
                        <li class="header__navbar-item"><a id="id_dn" href="#" onclick="dangnhap()">Đăng Nhập</a></li>

                        <!-- khi da dang nhap -->
                        <!-- <li class="header__navbar-item header__navbar-user">
                            <img src="./image/user.png" alt="Photo" class="header__navbar-user_img">
                            <span class="header__navbar-user_name">
                                Huy Quang Phùng
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
                                    <a id="header__navbar-user_menu-item_link" href="#">Đăng xuất</a>
                                </li>
                            </ul>
                        </li> -->
                    </ul>
                </nav>

                <div class="header_search">
                    <div class="header_search_mobile">
                        <i class="header_search_mobile_icon fas fa-bars"></i>
                        <i class="header_search_mobile_icon fas fa-search"></i>
                    </div>
                    <div class="header__logo hide-on-tablet">
                        <a href="index.php" class="logo_link"><img src="./image/logoHG.png" alt="Photo"
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
                    <div class="header_search_icon">
                        <div class="header_search_cart_wrap">
                            <i class="header_search_icon_cart fas fa-shopping-cart"></i>

                            <!-- <span class="header_search_cart_notice">3</span> -->
                            <!-- empty cart -->
                            <!-- class noitem : header_search_cart_list_no_item  -->
                            <div class="header_search_cart_list ">
                                <img src="./image/no_cart.png" alt="Photo" class="header_search_cart_img_no_item">
                                <p class="header_search_cart_list_no_item_msg">Chưa có sản phẩm</p>

                                <!-- cart have items -->
                                <!-- <h3 class="header_cart_heading">Sản phẩm đã thêm</h3>

                                <ul class="header_cart_list_have_item">
                                    <li class="header_cart_list_have_item_item">
                                        <img src="./image/Notification_sua.jpg" alt="Photo"
                                            class="header_cart_list_have_item_item_img">
                                        <div class="header_cart_list_have_item_item_info">
                                            <div class="header_cart_list_have_item_item_info_head">
                                                <h5 class="header_cart_list_have_item_item_info_head_name">Bộ sữa phát
                                                    triển toàn diện cho bé</h5>
                                                <div class="header_cart_list_have_item_item_info_head_price_wrap">
                                                    <span
                                                        class="header_cart_list_have_item_item_info_head_price">1.000.000đ</span>
                                                    <span
                                                        class="header_cart_list_have_item_item_info_head_multiply">x</span>
                                                    <span
                                                        class="header_cart_list_have_item_item_info_head_quantity">2</span>
                                                </div>
                                            </div>

                                            <div class="header_cart_list_have_item_item_info_body">
                                                <span class="header_cart_list_have_item_item_info_body_description">
                                                    Phân loại: Bạc
                                                </span>

                                                <span
                                                    class="header_cart_list_have_item_item_info_body_remove">Xoá</span>

                                            </div>
                                        </div>
                                    </li>

                                    <li class="header_cart_list_have_item_item">
                                        <img src="./image/Notification_bcs.jpg" alt="Photo"
                                            class="header_cart_list_have_item_item_img">
                                        <div class="header_cart_list_have_item_item_info">
                                            <div class="header_cart_list_have_item_item_info_head">
                                                <h5 class="header_cart_list_have_item_item_info_head_name">Bao cao su
                                                    chính hãng</h5>
                                                <div class="header_cart_list_have_item_item_info_head_price_wrap">
                                                    <span
                                                        class="header_cart_list_have_item_item_info_head_price">200.000đ</span>
                                                    <span
                                                        class="header_cart_list_have_item_item_info_head_multiply">x</span>
                                                    <span
                                                        class="header_cart_list_have_item_item_info_head_quantity">5</span>
                                                </div>
                                            </div>

                                            <div class="header_cart_list_have_item_item_info_body">
                                                <span class="header_cart_list_have_item_item_info_body_description">
                                                    Phân loại: Dâu
                                                </span>

                                                <span
                                                    class="header_cart_list_have_item_item_info_body_remove">Xoá</span>

                                            </div>
                                        </div>
                                    </li>

                                    <li class="header_cart_list_have_item_item">
                                        <img src="./image/notification_thuoc.jpg" alt="Photo"
                                            class="header_cart_list_have_item_item_img">
                                        <div class="header_cart_list_have_item_item_info">
                                            <div class="header_cart_list_have_item_item_info_head">
                                                <h5 class="header_cart_list_have_item_item_info_head_name">Bộ 3 thuốc
                                                    đặc trị</h5>
                                                <div class="header_cart_list_have_item_item_info_head_price_wrap">
                                                    <span
                                                        class="header_cart_list_have_item_item_info_head_price">2.000.000đ</span>
                                                    <span
                                                        class="header_cart_list_have_item_item_info_head_multiply">x</span>
                                                    <span
                                                        class="header_cart_list_have_item_item_info_head_quantity">1</span>
                                                </div>
                                            </div>

                                            <div class="header_cart_list_have_item_item_info_body">
                                                <span class="header_cart_list_have_item_item_info_body_description">
                                                    Phân loại: gold
                                                </span>

                                                <span
                                                    class="header_cart_list_have_item_item_info_body_remove">Xoá</span>

                                            </div>
                                        </div>
                                    </li>
                                </ul> -->

                                <!-- <button class="view_cart btn btn--primary"><a href="#">Xem giỏ hàng</a></button> -->
                                <!-- <a href="#" class="view_cart btn btn--primary">Xem giỏ hàng</a> -->
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
                <div class="row  app_content">
                    <div class="col l-5 ">
                       <div class="home_product_item_img" style="background-image: url(image/<?php echo $data_r['image_link']; ?>);"></div>

                       <div class="wrap_chitiet_share">
                           <div class="chitiet_chiase">
                               <span class="chitiet_chiase_lable">Chia Sẻ :</span>
                               <i class="fab fa-facebook"></i>
                               <i class="fab fa-instagram"></i>
                               <i class="fab fa-facebook-messenger"></i>
                               <i class="fab fa-twitter"></i>
                           </div>
    
                           <div class="chitiet_luotthich">
                                <i class="far fa-heart"></i>
                               <span class="chitiet_luotthich_lable">Lượt thích : 9K</span>
    
                           </div>
                       </div>
                       
                    </div>

                    <div class="col l-7">
                        <div class="chitiet_info">
                            <h3 class="chitiet_info_name"><?php echo $data_r['product_name']; ?></h3>
                            <div class="chitiet_info_danhgia">
                                <div class="home_product_item_action_rating">
                                    <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                     <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                     <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                     <i class="home_product_item_action_rating-gold_star fas fa-star"></i>
                                     <i class="fas fa-star"></i>
                                </div>

                                <span class="chitiet_info_danhgia_luot_vote">30,7k Đánh Giá</span>

                                <span class="chitiet_info_danhgia_luot_mua">20,7k Đã Bán</span>
                                
                            </div>
                            <div class="wrap_chitiet_info_gia">
                                <div class="chitiet_info_gia">
                                    <span class="chitiet_info_gia_old"><?php echo $data_r['price']; ?>đ</span>
                                    <span class="chitiet_info_gia_current"><?php echo $data_r['price'] - $data_r['price']*$data_r['discount']/100; ?>đ</span>
                                    <span class="chitiet_info_gia_giamgia"><?php echo $data_r['discount']; ?>% Giảm</span>
                                </div>
                                <span class="chitiet_info_gia_flash_sale">FLASH SALE BẮT ĐẦU SAU 12:00, 9 Th01</span>
                                <div class="chitiet_info_gia_camket">
                                    <img src="./image/flash_sale.png" alt="" class="chitiet_info_gia_camket_img">
                                    <span class="chitiet_info_gia_camket_lable">Ở đâu rẻ hơn, Shopee hoàn tiền</span>
                                    <i class="far fa-question-circle"></i>
                                </div>
                            </div>

                            <div class="chitiet_info_vanchuyen">
                                <span class="chitiet_info_vanchuyen_lable">Vận Chuyển</span>
                                <div class="chitiet_info_vanchuyen_info">
                                    <img src="./image/vanchuyen.png" alt="" class="chitiet_info_vanchuyen_info_img">
                                    <span class="chitiet_info_vanchuyen_info_lable">Miễn Phí Vận Chuyển</span>
                                </div>
                            </div>

                            <div class="chitiet_info_soluong">
                                <span class="chitiet_info_soluong_lable">Số Lượng</span>
                                <input type="number" class="chitiet_info_soluong_quantity">
                                <span class="chitiet_info_soluong_soluongcon">
                                    <?php echo $data_r['quantity']; ?> sản phẩm có sẵn
                                </span>
                            </div>

                            <div class="chitiet_info_btn">
                                <button class="btn-add-into-cart" type="submit">Thêm Vào Giỏ Hàng</button>
                                <button class="btn-mua-ngay" type="submit">Mua Ngay</button>
                            </div>
                        </div>

                        <div class="chinhsach">
                            <img src="./image/camket.png" alt="" class="chinhsach_img">
                            <span class="chinhsach_lable">3 Ngày Trả Hàng / Hoàn Tiền</span>
                        </div>

                        
                            

                        

                       
                    </div>

                </div>

                <div class="row">
                    <div class="col l-12">

                        <h2 class="chitiet-detail-heading">CHI TIẾT SẢN PHẨM</h2>
                        <div class="chitiet-detail_wrap">
                            <span class="chitiet-detail-lable">Danh Mục</span>
                            <span class="chitiet-detail-content"><?php echo $data_r['catalog_name']; ?></span>
                        </div>
    
                        <div class="chitiet-detail_wrap">
                            <span class="chitiet-detail-lable">Thương Hiệu</span>
                            <span class="chitiet-detail-content">Abbott</span>
                        </div>
    
                        <div class="chitiet-detail_wrap">
                            <span class="chitiet-detail-lable">Hạn Sử Dụng</span>
                            <span class="chitiet-detail-content">20 Tháng</span>
                        </div>
    
                        <div class="chitiet-detail_wrap">
                            <span class="chitiet-detail-lable">Kho hàng</span>
                            <span class="chitiet-detail-content"><?php echo $data_r['quantity']; ?></span>
                        </div>
                    </div>
                </div>

                <div class="row chitiet-mota">
                    <div class="col l-12">
                        <h2 class="chitiet-detail-heading">MÔ TẢ SẢN PHẨM</h2>
                        <p class="chitiet-mota-info"><?php echo $data_r['content']; ?></p>
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
         <div class="modal" id="login">
            <div class="modal__overlay" onclick="click_over_lay()">

            </div>

            <div class="modal__body">
                

                    <!-- form register -->

                    <form class="auth-form" id="form_register" action="dangky.php" method="POST">

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
                    </form>

                    <!-- form login -->


                    <form class="auth-form" id="form_login" action="dangnhap.php" method="POST">

                        <div class="auth-form_container">

                            <div class="auth-form_header">
                                <h3 class="auth-form_header_heading">
                                    Đăng Nhập
                                </h3>
                                <a href="#" class="auth-form_header__btn" onclick="dangky_btn()">Đăng Ký</a>
                            </div>

                            <div class="auth-form_form">
                                <div class="auth-form_form_group">
                                    <input type="text" class="auth-form_form_input" placeholder="Email của bạn" name="email_login">
                                </div>

                                <div class="auth-form_form_group">
                                    <input type="password" class="auth-form_form_input" placeholder="Mật khẩu của bạn" name="pass_login">
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
                                <button name="dangnhap_sub" class="btn btn--primary">Đăng Nhập</button>
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
                    
                    </form>


            </div>
        </div>

        
    </div>

    </div>
        <!-- link js -->
        <script  src="./js/login_register.js"></script>
</body>


</html>

