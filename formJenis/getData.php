<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include "../koneksi.php";

$no = 1;
$query = mysqli_query($koneksi, "SELECT * FROM tb_jenis ORDER BY id_jenis DESC") or die(mysqli_error($koneksi));
while ($result = mysqli_fetch_array($query)) {
?>
    <tr>
        <td><?php echo $no++; ?></td>
        <td><?php echo $result['id_jenis']; ?></td>
        <td><?php echo $result['jenis']; ?></td>
        <td>
            <button class="btn btn-sm btn-warning" onclick="edit_data('<?php echo $result['id_jenis']; ?>')" value="<?php echo $result['id_jenis']; ?>">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="delete_data('<?php echo $result['id_jenis']; ?>')">Delete</button>
        </td>
    </tr>
<?php } ?>