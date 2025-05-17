
$(function () {
    $("#tabel").DataTable();
    loadData();

    $("#btn_add").click(function (e) {
        console.log('masuk')
        e.preventDefault();
        // $('#modal_add').modal('show');
        $.ajax({
            url: "barang/modal_add.php",
            type: 'GET',
            success: function (data) {
                $('#konten').html(data);
                $('#modal_add').modal('show');
                reset();
            },
            error: function (e) {
                console.log(e);
            }
        });
        e.stopImmediatePropagation();
    })

    $('#btn_edit').on('click', function (e) {
        e.preventDefault();
        var cek = $(".cek:checked");
        if (cek.length == 1) {
            var id = [];
            $(cek).each(function () {
                id.push($(this).val());
                // alert(id);
                var str_data = "id_brg=" + id;
                $.ajax({
                    url: "barang/modal_edit.php",
                    type: "get",
                    data: str_data,
                    success: function (data) {
                        $("#konten").html(data);
                        $("#modal_edit").modal("show");
                        // reset();
                    },
                });
            });
        } else {
            alert("pilih data satu saja!!");
        }
        e.stopImmediatePropagation();
    });

    $("#btn_delete").click(function (e) {
        var cek = $(".cek:checked");
        if (cek.length > 0) {
            var id = [];
            $(cek).each(function () {
                id.push($(this).val());
                var str_data = "id_brg=" + id;
                $.ajax({
                    url: "barang/delete.php",
                    type: "POST",
                    data: str_data,
                    success: function (data) {
                        if ((data = "1")) {
                            toastr.success("data berhasil dihapus");
                            loadData();
                        } else {
                            toastr.error(data);
                        }
                    },
                });
            });
        } else {
            alert("pilih data satu saja!!");
        }
        e.stopImmediatePropagation();
    });

    function reset() {
        $('#nama_brg').val('');
        $('#satuan').val('');
        $('#jenis').val('');
        $('#stok').val('');
        $('#harga').val('');
    }

    $("#btn_simpan").on("click", function (e) {
    // $(document).on('click', '#btn_simpan', function (e) {
        // alert("Data berhasil disimpan");
        var id_brg = $('#id_brg').val();
        var nama_brg = $('#nama_brg').val();
        var satuan = $('#satuan').val();
        var jenis = $('#jenis').val();
        var stok = $('#stok').val();
        var harga = $('#harga').val();

        if (id_brg == '')
            alert('Barang ID wajib diisi!')
        else if (nama_brg == '')
            alert('Nama Barang wajib diisi!')
        else if (jenis == '')
            alert('Jenis Barang wajib diisi!')
        else if (satuan == '')
            alert('Satuan wajib diisi!')
        else if (stok == '')
            alert('>Stok Awal wajib diisi!')
        else if (harga == '')
            alert('Satuan wajib diisi!')
        else {
            var str_data = "id_brg=" + id_brg +
                "&nama_brg=" + nama_brg +
                "&satuan=" + satuan +
                "&jenis=" + jenis +
                '&stok=' + stok +
                '&harga=' + harga;
            $.ajax({
                url: "barang/add.php",
                type: 'POST',
                dataType: "text",
                data: str_data,
                success: function (data) {
                    if (data == '1') {
                        // alert("Data berhasil disimpan");
                        loadData();
                        $('#modal_add').modal('hide');
                        toastr.success('data berhasil disimpan')
                    } else {
                        toastr.error(data);
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error:", error);
                }
            })
        }

    });

    $("#btn_ubah").on("click", function (e) {
    // $(document).on('click', '#btn_ubah', function (e) {
        console.log('edit')
        var id_brg_e = $("#id_brg_e").val();
        var nama_brg_e = $("#nama_brg_e").val();
        var jenis_e = $("#jenis_e").val();
        var satuan_e = $("#satuan_e").val();
        var stok_e = $("#stok_e").val();
        var harga_e = $("#harga_e").val();

        if (id_brg_e == "") {
            alert("id_brg_e wajib diisi abangku!");
        } else if (nama_brg_e == "") {
            alert("nama_brg_e wajib diisi abangku!");
        } else if (jenis_e == "") {
            alert("jenis_e wajib diisi abangku!");
        } else if (satuan_e == "") {
            alert("satuan_e wajib diisi abangku!");
        } else if (stok_e == "") {
            alert("stok_e wajib diisi abangku!");
        } else if (harga_e == "") {
            alert("harga_e wajib diisi abangku!");
        } else {
            var str_data =
                "id_brg=" + id_brg_e +
                "&nama_brg=" + nama_brg_e +
                "&satuan=" + satuan_e +
                "&jenis=" + jenis_e +
                "&stok=" + stok_e +
                "&harga=" + harga_e;
            $.ajax({
                type: "POST",
                url: "barang/edit.php",
                dataType: "text",
                data: str_data,
                success: function (data) {
                    if (data == "1") {
                        loadData();
                        $("#modal_edit").modal("hide");
                        toastr.success("data berhasil diubah");
                    } else {
                        toastr.error(data);
                    }
                },
            });
        }
    });
});


function loadData() {
    $.ajax({
        url: "barang/getData.php",
        type: "get",
        success: function (data) {
            $("#tabel").dataTable().fnClearTable();
            $("#tabel").dataTable().fnDraw();
            $("#tabel").dataTable().fnDestroy();
            $("#tabel tbody").html(data);
            $("#tabel").dataTable({
                lengthMenu: [
                    [10, 20, 25, 50, 100, 15, 5, -1],
                    ["10", "20", "25", "50", "100", "15", "5", "show all"],
                ],
                paging: true,
                searching: true,
                ordering: true,
            });
        },
    });
}

// function loadData() {
//     $.ajax({
//         url: "barang/getData.php",
//         type: 'GET',
//         success: function (data) {
//             // $('#tabel').DataTable().fnClearTable();
//             // $('#tabel').DataTable().fnDraw();
//             // $('#tabel').DataTable().fnDestroy();
//             if ($.fn.DataTable.isDataTable('#tabel')) {
//                 $('#tabel').DataTable().clear().destroy();
//             }
//             $('#tabel tbody').html(data);
//             $('#tabel').DataTable({
//                 lengthMenu: [
//                     [10, 20, 25, 50, 100, 15, 5, -1],
//                     ['10', '20', '25', '50', '100', '15', '5', 'Show all'],
//                 ],
//                 paging: true,
//                 searching: true,
//                 ordering: true
//             });
//         },
//         error: function (xhr, status, error) {
//             console.error("Error:", error);
//         }
//     });
// }
