<?php 

include "../koneksi.php";

$users_id = $_POST['users_id'];
$username = $_POST['username'];
$password = $_POST['password'];
$status = $_POST['status'];
$create_date = date('Y-m-d H:i:s');

if(empty($data['error'])){
    $query = "UPDATE tb_user SET username='$username', password='$password', status='$status', create_date='$create_date' WHERE users_id='$users_id'"; 
    mysqli_query($koneksi,$query) or die("gagal perintah SQL".mysqli_error($koneksi));
    $data = 1;
}else{
    $data = "gagal";
}

echo json_encode($data);
?>