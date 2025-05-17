<?php

include "../koneksi.php";

$id_masuk      = $_POST['id_masuk'];

$query       = " DELETE from tb_masuk where id_masuk='$id_masuk'";
$data = mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($conn));
if ($data == true) {
    echo  '1';
} else {
    echo 'gagal hapus !';
}
