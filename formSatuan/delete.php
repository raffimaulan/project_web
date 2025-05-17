<?php

include "../koneksi.php";

$id_satuan = $_POST['id_satuan'];

$query = "DELETE FROM tb_satuan WHERE id_satuan='$id_satuan'";
mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($koneksi));

if ($query == true) {
    echo '1';
} else {
    echo "gagal hapus!";
}
