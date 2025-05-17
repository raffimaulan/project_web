<?php 
include '../koneksi.php';

$jenis_id = $_GET['id_jenis'];
$data = mysqli_query($koneksi,"SELECT * FROM tb_jenis WHERE id_jenis = '$jenis_id'");
while ($r = mysqli_fetch_array($data)) {
?>
<div class="modal fade" id="modal_edit">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Form Edit Data Jenis</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="">Jenis ID</label>
        <input type="text" class="form-control" id="id_jenis_e" name="id_jenis_e" readonly value="<?php echo $r['id_jenis'] ?>" />
        <label for="">Jenis</label>
        <input type="text" class="form-control" id="jenis_e" name="jenis_e"  value="<?php echo $r['jenis'] ?>"/>
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" name="btn_ubah" id="btn_ubah" class="btn btn-primary">Ubah</button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<?php
}
?>
<script src="formJenis/jenis.js"></script>