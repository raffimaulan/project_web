<?php
session_start();
include "../koneksi.php";

$id_brg = $_POST['id_brg'];
$nama_brg = $_POST['nama_brg'];
$jenis = $_POST['jenis'];
$satuan = $_POST['satuan'];
$stok = $_POST['stok'];
$harga = $_POST['harga'];
$input_date = date('Y-m-d H:i:s');
$user = $_SESSION['username'];

if (empty($data['error'])) {
    $query = "INSERT INTO tb_barang SET id_brg='$id_brg',updater='$user', nama_brg='$nama_brg', jenis='$jenis', satuan='$satuan', stok_awal='$stok',harga='$harga',input_date='$input_date'";
    mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($koneksi));
    $data = 1;
} else {
    $data = "gagal";
}

echo json_encode($data);
