<?php

include "../koneksi.php";

$id_brg      = $_POST['id_brg'];

$query       = " DELETE from tb_barang where id_brg='$id_brg'";
mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($conn));
if ($data == true) {
    echo  '1';
} else {
    echo 'gagal hapus !';
}
