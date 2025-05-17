<?php

session_start();
include "../koneksi.php";

$id_brg     = $_POST['id_brg'];
$nama_brg   = $_POST['nama_brg'];
$satuan     = $_POST['satuan'];
$jenis      = $_POST['jenis'];
$stok       = $_POST['stok'];
$harga      = $_POST['harga'];
$input_date = date('Y-m-d H:i:s');
$user = $_SESSION['username'];

if (empty($date['error'])) {
  $query = "UPDATE tb_barang set nama_brg='$nama_brg',satuan='$satuan',jenis='$jenis',stok_awal='$stok',harga='$harga',input_date='$input_date',updater='$user' where id_brg='$id_brg'";

  mysqli_query($koneksi, $query) or die("gagal perintah SQL" . mysqli_error($conn));
  $data = 1;
} else {
  $data = "gagal";
}

echo json_encode($data);
