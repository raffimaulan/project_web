<?php

include "../koneksi.php";

$id      = $_GET['id'];
$arrayKu      = array();

$query       = "SELECT a.*, 
COALESCE(SUM(b.jml_masuk),0) AS total_masuk, 
COALESCE(SUM(c.jml_keluar),0) AS total_keluar, 
(a.stok_awal + COALESCE(SUM(b.jml_masuk),0)- COALESCE(SUM(c.jml_keluar),0)) AS stok_saat_ini
FROM tb_barang a LEFT JOIN tb_masuk b ON a.id_brg=b.barang_id LEFT JOIN tb_keluar c ON id_brg = c.barang_id WHERE a.id_brg = '$id' GROUP BY a.id_brg";
$data = mysqli_query($koneksi, $query);

while ($row = $data->fetch_assoc()) {
    $arrayKu[] = $row;
}

echo json_encode($arrayKu);
