$(function () {
    loadData();
});

function loadData() {
    $.ajax({
        url: "dashboard/getData.php",
        type: "get",
        dataType: "json",
        success: function (data) {
            $('#total_pengguna').text(data.total_user);
            $('#jumlah_barang').text(data.total_barang);
            $('#total_masuk').text(data.total_masuk);
            $('#jumlah_keluar').text(data.total_keluar);

            var labels = Object.keys(data.data_masuk);
            var dataBarangMasuk = Object.values(data.data_masuk);
            var dataBarangKeluar = Object.values(data.data_keluar);

            var barChartData = {
                labels: labels,
                datasets: [
                    {
                        label: 'Barang Masuk',
                        backgroundColor: 'rgba(60,141,188,0.9)',
                        borderColor: 'rgba(60,141,188,0.8)',
                        borderWidth: 1,
                        data: dataBarangMasuk
                    },
                    {
                        label: 'Barang Keluar',
                        backgroundColor: 'rgb(220,53,69)',
                        borderColor: 'rgb(220,53,69)',
                        borderWidth: 1,
                        data: dataBarangKeluar
                    }
                ]
            };

            var barChartCanvas = document.getElementById('barChart').getContext('2d');

            var barChartOptions = {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    position: 'bottom',
                    cursor: "pointer",
                    itemclick: toggleDataSeries
                },
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: "List Barang",
                            fontColor: '#333',
                            fontStyle: 'bold'
                        }
                    }],
                    yAxes: [{
                        id: 'y-axis-1',
                        position: 'left',
                        scaleLabel: {
                            display: true,
                            labelString: "Total Barang Masuk",
                            fontColor: '#4F81BC',
                            fontStyle: 'bold'
                        },
                        ticks: {
                            beginAtZero: true,
                            fontColor: '#4F81BC'
                        }
                    }, {
                        id: 'y-axis-2',
                        position: 'right',
                        scaleLabel: {
                            display: true,
                            labelString: "Total Barang Keluar",
                            fontColor: 'red',
                            fontStyle: 'bold'
                        },
                        ticks: {
                            beginAtZero: true,
                            fontColor: 'red'
                        }
                    }]
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                    shared: true
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                annotation: {
                    drawTime: 'afterDatasetsDraw',
                    annotations: [
                        {
                            type: 'line',
                            mode: 'vertical',
                            scaleID: 'x-axis-0',
                            value: labels.length - 1, // Position at the last label
                            borderColor: 'red',
                            borderWidth: 2,
                            label: {
                                enabled: true,
                                content: 'Total Barang Keluar',
                                position: 'top',
                                fontColor: 'red',
                                fontStyle: 'bold',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                fontSize: 14,
                                fontStyle: 'normal',
                                padding: {
                                    top: 4,
                                    bottom: 4,
                                    left: 6,
                                    right: 6
                                }
                            }
                        },
                        {
                            type: 'line',
                            mode: 'vertical',
                            scaleID: 'x-axis-0',
                            value: labels.length - 1, // Position at the last label
                            borderColor: 'blue',
                            borderWidth: 2,
                            label: {
                                enabled: true,
                                content: 'Total Barang Masuk',
                                position: 'top',
                                fontColor: 'blue',
                                fontStyle: 'bold',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                fontSize: 14,
                                fontStyle: 'normal',
                                padding: {
                                    top: 4,
                                    bottom: 4,
                                    left: 6,
                                    right: 6
                                }
                            }
                        }
                    ]
                }
            };

            new Chart(barChartCanvas, {
                type: 'bar',
                data: barChartData,
                options: barChartOptions
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", error);
        }
    });
}


function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else {
        e.dataSeries.visible = true;
    }
    e.chart.render();
}