<?php
include '../koneksi.php';
$no = 1;
$query = mysqli_query($koneksi,"SELECT * FROM tb_barang a INNER JOIN tb_satuan b ON a.satuan=b.id_satuan INNER JOIN tb_jenis c ON a.jenis=c.id_jenis") or die(mysqli_error($koneksi));
while ($result = mysqli_fetch_array($query)){
?>
<tr>
<td><input type="checkbox" id="select_id" class="cek" value="<?php echo $result['id_brg']; ?>"></td>
    <td><?php echo $no++; ?></td>
    <td><?php echo $result['id_brg']; ?></td>
    <td><?php echo $result['nama_brg']; ?></td>
    <td><?php echo $result['jenis']; ?></td>
    <td><?php echo $result['satuan']; ?></td>
    <td><?php echo $result['stok_awal']; ?></td>
    <td><?php echo $result['harga']; ?></td>
    <!-- <td>
        <button class="btn btn-sm btn-warning" onclick="edit_data('<?php echo $result['users_id']; ?>')" value="<?php echo $result['users_id']; ?>">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="delete_data('<?php echo $result['users_id']; ?>')">Delete</button>
    </td> -->
</tr>
<?php 
}
?>

