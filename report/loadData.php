<?php
include '../koneksi.php';
$no = 1;
$start = $_GET['start'];
$end = $_GET['end'];
$query = mysqli_query($koneksi,"SELECT a.id_brg, a.nama_brg, b.jenis, c.satuan, a.stok_awal, COALESCE(d.jml_masuk, 0) AS jml_masuk,COALESCE(e.jml_keluar, 0) AS jml_keluar, a.stok_awal + COALESCE(d.jml_masuk, 0) - COALESCE(e.jml_keluar, 0) AS actual_stock  FROM tb_barang a 
INNER JOIN tb_jenis b ON a.jenis = b.id_jenis 
INNER JOIN tb_satuan c ON a.satuan = c.id_satuan 
LEFT JOIN tb_masuk d ON a.id_brg = d.barang_id
LEFT JOIN tb_keluar e ON a.id_brg = e.barang_id 
WHERE d.tgl_masuk BETWEEN '$start' AND '$end' 
OR e.tgl_keluar BETWEEN '$start' AND '$end' ORDER BY a.id_brg ASC") or die(mysqli_error($koneksi));
while ($result = mysqli_fetch_array($query)){
?>
<tr>
    <td><?php echo $no++; ?></td>
    <td><?php echo $result['id_brg']; ?></td>
    <td><?php echo $result['nama_brg']; ?></td>
    <td><?php echo $result['jenis']; ?></td>
    <td><?php echo $result['satuan']; ?></td>
    <td><?php echo $result['stok_awal']; ?></td>
    <td><?php echo $result['jml_masuk']; ?></td>
    <td><?php echo $result['jml_keluar']; ?></td>
    <td><?php echo $result['actual_stock']; ?></td>
</tr>
<?php 
}
?>


