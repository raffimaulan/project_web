<?php 

include "../koneksi.php";

$id_satuan = $_POST['id_satuan'];
$satuan = $_POST['satuan'];

if(empty($data['error'])){
    $query = "UPDATE tb_satuan SET satuan='$satuan' WHERE id_satuan='$id_satuan'"; 
    mysqli_query($koneksi,$query) or die("gagal perintah SQL".mysqli_error($koneksi));
    $data = 1;
}else{
    $data = "gagal";
}

echo json_encode($data);
?>