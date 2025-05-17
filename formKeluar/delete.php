<?php

include "../koneksi.php";

$id_keluar      = $_POST['id_keluar'];

$query       = " DELETE from tb_keluar where id_keluar='$id_keluar'";
$data = mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($conn));
if ($data == true) {
    echo  '1';
} else {
    echo 'gagal hapus !';
}
