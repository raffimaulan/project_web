
$(function () {
    $("#tabel").DataTable();
    loadData();

    $("#btn_add").click(function () {
        $(this).prop('disabled', true);
        reset();
        $('#konten').empty(); 
        $.ajax({
            url: "formSatuan/modal_add.php",
            type: 'GET',
            success: function (data) {
                $('#konten').html(data);
                $('#modal_add').modal('show');
            },
            error: function (e) {
                console.log(e);
            },
            complete: function () {
                // Re-enable the button after AJAX request completes
                $("#btn_add").prop('disabled', false);
            }
        });
        e.stopImmediatePropagation();
        return false;
    })

    function reset() {
        // $('#id_satuan').val('');
        $('#satuan').val('');
    }

    $('#btn_simpan').on('click', function (e) {
        var id_satuan = $('#id_satuan').val();
        var satuan = $('#satuan').val();

        if (id_satuan == '')
            alert('ID Satuan wajib diisi!')
        else if (satuan == '')
            alert('Satuan wajib diisi!')
        else {
            var str_data = "id_satuan=" + id_satuan + "&satuan=" + satuan
            $.ajax({
                url: "formSatuan/add.php",
                type: 'POST',
                dataType:"text",
                data:str_data,
                success: function (data) {
                    if (data == '1') {
                        alert("Data berhasil disimpan");
                        loadData();
                        $('#modal_add').modal('hide');
                    }else{
                        alert(data);
                    }
                },
                error: function (xhr, status, error) {
                    console.error("Error:", error);
                }
            })
        }

    });
    
    $('#btn_ubah').on('click', function (e) {
        var id_satuan = $('#id_satuan_e').val();
        var satuan = $('#satuan_e').val();

        if (id_satuan == '')
            alert('ID Satuan wajib diisi!')
        else if (satuan == '')
            alert('Satuan wajib diisi!')
        else {
            var str_data = "id_satuan=" + id_satuan + "&satuan=" + satuan;
            $.ajax({
                url: "formSatuan/edit.php",
                type: 'POST',
                dataType:"text",
                data:str_data,
                success: function (data) {
                    if (data == '1') {
                        loadData();
                        $('#modal_edit').modal('hide');
                        toastr.success('data berhasil diubah');
                    }else{
                        toastr.success(data);
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            })
        }

    });

});

function loadData() {
    $.ajax({
        url: "formSatuan/getData.php",
        type: 'GET',
        success: function (data) {
            // $('#tabel').DataTable().fnClearTable();
            // $('#tabel').DataTable().fnDraw();
            // $('#tabel').DataTable().fnDestroy();
            if ($.fn.DataTable.isDataTable('#tabel')) {
                $('#tabel').DataTable().clear().destroy();
            }
            $('#tabel tbody').html(data);
            $('#tabel').DataTable();
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}

function edit_data(a) {
    $.ajax({
        url: "formSatuan/modal_edit.php",
        type: 'GET',
        data:{
            id_satuan: a
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
        url: "formSatuan/delete.php",
        type: 'POST',
        data:{
            id_satuan: a
        },
        success: function (data) {
            if (data == '1') {
                toastr.success('data berhasil dihapus');
                loadData();
            }else{
                toastr.success(data);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
}
