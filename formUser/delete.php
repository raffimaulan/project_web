<?php

include "../koneksi.php";

$users_id = $_POST['users_id'];
$create_date = date('Y-m-d H:i:s');

$query = "DELETE FROM tb_user WHERE users_id='$users_id'";
mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($koneksi));

if ($query == true) {
    echo '1';
} else {
    echo "gagal hapus!";
}
