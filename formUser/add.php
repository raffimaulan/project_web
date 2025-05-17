<?php 

include "../koneksi.php";

$users_id = $_POST['users_id'];
$username = $_POST['username'];
$password = $_POST['password'];
$status = $_POST['status'];
$create_date = date('Y-m-d H:i:s');

if(empty($data['error'])){
    $query = "INSERT INTO tb_user SET users_id='$users_id', username='$username', password='$password', status='$status', create_date='$create_date'"; 
    mysqli_query($koneksi,$query) or die("gagal perintah SQL".mysqli_error($koneksi));
    $data = 1;
}else{
    $data = "gagal";
}

echo json_encode($data);
?>