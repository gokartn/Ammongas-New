
var canvas = document.getElementById("barChartMonsson2");
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
var monsson2BarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

removeall(monsson2BarChart, null, data);
addData(monsson2BarChart, ["Ikke i Drift", "I drift"], 100)
addData(monsson2BarChart, ["Ikke i Drift", "I drift"], 0)