var totalGauge = new RadialGauge({
  renderTo: 'totalGauge', // identifier of HTML canvas element or element itself
  width: 220,
  height: 220,
  units: 'm3/h * 1000',
  title: false,
  value: 0,
  minValue: 0,
  maxValue: 50,
  majorTicks: [
    '0', '5', '10', '15', '20', '25', '30', '35', '40', '55', '50'
  ],
  minorTicks: 2,
  strokeTicks: false,
  highlights: [
    /*{ from: 0, to: 50, color: 'rgba(0,255,0,.15)' },
    { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
    { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
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
totalGauge.draw();
// animate
//setInterval(() => {
totalGauge.value = 0;
//}, 1000);