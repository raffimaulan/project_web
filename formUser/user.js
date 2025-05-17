
$(function () {
    $("#tabel").DataTable();
    loadData();

    $("#btn_add").click(function () {
        $('#modal_add').modal('show');
        reset();
    })

    function reset() {
        $('#users_id').val('');
        $('#username').val('');
        $('#password').val('');
        $('#status').val('');
    }

    $('#btn_simpan').on('click', function (e) {
        var users_id = $('#users_id').val();
        var username = $('#username').val();
        var password = $('#password').val();
        var status = $('#status').val();

        if (users_id == '')
            alert('User ID wajib diisi!')
        else if (username == '')
            alert('Username wajib diisi!')
        else if (password == '')
            alert('Password wajib diisi!')
        else if (status == '')
            alert('Status wajib diisi!')
        else {
            var str_data = "users_id=" + users_id + "&username=" + username + "&password=" + password + "&status=" + status;
            $.ajax({
                url: "formUser/add.php",
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
        var users_id = $('#users_id_e').val();
        var username = $('#username_e').val();
        var password = $('#password_e').val();
        var status = $('#status_e').val();

        if (users_id == '')
            alert('User ID wajib diisi!')
        else if (username == '')
            alert('Username wajib diisi!')
        else if (password == '')
            alert('Password wajib diisi!')
        else if (status == '')
            alert('Status wajib diisi!')
        else {
            var str_data = "users_id=" + users_id + "&username=" + username + "&password=" + password + "&status=" + status;
            console.log(str_data);
            $.ajax({
                url: "formUser/edit.php",
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
        url: "formUser/getData.php",
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
        url: "formUser/modal_edit.php",
        type: 'GET',
        data:{
            users_id: a
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
        url: "formUser/delete.php",
        type: 'POST',
        data:{
            users_id: a
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
