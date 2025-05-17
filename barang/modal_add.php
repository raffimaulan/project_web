<?php

include "../koneksi.php";
$query = "SELECT MAX(id_brg) AS kode FROM tb_barang";
$sql = mysqli_query($koneksi, $query);
$data = mysqli_fetch_array($sql);
$kode_brg = $data['kode'];
$urutan = (int) substr($kode_brg, 1, 4);
$urutan++;
$huruf = "B";
$idBarang = $huruf . sprintf("%04s", $urutan);
?>

<div class="modal fade" id="modal_add">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Form Input Data Barang</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <label for="">ID Barang</label>
        <input type="text" class="form-control" id="id_brg" name="id_brg" value="<?php echo $idBarang; ?>" />
        <label for="">Nama Barang</label>
        <input type="text" class="form-control" id="nama_brg" name="nama_brg" />
        <label for="">Jenis Barang</label>
        <select class="form-control" id="jenis" name="jenis">
          <?php
          $query = "SELECT * FROM tb_jenis";
          $sql = mysqli_query($koneksi, $query);
          while ($data = mysqli_fetch_array($sql)) {
            echo "<option value='" . $data['id_jenis'] . "'>" . $data['jenis'] . "</option>";
          }
          ?>
        </select>
        <label for="">Satuan</label>
        <select class="form-control" id="satuan" name="satuan">
          <?php
          $query = "SELECT * FROM tb_satuan";
          $sql = mysqli_query($koneksi, $query);
          while ($data = mysqli_fetch_array($sql)) {
            echo "<option value='" . $data['id_satuan'] . "'>" . $data['satuan'] . "</option>";
          }
          ?>
        </select>
        <label for="">Stok Awal</label>
        <input type="number" class="form-control" id="stok" name="stok" />
        <label for="">Harga</label>
        <input type="number" class="form-control" id="harga" name="harga" />
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
<script src="barang/brg.js"></script>