<?php

session_start();
include "../koneksi.php";

$id_jenis = $_POST['id_jenis'];
$jenis = $_POST['jenis'];
$input_date = date('Y-m-d H:i:s');
$user = $_SESSION['username'];

if (empty($data['error'])) {
    $query = "INSERT INTO tb_jenis SET id_jenis='$id_jenis', jenis='$jenis', updater='$user', input_date='$input_date'";
    mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($koneksi));
    $data = 1;
} else {
    $data = "gagal";
}

echo json_encode($data);
