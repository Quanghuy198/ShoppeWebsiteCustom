<?php
    require_once("/Applications/XAMPP/xamppfiles/htdocs/mockup/config/db.php")
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
    <?php
        if(isset($_GET['Page_layout'])){
            switch ($_GET['Page_layout']){
                case 'danhsach':
                    require_once('sanpham/danhsach.php');
                    break;
                case 'them':
                    require_once('sanpham/them.php');
                    break;
                case 'sua':
                        require_once('sanpham/sua.php');
                        break;
                case 'xoa':
                    require_once('sanpham/xoa.php');
                    break;

                default:
                    require_once('sanpham/danhsach.php');
            }
        }
        else{
            require_once('sanpham/danhsach.php');
        }
    ?>
</body>
</html>