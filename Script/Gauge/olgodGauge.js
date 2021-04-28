var olgodGauge = new RadialGauge({
  renderTo: 'olgodGauge', // identifier of HTML canvas element or element itself
  width: 200,
  height: 200,
  units: 'm3/h',
  title: false,
  value: 0,
  minValue: 0,
  maxValue: 2333,
  majorTicks: [
    '0', '233', '460', '699', '933', '1166', '1400', '1633', '1866', '2100', '2333'
  ],
  minorTicks: 2,
  strokeTicks: false,
  highlights: [
    { from: 0, to: 1400, color: 'rgba(0,255,0,.30)' },
    { from: 1400, to: 2333, color: 'rgba(255,0,0,.40)' },
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
olgodGauge.draw();
// animate
//setInterval(() => {
olgodGauge.value = 0;
//}, 1000);