<?php

session_start();
include "../koneksi.php";

$id_jenis = $_POST['id_jenis'];
$jenis = $_POST['jenis'];
$input_date = date('Y-m-d H:i:s');
$user = $_SESSION['username'];

if (empty($data['error'])) {
    $query = "UPDATE tb_jenis SET jenis='$jenis',input_date='$input_date',updater='$user' WHERE id_jenis='$id_jenis'";
    mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($koneksi));
    $data = 1;
} else {
    $data = "gagal";
}

echo json_encode($data);
