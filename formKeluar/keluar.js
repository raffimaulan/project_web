
$(function () {
    $("#tabel").DataTable();
    loadData();

    $('.select2bs4').select2({
        theme: 'bootstrap4'
    })

    $("#btn_add").click(function () {
        // $('#modal_add').modal('show');
        $.ajax({
            url: "formKeluar/modal_add.php",
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
        return false;
    })

    $('#btn_edit').on('click', function (e) {
        var cek = $(".cek:checked");
        if (cek.length == 1) {
            var id = [];
            $(cek).each(function () {
                id.push($(this).val());
                // alert(id);
                var str_data = "id_keluar=" + id;
                $.ajax({
                    url: "formKeluar/modal_edit.php",
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
    });

    $("#btn_delete").click(function () {
        var cek = $(".cek:checked");
        if (cek.length > 0) {
            var id = [];
            $(cek).each(function () {
                id.push($(this).val());
                var str_data = "id_keluar=" + id;
                $.ajax({
                    url: "formKeluar/delete.php",
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
    });

    function reset() {
        $('#tgl_keluar').val('');
        $('#barang_id').val('').change();
        $('#jml').val('');
        $('#stok').val('');
        $('#harga').val('');
    }

    $("#barang_id").on("change", function (e) {
        var id = $('#barang_id').val();
        var str_data = "id=" + id;
        $.ajax({
            url: "formKeluar/cari.php",
            type: "GET",
            data: str_data,
            dataType: "json",
            success: function (data) {
                $('#nama_brg').val(data[0].nama_brg);
                $('#stok').val(data[0].stok_saat_ini);
            },
        });
    });

    $('#btn_filter').on('click', function (e) {
        filterData();
        e.stopImmediatePropagation();
        return false;
    })

    $("#btn_simpan").on("click", function (e) {
        // $(document).on('click', '#btn_simpan', function (e) {
        // alert("Data berhasil disimpan");
        var id_keluar = $('#id_keluar').val();
        var tgl_keluar = $('#tgl_keluar').val();
        var barang_id = $('#barang_id').val();
        var jml = $('#jml').val();
        var stok = $('#stok').val();
        var harga = $('#harga').val();

        if (id_keluar == '')
            alert('ID Keluar wajib diisi!')
        else if (tgl_keluar == '')
            alert('Tgl Keluar wajib diisi!')
        else if (barang_id == '')
            alert('ID Barang wajib diisi!')
        else if (jml == '')
            alert('Jumlah wajib diisi!')
        else {
            var str_data = "id_keluar=" + id_keluar +
                "&tgl_keluar=" + tgl_keluar +
                "&barang_id=" + barang_id +
                "&jml=" + jml;
            $.ajax({
                url: "formKeluar/add.php",
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
                        alert(data);
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
        var id_keluar_e = $("#id_keluar_e").val();
        var tgl_keluar_e = $("#tgl_keluar_e").val();
        var jml_e = $("#jml_e").val();
        var barang_id_e = $("#barang_id_e").val();

        if (id_keluar_e == "") {
            alert("id_keluar_e wajib diisi abangku!");
        } else if (tgl_keluar_e == "") {
            alert("tgl_keluar_e wajib diisi abangku!");
        } else if (jml_e == "") {
            alert("jml_e wajib diisi abangku!");
        } else if (barang_id_e == "") {
            alert("barang_id_e wajib diisi abangku!");
        } else {
            var str_data =
                "id_keluar=" + id_keluar_e +
                "&tgl_keluar=" + tgl_keluar_e +
                "&barang_id=" + barang_id_e +
                "&jml=" + jml_e;
            $.ajax({
                type: "POST",
                url: "formKeluar/edit.php",
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

function filterData() {
    var start = $('#start').val();
    var end = $('#end').val();
    var str_data = "start=" + start + "&end=" + end;
    console.log(str_data)
    $.ajax({
        url: "formKeluar/loadData.php",
        type: "get",
        data: str_data,
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
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excelHtml5',
                        text: 'Download Excel',
                        title: 'Data Barang Keluar',
                        filename: 'Data Barang Keluar',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5],
                            modifier: {
                                page: 'current'
                            }
                        }
                    },
                    {
                        extend: 'pdf',
                        text: 'Report PDF',
                        title: 'Data Barang Keluar',
                        filename: 'Data Barang Keluar',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5],
                        },
                        customize: function (doc) {
                            doc.content[1].table.widths = ['10%', '20%', '20%', '20%', '20%', '10%']
                        }
                    },
                ]
            });
        },
    });
}

function loadData() {
    $.ajax({
        url: "formKeluar/getData.php",
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
                searching: true,
                dom: 'Bfrtip',
                buttons: [
                    {
                        extend: 'excelHtml5',
                        text: 'Download Excel',
                        title: 'Data Barang Keluar',
                        filename: 'Data Barang Keluar',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5],
                            modifier: {
                                page: 'current'
                            }
                        }
                    },
                    {
                        extend: 'pdf',
                        text: 'Report PDF',
                        title: 'Data Barang Keluar',
                        filename: 'Data Barang Keluar',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5],
                        },
                        customize: function (doc) {
                            doc.content[1].table.widths = ['10%', '20%', '20%', '20%', '20%', '10%']
                        }
                    },
                ]
            });
        },
    });
}

function edit_data(a) {
    $.ajax({
        url: "formKeluar/modal_edit.php",
        type: 'GET',
        data: {
            id_keluar: a
        },
        success: function (data) {
            $('#konten').html(data);
            $('#modal_edit').modal('show');
        },
        error: function (e) {
            console.log(e);
        }
    });
}

function delete_data(a) {
    $.ajax({
        url: "formKeluar/delete.php",
        type: 'POST',
        data: {
            id_keluar: a
        },
        success: function (data) {
            if (data == '1') {
                toastr.success('data berhasil dihapus');
                loadData();
            } else {
                toastr.error(data);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
}
