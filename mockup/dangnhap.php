<?php
    include("/Applications/XAMPP/xamppfiles/htdocs/mockup/config/lib_db.php");
    connect();
    if(isset($_POST['dangnhap_sub'])){
        // echo "ok"; exit;
        $email_login=$_POST['email_login'];
        // echo $email_login; exit;
        $pass_login=$_POST['pass_login'];

        $sql_check_login= "SELECT * FROM user WHERE user_email='$email_login'";
        // echo $sql_check_login;exit;
        $datar= select_one($sql_check_login);
        // $check_user=mysqli_query($link, $sql_check_login);
        // print_r($datar) ;exit;
        
        // print_r(count($datar)) ; exit;
        if(count($datar)==0){
            echo "Tai khoan khong ton tai";exit;
        }
        else{
            if($datar['user_password']!=$pass_login){
                echo "sai mat khau";exit;
            }
            else{
                header("refresh: 0.5; url = user.php?email_user=$email_login&pass_user=$pass_login");
            }
        }
        
    }
    else{
        // echo "no"; exit;
    }
?>

