<?php

include "../koneksi.php";
$query = "SELECT MAX(id_keluar) AS kode FROM tb_keluar";
$sql = mysqli_query($koneksi, $query);
$data = mysqli_fetch_array($sql);
$kode_brg = $data['kode'];

$urutan = (int) substr($kode_brg, 12, 4);
$urutan++;

$huruf = "B";
$tgl = date('Ymd');
$idKeluar = $huruf . '-' . $tgl . '-' . sprintf("%04s", $urutan);
?>

<div class="modal fade" id="modal_add">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Form Input Data Barang Keluar</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="">ID Barang Keluar</label>
        <input type="text" class="form-control" id="id_keluar" name="id_keluar" value="<?php echo $idKeluar; ?>" />
        <label for="">Tanggal Keluar</label>
        <input type="date" class="form-control" id="tgl_keluar" name="tgl_keluar" />
        <label for="">ID Barang</label>
        <select class="form-control select2bs4" id="barang_id" name="barang_id">
          <?php
          $query = "SELECT * FROM tb_barang";
          $sql = mysqli_query($koneksi, $query);
          while ($data = mysqli_fetch_array($sql)) {
            echo "<option value='" . $data['id_brg'] . "'>" . $data['nama_brg'] . "</option>";
          }
          ?>
        </select>
        <label for="">Nama Barang</label>
        <input type="text" class="form-control" id="nama_brg" name="nama_brg" readonly />
        <label for="">Stok Barang</label>
        <input type="text" class="form-control" id="stok" name="stok" readonly />
        <label for="">Harga</label>
        <input type="number" class="form-control" id="jml" name="jml" />
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
<script src="formKeluar/keluar.js"></script>