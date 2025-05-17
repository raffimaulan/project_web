<?php 

include "../koneksi.php";

$id_satuan = $_POST['id_satuan'];
$satuan = $_POST['satuan'];

if(empty($data['error'])){
    $query = "INSERT INTO tb_satuan SET id_satuan='$id_satuan', satuan='$satuan'"; 
    mysqli_query($koneksi,$query) or die("gagal perintah SQL".mysqli_error($koneksi));
    $data = 1;
}else{
    $data = "gagal";
}

echo json_encode($data);
?>