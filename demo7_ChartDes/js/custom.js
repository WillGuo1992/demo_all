$(document).ready(function () {
    init_lineChart();
    init_barChart();
    clickTocheck();
});

var init_lineChart = function () {
    var myChart = echarts.init(document.getElementById('lineChart'));
// 指定图表的配置项和数据
    var option = {
        title: {
            text: '每月产品销量',
            left: 'center'
        },
        tooltip: {},
        legend: {
            data: ['销量'],
            right: '10%'
        },
        xAxis: {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: [12, 11, 11, 0, 0, 0, 0, 0, 12, 13, 16]
        }]
    };

// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

}

var init_barChart = function () {
    var myChart = echarts.init(document.getElementById('barChart'));
// 指定图表的配置项和数据
    var option = {
        title: {
            text: '每月产品销量',
            left: 'center'
        },
        tooltip: {},
        legend: {
            data: ['销量'],
            right: '10%'
        },
        xAxis: {
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [12, 11, 11, 0, 0, 0, 0, 0, 12, 13, 16]
        }]
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

var clickTocheck = function () {
    var year = $('#year-select').val();
    var mypointnum = $('.mypointnum').val();
    var prodkind = $('#prodkind-select').val();
    var chartRadio = $('input:radio:checked').val();
    console.log(year);
    console.log(mypointnum);
    console.log(prodkind);
    console.log(chartRadio);

    if (chartRadio == 1) {
        //折线图
        $('#barChart').attr('hidden', 'hidden');
        $('#lineChart').removeAttr('hidden');
    } else {
        //柱状图

        $('#lineChart').attr('hidden', 'hidden');
        $('#barChart').removeAttr('hidden');
    }
}