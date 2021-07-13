if ($("#line_chart_datalabel").length) {
    var options = {
        chart: {
            height: 380,
            type: "line",
            zoom: {
                enabled: !1
            },
            toolbar: {
                show: !1
            }
        },
        colors: ["#00a7e1", "#e4cc37"],
        dataLabels: {
            enabled: !0
        },
        stroke: {
            width: [3, 3],
            curve: "straight"
        },
        series: [{
            name: "High - 2018",
            data: [26, 24, 32, 36, 33, 31, 33]
        }, {
            name: "Low - 2018",
            data: [14, 11, 16, 12, 17, 13, 12]
        }],
        title: {
            text: "Average High & Low Temperature",
            align: "left"
        },
        grid: {
            row: {
                colors: ["transparent", "transparent"],
                opacity: .2
            },
            borderColor: "#f1f1f1"
        },
        markers: {
            style: "inverted",
            size: 6
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            title: {
                text: "Month"
            }
        },
        yaxis: {
            title: {
                text: "Temperature"
            },
            min: 5,
            max: 40
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
            floating: !0,
            offsetY: -25,
            offsetX: -5
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    toolbar: {
                        show: !1
                    }
                },
                legend: {
                    show: !1
                }
            }
        }]
    };
    (chart = new ApexCharts(document.querySelector("#line_chart_datalabel"), options)).render()
}
if ($("#line_chart_dashed").length) {
    options = {
        chart: {
            height: 380,
            type: "line",
            zoom: {
                enabled: !1
            },
            toolbar: {
                show: !1
            }
        },
        colors: ["#3ddc97", "#00a7e1", "#fb4d53"],
        dataLabels: {
            enabled: !1
        },
        stroke: {
            width: [3, 4, 3],
            curve: "straight",
            dashArray: [0, 8, 5]
        },
        series: [{
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        }, {
            name: "Page Views",
            data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        }, {
            name: "Total Visits",
            data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
        }],
        title: {
            text: "Page Statistics",
            align: "left"
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ["01 Jan", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"]
        },
        tooltip: {
            y: [{
                title: {
                    formatter: function (e) {
                        return e + " (mins)"
                    }
                }
            }, {
                title: {
                    formatter: function (e) {
                        return e + " per session"
                    }
                }
            }, {
                title: {
                    formatter: function (e) {
                        return e
                    }
                }
            }]
        },
        grid: {
            borderColor: "#f1f1f1"
        }
    };
    (chart = new ApexCharts(document.querySelector("#line_chart_dashed"), options)).render()
}
if ($("#spline_area").length) {
    options = {
        chart: {
            height: 350,
            type: "area"
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            curve: "smooth",
            width: 3
        },
        series: [{
            name: "series1",
            data: [34, 40, 28, 52, 42, 109, 100]
        }, {
            name: "series2",
            data: [32, 60, 34, 46, 34, 52, 41]
        }],
        colors: ["#eff2f7", "#3051d3"],
        xaxis: {
            type: "datetime",
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"]
        },
        grid: {
            borderColor: "#f1f1f1"
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm"
            }
        }
    };
    (chart = new ApexCharts(document.querySelector("#spline_area"), options)).render()
}
if ($("#column_chart").length) {
    options = {
        chart: {
            height: 350,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !1,
                columnWidth: "45%",
                endingShape: "rounded"
            }
        },
        dataLabels: {
            enabled: !1
        },
        stroke: {
            show: !0,
            width: 2,
            colors: ["transparent"]
        },
        series: [{
            name: "Net Profit",
            data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
        }, {
            name: "Revenue",
            data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
        }, {
            name: "Free Cash Flow",
            data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
        }],
        colors: ["#eff2f7", "#3051d3", "#00a7e1"],
        xaxis: {
            categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"]
        },
        yaxis: {
            title: {
                text: "$ (thousands)"
            }
        },
        grid: {
            borderColor: "#f1f1f1"
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (e) {
                    return "$ " + e + " thousands"
                }
            }
        }
    };
    (chart = new ApexCharts(document.querySelector("#column_chart"), options)).render()
}
if ($("#column_chart_datalabel").length) {
    options = {
        chart: {
            height: 350,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    position: "top"
                }
            }
        },
        dataLabels: {
            enabled: !0,
            formatter: function (e) {
                return e + "%"
            },
            offsetY: -20,
            style: {
                fontSize: "12px",
                colors: ["#00a7e1"]
            }
        },
        series: [{
            name: "Inflation",
            data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, .8]
        }],
        colors: ["#0db4d6"],
        grid: {
            borderColor: "#f1f1f1"
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: "top",
            labels: {
                offsetY: -18
            },
            axisBorder: {
                show: !1
            },
            axisTicks: {
                show: !1
            },
            crosshairs: {
                fill: {
                    type: "gradient",
                    gradient: {
                        colorFrom: "#D8E3F0",
                        colorTo: "#BED1E6",
                        stops: [0, 100],
                        opacityFrom: .4,
                        opacityTo: .5
                    }
                }
            },
            tooltip: {
                enabled: !0,
                offsetY: -35
            }
        },
        fill: {
            gradient: {
                shade: "light",
                type: "horizontal",
                shadeIntensity: .25,
                gradientToColors: void 0,
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        yaxis: {
            axisBorder: {
                show: !1
            },
            axisTicks: {
                show: !1
            },
            labels: {
                show: !1,
                formatter: function (e) {
                    return e + "%"
                }
            }
        },
        title: {
            text: "Monthly Inflation in Argentina, 2002",
            floating: !0,
            offsetY: 320,
            align: "center",
            style: {
                color: "#444"
            }
        }
    };
    (chart = new ApexCharts(document.querySelector("#column_chart_datalabel"), options)).render()
}
if ($("#bar_chart").length) {
    options = {
        chart: {
            height: 350,
            type: "bar",
            toolbar: {
                show: !1
            }
        },
        plotOptions: {
            bar: {
                horizontal: !0
            }
        },
        dataLabels: {
            enabled: !1
        },
        series: [{
            data: [380, 430, 450, 475, 550, 584, 780, 1100, 1220, 1365]
        }],
        colors: ["#7c8a96"],
        grid: {
            borderColor: "#f1f1f1"
        },
        xaxis: {
            categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "Germany"]
        }
    };
    (chart = new ApexCharts(document.querySelector("#bar_chart"), options)).render()
}
if ($("#mixed_chart").length) {
    options = {
        chart: {
            height: 350,
            type: "line",
            stacked: !1,
            toolbar: {
                show: !1
            }
        },
        stroke: {
            width: [0, 2, 4],
            curve: "smooth"
        },
        plotOptions: {
            bar: {
                columnWidth: "50%"
            }
        },
        colors: ["#3051d3", "#3ddc97", "#00a7e1"],
        series: [{
            name: "Team A",
            type: "column",
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
            name: "Team B",
            type: "area",
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: "Team C",
            type: "line",
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        fill: {
            opacity: [.85, .25, 1],
            gradient: {
                inverseColors: !1,
                shade: "light",
                type: "vertical",
                opacityFrom: .85,
                opacityTo: .55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ["01/01/2003", "02/01/2003", "03/01/2003", "04/01/2003", "05/01/2003", "06/01/2003", "07/01/2003", "08/01/2003", "09/01/2003", "10/01/2003", "11/01/2003"],
        markers: {
            size: 0
        },
        legend: {
            offsetY: -10
        },
        xaxis: {
            type: "datetime"
        },
        yaxis: {
            title: {
                text: "Points"
            }
        },
        tooltip: {
            shared: !0,
            intersect: !1,
            y: {
                formatter: function (e) {
                    return void 0 !== e ? e.toFixed(0) + " points" : e
                }
            }
        },
        grid: {
            borderColor: "#f1f1f1"
        }
    };
    (chart = new ApexCharts(document.querySelector("#mixed_chart"), options)).render()
}
if ($("#radial_chart").length) {
    options = {
        chart: {
            height: 370,
            type: "radialBar"
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: "22px"
                    },
                    value: {
                        fontSize: "16px"
                    },
                    total: {
                        show: !0,
                        label: "Total",
                        formatter: function (e) {
                            return 249
                        }
                    }
                }
            }
        },
        series: [44, 55, 67, 83],
        labels: ["Computer", "Tablet", "Laptop", "Mobile"],
        colors: ["#3051d3", "#00a7e1", "#f1b44c", "#3ddc97"]
    };
    (chart = new ApexCharts(document.querySelector("#radial_chart"), options)).render()
}
if ($("#pie_chart").length) {
    options = {
        chart: {
            height: 320,
            type: "pie"
        },
        series: [44, 55, 41, 17, 15],
        labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
        colors: ["#3051d3", "#3ddc97", "#e4cc37", "#f06543", "#eff2f7"],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: -10
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: !1
                }
            }
        }]
    };
    (chart = new ApexCharts(document.querySelector("#pie_chart"), options)).render()
}
if ($("#donut_chart").length) {
    var chart;
    options = {
        chart: {
            height: 320,
            type: "donut"
        },
        series: [44, 55, 41, 17, 15],
        labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
        colors: ["#3051d3", "#00a7e1", "#3ddc97", "#f06543", "#eff2f7"],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: -10
        },
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: !1
                }
            }
        }]
    };
    (chart = new ApexCharts(document.querySelector("#donut_chart"), options)).render()
}
