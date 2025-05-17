<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include "../koneksi.php";

$no = 1;
$query = mysqli_query($koneksi, "SELECT * FROM tb_user ORder by users_id ASC") or die(mysqli_error($koneksi));
while ($result = mysqli_fetch_array($query)) {
?>
    <tr>
        <td><?php echo $no++; ?></td>
        <td><?php echo $result['users_id']; ?></td>
        <td><?php echo $result['username']; ?></td>
        <td><?php echo $result['password']; ?></td>
        <td><?php if ($result['status'] == 1) {
                echo 'Aktif';
            } else {
                echo 'Tidak Aktif';
            } ?></td>
        <td>
            <button class="btn btn-sm btn-warning" onclick="edit_data('<?php echo $result['users_id']; ?>')" value="<?php echo $result['users_id']; ?>">Edit</button>
            <button class="btn btn-sm btn-danger" onclick="delete_data('<?php echo $result['users_id']; ?>')">Delete</button>
        </td>
    </tr>
<?php } ?>