
$(function () {
    $("#tabel").DataTable();
    loadData();

    $('#btn_filter').on('click', function (e) {
        filterData();
        e.stopImmediatePropagation();
        return false;
    })

});

function filterData() {
    var start = $('#start').val();
    var end = $('#end').val();
    var str_data = "start=" + start + "&end=" + end;
    $.ajax({
        url: "report/loadData.php",
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
                dom: '<"top"lB>rt<"bottom"ip><"clear">',
                buttons: [
                    {
                        extend: 'excelHtml5',
                        text: 'Download Excel',
                        title: 'Data Report Barang',
                        filename: 'Data Report Barang',
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
                        title: 'Data Report Barang',
                        filename: 'Data Report Barang',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5],
                        },
                        customize:function (doc){
                            doc.content[1].table.widths = ['10%','20%','20%','20%','20%','10%']
                        }
                    },
                ]
            });
        },
    });
}

function loadData() {
    $.ajax({
        url: "report/getData.php",
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
                dom: '<"top"lB>rt<"bottom"ip><"clear">',
                buttons: [
                    {
                        extend: 'excelHtml5',
                        text: 'Download Excel',
                        title: 'Data Report Barang',
                        filename: 'Data Report Barang',
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
                        title: 'Data Report Barang',
                        filename: 'Data Report Barang',
                        exportOptions: {
                            columns: [0, 1, 2, 3, 4, 5],
                        },
                        customize:function (doc){
                            doc.content[1].table.widths = ['10%','20%','20%','20%','20%','10%']
                        }
                    },
                ]
            });
        },
    });
}

