var avedoreGauge = new RadialGauge({
    renderTo: 'avedoreGauge', // identifier of HTML canvas element or element itself
    width: 200,
    height: 200,
    units: 'm3/h',
    title: false,
    value: 0,
    minValue: 0,
    maxValue: 833,
    majorTicks: [
        '0', '83', '166', '250', '333', '416', '500', '583', '666', '750', '833'
    ],
    minorTicks: 2,
    strokeTicks: false,
    highlights: [
        { from: 0, to: 500, color: 'rgba(0,255,0,.30)' },
        { from: 500, to: 833, color: 'rgba(255,0,0,.40)' },
        /*{ from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
        { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
        { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }
        */
    ],
    colorPlate: '#fff',
    colorMajorTicks: '#000',
    colorMinorTicks: '#000',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#000',
    colorNeedleStart: 'rgba(240, 128, 128, 1)',
    colorNeedleEnd: 'rgba(255, 160, 122, .9)',
    valueBox: true,
    animationRule: 'bounce'
});
// draw initially
avedoreGauge.draw();
// animate
//setInterval(() => {
avedoreGauge.value = 0;
//}, 1000);