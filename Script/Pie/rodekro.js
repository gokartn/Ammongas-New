
var canvas = document.getElementById("barChartRodekro");
var ctx = canvas.getContext('2d');

// Global Options:
Chart.defaults.global.defaultFontColor = '';
Chart.defaults.global.defaultFontSize = 16;

var data = {
    labels: ["Ikke i Drift", "I drift"],
    datasets: [
        {
            fill: true,
            backgroundColor: [
                'white',
                '#185f97'],
            data: [100, 0],
            // Notice the borderColor 
            borderColor: ['black', 'black'],
            borderWidth: [2, 2]
        }
    ]
};

// Notice the rotation from the documentation.

var options = {
    title: {
        display: true,
        position: 'top'
    },
    rotation: -0.7 * Math.PI
};


// Chart declaration:
var rodekroBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});
function addData(chart, label, data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}
function removeall(chart) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
        dataset.data.pop();
    });
    chart.update();
}

removeall(rodekroBarChart, null, data);
addData(rodekroBarChart, ["Ikke i Drift", "I drift"], 100)
addData(rodekroBarChart, ["Ikke i Drift", "I drift"], 0)