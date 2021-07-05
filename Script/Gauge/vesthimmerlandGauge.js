var vesthimmerlandGauge = new RadialGauge({
    renderTo: 'vesthimmerlandGauge', // identifier of HTML canvas element or element itself
    width: 200,
    height: 200,
    units: 'm3/h',
    title: false,
    value: 0,
    minValue: 0,
    maxValue: 11330,
    majorTicks: [
      '0', '1133', '2265', '3400', '4530', '5665', '6800', '7930', '9065', '10200', '11330'
    ],
    minorTicks: 2,
    strokeTicks: false,
    highlights: [
      { from: 0, to: 6800, color: 'rgba(0,255,0,.30)' },
      { from: 6800, to: 11330, color: 'rgba(255,0,0,.40)' },
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
vesthimmerlandGauge.draw();
// animate
//setInterval(() => {
vesthimmerlandGauge.value = 0;
//}, 1000);