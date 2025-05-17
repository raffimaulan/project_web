<?php

include "../koneksi.php";
$query = "SELECT MAX(id_jenis) AS kode FROM tb_jenis";
$sql = mysqli_query($koneksi, $query);
$data = mysqli_fetch_array($sql);
$kode_jenis = $data['kode'];
$urutan = (int) substr($kode_jenis, 1, 4);
$urutan++;
$huruf = "J";
$idJenis = $huruf . sprintf("%03s", $urutan);
?>

<div class="modal fade" id="modal_add">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Form Input Data Jenis</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="">ID Jenis</label>
        <input type="text" class="form-control" id="id_jenis" name="id_jenis" value="<?php echo $idJenis; ?>" readonly />
        <label for="">Jenis</label>
        <input type="text" class="form-control" id="jenis" name="jenis" />
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" name="btn_simpan" id="btn_simpan" class="btn btn-primary">Simpan</button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<script src="formJenis/jenis.js"></script>