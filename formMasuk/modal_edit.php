<?php
include '../koneksi.php';
$id_masuk     = $_GET['id_masuk'];
$query      = "SELECT * FROM tb_masuk where id_masuk='$id_masuk'";
$sql        = mysqli_query($koneksi, $query);
$data       = mysqli_fetch_array($sql);
$id_masuk     = $data['id_masuk'];
$tgl_masuk   = $data['tgl_masuk'];
$barang_id      = $data['barang_id'];
$jml_masuk     = $data['jml_masuk'];

?>
<div class="modal fade" id="modal_edit">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Edit Barang Masuk</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label>ID Barang</label>
        <input type="text" class="form-control" id="id_masuk_e" name="id_masuk_e" value="<?php echo $id_masuk ?>" readonly>
        <label>Tgl Masuk</label>
        <input type="date" class="form-control" id="tgl_masuk_e" name="tgl_masuk_e" value="<?php echo $tgl_masuk ?>">
        <label>ID Barang</label>
        <select class="form-control select2bs4" id="barang_id_e" name="barang_id_e">
          <?php
          $query = "SELECT * FROM tb_barang";
          $sql = mysqli_query($koneksi, $query);
          while ($data = mysqli_fetch_array($sql)) {
            if($barang_id == $data['id_brg']){
              $select = "selected";
            }else{
              $select = "";
            }
            echo "<option $select value='" . $data['id_brg'] . "'>" . $data['nama_brg'] . "</option>";
          }
          ?>
        </select>
        <label for="">Jumlah Masuk</label>
        <input type="number" class="form-control" id="jml_e" name="jml_e" value="<?php echo $jml_masuk ?>" />
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button>
        <button type="button" id="btn_ubah" name="btn_ubah" class="btn btn-primary btn-sm">Ubah data</button>
      </div>
    </div>

  </div>
</div>
<script src="formMasuk/masuk.js"></script>