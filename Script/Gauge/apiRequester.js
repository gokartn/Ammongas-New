
//Makes sure everything is run once
updateData();
setInterval(() => {
    updateData();
}, 10000);
function updateData() {
    // Clears all data before setting new data:

    //Avedore Date
    updateAvedoreGauge()

    //Monson data
    updateMonsonGauge()


    //Monson 2 data
    updateMonson2Gauge()

    //Olgod data
    updateOlgodGauge()

    // Blabjerg data
    updateBlabjergGauge()

    //Midtfyn data
    updateMidtfynGauge()

    //NordFyn data
    updateNordfynGauge()

    //Glansager data
    updateGlansagerGauge()

    // Outrup data
    updateOutrupGauge()

    //Ribe data
    updateRibeGauge()

    //Rodekro data
    updateRodekroGauge()

    //Storde data
    updateStordeGauge()

    //Stormosen data
    updateStormosenGauge()

    //OL Data
    updateOlGauge()

    //Vinkel data
    updateVinkelGauge()


    //vesthimmerland Data
    updateVesthimmerlandGauge()

    //Hashoj data
    updateHashojGauge()

    //Sode Data
    updateSodeGauge()

    //Vraa data
    updateVraaGauge()

}



function updateAvedoreGauge() {
    try {
        let currentValue = localStorage.getItem('avedoreCurrentGauge')

        let totalValue = localStorage.getItem('avedoreTotalGauge')
        document.getElementById("avedoreTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
        console.log('avedore gauge = ' + currentValue)
        console.log('avedore total = ' + totalValue)
        avedoreGauge.value = currentValue;
        document.getElementById("avedoreCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
    } catch (err) {
        console.log("Avedore gauge error " + err)
    }
}

function updateMonsonGauge() {
    try {
        let currentValue = localStorage.getItem('monsonCurrentGauge')

        let totalValue = localStorage.getItem('monsonTotalGauge')
        document.getElementById("monsonTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
        console.log(' monson gauge = ' + currentValue)
        console.log('monson total = ' + totalValue)
        monsonGauge.value = currentValue;
        document.getElementById("monsonCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
    } catch (err) {
        console.log("Monson gauge error " + err)
    }
}


function updateGlansagerGauge() {
    try {
        let currentValue = localStorage.getItem('glansagerCurrentGauge')

        let totalValue = localStorage.getItem('glansagerTotalGauge')
        document.getElementById("glansagerTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
        glansagerGauge.value = currentValue;
        document.getElementById("glansagerCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
    } catch (err) {
        console.log("Glansager gauge error " + err)
    }
}


function updateMonson2Gauge() {
    try {
        let currentValue = localStorage.getItem('monson2CurrentGauge')

        let totalValue = localStorage.getItem('monson2TotalGauge')
        document.getElementById("monson2TotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";

        monson2Gauge.value = currentValue;
        document.getElementById("monson2CurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
    } catch (err) {
        console.log("Monsson2 gauge error " + err)
    }
}

function updateOlgodGauge() {
    try {
        let currentValue = localStorage.getItem('olgodCurrentGauge')
        let totalValue = localStorage.getItem('olgodTotalGauge')

        olgodGauge.value = currentValue;
        document.getElementById("olgodCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";

        document.getElementById("olgodTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Olgod gauge error " + err)
    }
}

function updateBlabjergGauge() {
    try {
        let currentValue = localStorage.getItem('blabjergCurrentGauge')
        let totalValue = localStorage.getItem('blabjergTotalGauge')

        blabjergGauge.value = currentValue;
        document.getElementById("blabjergCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";

        document.getElementById("blabjergTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Blabjerg gauge error " + err)
    }
}

function updateMidtfynGauge() {
    try {
        let currentValue = localStorage.getItem('midtfynCurrentGauge')
        let totalValue = localStorage.getItem('midtfynTotalGauge')

        midtfynGauge.value = currentValue;
        document.getElementById("midtfynCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("midtfynTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Midtfyn gauge error " + err)
    }
}

function updateNordfynGauge() {
    try {
        let currentValue = localStorage.getItem('nordfynCurrentGauge')
        let totalValue = localStorage.getItem('nordfynTotalGauge')

        nordfynGauge.value = currentValue;
        document.getElementById("nordfynCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("nordfynTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Nordfyn gauge error " + err)
    }
}

function updateOlGauge() {
    try {
        let currentValue = localStorage.getItem('olCurrentGauge')
        let totalValue = localStorage.getItem('olTotalGauge')

        olGauge.value = currentValue;
        document.getElementById("olCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("olTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("OL gauge error " + err)
    }
}

function updateOutrupGauge() {
    try {
        let currentValue = localStorage.getItem('outrupCurrentGauge')
        let totalValue = localStorage.getItem('outrupTotalGauge')

        outrupGauge.value = currentValue;
        document.getElementById("outrupCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("outrupTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Outrup gauge error " + err)
    }
}

function updateRibeGauge() {
    try {
        let currentValue = localStorage.getItem('ribeCurrentGauge')
        let totalValue = localStorage.getItem('ribeTotalGauge')

        ribeGauge.value = currentValue;
        document.getElementById("ribeCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("ribeTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Ribe gauge error " + err)
    }
}

function updateRodekroGauge() {
    try {
        let currentValue = localStorage.getItem('rodekroCurrentGauge')
        let totalValue = localStorage.getItem('rodekroTotalGauge')

        rodekroGauge.value = currentValue;
        document.getElementById("rodekroCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("rodekroTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Rodekro gauge error " + err)
    }
}

function updateStordeGauge() {
    try {
        let currentValue = localStorage.getItem('stordeCurrentGauge')
        let totalValue = localStorage.getItem('stordeTotalGauge')

        stordeGauge.value = currentValue;
        document.getElementById("stordeCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("stordeTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Storde gauge error " + err)
    }
}
function updateStormosenGauge() {
    try {
        let currentValue = localStorage.getItem('stormosenCurrentGauge')
        let totalValue = localStorage.getItem('stormosenTotalGauge')

        stormosenGauge.value = currentValue;
        document.getElementById("stormosenCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("stormosenTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Stormosen gauge error " + err)
    }
}

function updateVinkelGauge() {
    try {
        let currentValue = localStorage.getItem('vinkelCurrentGauge')
        let totalValue = localStorage.getItem('vinkelTotalGauge')
        let totalYesterday = localStorage.getItem('vinkelTotalYesterdayGauge')
        let totalToday = localStorage.getItem('vinkelTotalTodayGauge')

        console.log("Total Yeasterday = " + totalYesterday)
        console.log("Total Today = " + totalToday)
        vinkelGauge.value = currentValue;
        document.getElementById("vinkelCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("vinkelTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
        document.getElementById("vinkelTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m3";
        document.getElementById("vinkelYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m3";
    } catch (err) {
        console.log("Vinkel gauge error " + err)
    }
}

function updateSodeGauge() {
    try {
        let currentValue = localStorage.getItem('sodeCurrentGauge')
        let totalValue = localStorage.getItem('sodeTotalGauge')

        sodeGauge.value = currentValue;
        document.getElementById("sodeCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("sodeTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Sode gauge error " + err)
    }
}

function updateVraaGauge() {
    try {
        let currentValue = localStorage.getItem('vraaCurrentGauge')
        let totalValue = localStorage.getItem('vraaTotalGauge')

        vraaGauge.value = currentValue;
        document.getElementById("vraaCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("vraaTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Vraa gauge error " + err)
    }
}

function updateHashojGauge() {
    try {
        let currentValue = localStorage.getItem('hashojCurrentGauge')
        let totalValue = localStorage.getItem('hashojTotalGauge')

        hashojGauge.value = currentValue;
        document.getElementById("hashojCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("hashojTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("hashoj gauge error " + err)
    }
}

function updateVesthimmerlandGauge() {
    try {

        let currentValue = localStorage.getItem('vesthimmerlandCurrentGauge')
        let totalValue = localStorage.getItem('vesthimmerlandTotalGauge')

        vesthimmerlandGauge.value = currentValue;
        document.getElementById("vesthimmerlandCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m3/h";
        document.getElementById("vesthimmerlandTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio/m3";
    } catch (err) {
        console.log("Vesthimmerland gauge error " + err)
    }
}
