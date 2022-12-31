<?php
    require_once("/Applications/XAMPP/xamppfiles/htdocs/mockup/config/db.php");
    if(isset($_POST['submit_dk']) && $_POST['email_dk'] != '' && $_POST['pass_dk'] != " " && $_POST['repass_dk'] != " "){
        // echo "ok";exit;
        $email_dk=$_POST['email_dk'];
        $pass_dk=$_POST['pass_dk'];
        $repass_dk=$_POST['repass_dk'];

        if($pass_dk==$repass_dk){
            $sql_check_user= "SELECT * FROM user WHERE user_email= '$email_dk'";
            // $check_user=select_one($sql_check_user);
            $check_user=mysqli_query($link,$sql_check_user);
            // print_r($check_user);exit;
            if(mysqli_num_rows($check_user) > 0){
                header("Location: index.php");
            }
            else{
                $data=array();
                $data['user_email']="$email_dk";
                $data['user_password']="$pass_dk";

                $tbl="user";

                $sql_insert_user=data_to_sql_insert($tbl,$data);
                $ret= exec_update($sql_insert_user);
                // echo 'ok';exit;
            }
        }
        else{
            header("Location: index.php");
        }
    }
    else{
        //  echo "no";      
        header("Location: index.php");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng Ký</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
</head>
<body>
    <div class="container-fluid">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Đăng Ký Thành Công</h4>
                <p class="card-text">Bạn có muốn tiếp tục đăng nhập</p>
                <button type="submit" class="btn btn-success"><a style="color: white; text-decoration: none;" href="user.php?email_user=<?php echo $email_dk;?>&pass_user=<?php echo $pass_dk ?> "> Đồng ý</a></button>
                <button type="submit" class="btn btn-secondary"><a style="color: white; text-decoration: none;" href="index.php">Từ chối</a></button>
            </div>
        </div>
    </div>
</body>
</html>



