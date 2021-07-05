var totalEnergyProd;
let totalEnergySum;
var totalCO2Sum;

function TotalEnergyProduction() {
    totalEnergySum = localStorage.getItem('totalTotalGauge')
    let devidor = localStorage.getItem('gaugeincluded')
    totalEnergyProd = (totalEnergySum * 6.4)
    document.getElementById("energyProdTextrow").innerHTML = "Energy production in " +  devidor +   " Ammongas upgrading plants:";
    document.getElementById("kwEnergyText").innerHTML = Math.floor(parseInt(totalEnergyProd) / 1000).toLocaleString('de-DE') + " MW/h";
    console.log('TotalEnergyProd = ' + Math.floor(totalEnergySum));

}

//Get total production
function TotalCO2Calculator() {
    totalCO2Sum = ((totalEnergySum * 0.656) * 35)
    let devidor = localStorage.getItem('gaugeincluded')
    document.getElementById("amountProdTextRow").innerHTML = "Amount of saved CO<sub>2</sub> in " + devidor + " plants:";
    document.getElementById("kgco2Text").innerHTML = Math.floor(parseInt(totalCO2Sum) / 1000).toLocaleString('de-DE') + " Tons";
}


function setTotalGauge() {
    try {
        let gaugesincluded = localStorage.getItem('currGaugeIncluded')
        let currentTotal = localStorage.getItem('totalCurrentGauge')
        let totalTotal = localStorage.getItem('totalTotalGauge')
        totalGauge.value = Math.floor(currentTotal / 1000);
        console.log("Current total = " + currentTotal)
        document.getElementById("totalCurrProd").innerHTML = Math.floor(currentTotal).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("gasproductionplants").innerHTML = "Total Current gas production for " + gaugesincluded + " plants";
        document.getElementById("totalTotalProd").innerHTML = Math.floor(totalTotal / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
    } catch (err) {
        console.log("SetTotalGauge Error " + err)
    }
}

function setTotalPie() {
    try {
        let devidor = localStorage.getItem('localStorageDevidor')
        let totalPieValue = localStorage.getItem('totalPieValue')
        console.log("Total Pie Value = " + totalPieValue)
        if (totalPieValue != 0 || totalPieValue > 0 && totalPieValue != null && totalPieValue < 101) {
            removeall(totalBarChart);
            addData(totalBarChart, ["inactive", "active"], (100 - totalPieValue))
            addData(totalBarChart, ["inactive", "active"], totalPieValue)
            document.getElementById("totalPieText").innerHTML = Math.floor(totalPieValue) + " %";
            console.log("Devidor is = " + devidor)
            document.getElementById("oeeheader").innerHTML = "OEE for " + devidor + " plants:";
        } else {
            removeall(totalBarChart);
            addData(totalBarChart, ["inactive", "active"], 0)
            addData(totalBarChart, ["inactive", "active"], 100)
            document.getElementById("totalPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("SetTotalPie Error " + err)
    }
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

// This calculation is stolen from https://www.carbonindependent.org/22.html
function totalFlightHours() {
    let flightHours = totalCO2Sum / 90
    document.getElementById("corespondingText").innerHTML = Math.floor(flightHours).toLocaleString('de-DE') + " Hours flying";
}
TotalEnergyProduction()
setTotalGauge()
TotalCO2Calculator()
totalFlightHours()
setTotalPie()



