var outrupGauge = new RadialGauge({
  renderTo: 'outrupGauge', // identifier of HTML canvas element or element itself
  width: 200,
  height: 200,
  units: 'm3/h',
  title: false,
  value: 0,
  minValue: 0,
  maxValue: 2750,
  majorTicks: [
    '0', '275', '550', '825', '1100', '1375', '1650', '1925', '2200', '2475', '2750'
  ],
  minorTicks: 2,
  strokeTicks: false,
  highlights: [
    { from: 0, to: 1650, color: 'rgba(0,255,0,.30)' },
    { from: 1650, to: 2750, color: 'rgba(255,0,0,.40)' },
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
outrupGauge.draw();
// animate
//setInterval(() => {
outrupGauge.value = 0;
//}, 1000);