<?php 
include '../koneksi.php';

$satuan_id = $_GET['id_satuan'];
$data = mysqli_query($koneksi,"SELECT * FROM tb_satuan WHERE id_satuan = '$satuan_id'");
while ($r = mysqli_fetch_array($data)) {
?>
<div class="modal fade" id="modal_edit">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Form Edit Data Satuan</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="">Satuan ID</label>
        <input type="text" class="form-control" id="id_satuan_e" name="id_satuan_e" readonly value="<?php echo $r['id_satuan'] ?>" />
        <label for="">Satuan</label>
        <input type="text" class="form-control" id="satuan_e" name="satuan_e"  value="<?php echo $r['satuan'] ?>"/>
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
<script src="formSatuan/satuan.js"></script>