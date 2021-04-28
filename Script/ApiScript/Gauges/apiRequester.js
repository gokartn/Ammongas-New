
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
        let totalYesterday = localStorage.getItem('avedoreTotalYesterdayGauge')
        let totalToday = localStorage.getItem('avedoreTotalTodayGauge')

        document.getElementById("avedoreTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        avedoreGauge.value = currentValue;
        document.getElementById("avedoreCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("avedoreTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("avedoreYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Avedore gauge error " + err)
    }
}

function updateMonsonGauge() {
    try {
        let currentValue = localStorage.getItem('monssonCurrentGauge')
        let totalValue = localStorage.getItem('monssonTotalGauge')
        let totalYesterday = localStorage.getItem('monssonTotalYesterdayGauge')
        let totalToday = localStorage.getItem('monssonTotalTodayGauge')

        console.log("Update Monsson says: " + currentValue)

        document.getElementById("monsonTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        monsonGauge.value = currentValue;
        document.getElementById("monsonCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("monsonTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("monsonYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Monson gauge error " + err)
    }
}


function updateGlansagerGauge() {
    try {
        let currentValue = localStorage.getItem('glansagerCurrentGauge')
        let totalValue = localStorage.getItem('glansagerTotalGauge')
        let totalYesterday = localStorage.getItem('glansagerTotalYesterdayGauge')
        let totalToday = localStorage.getItem('glansagerTotalTodayGauge')

        document.getElementById("glansagerTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        glansagerGauge.value = currentValue;
        document.getElementById("glansagerCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("glansagerTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("glansagerYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Glansager gauge error " + err)
    }
}


function updateMonson2Gauge() {
    try {
        let currentValue = localStorage.getItem('monson2CurrentGauge')
        let totalValue = localStorage.getItem('monsson2TotalGauge')
        let totalYesterday = localStorage.getItem('monsson2TotalYesterdayGauge')
        let totalToday = localStorage.getItem('monsson2TotalTodayGauge')

        document.getElementById("monson2TotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        monson2Gauge.value = currentValue;
        document.getElementById("monson2CurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("monson2TodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("monson2YesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Monsson2 gauge error " + err)
    }
}

function updateOlgodGauge() {
    try {
        let currentValue = localStorage.getItem('olgodCurrentGauge')
        let totalValue = localStorage.getItem('olgodTotalGauge')
        let totalYesterday = localStorage.getItem('olgodTotalYesterdayGauge')
        let totalToday = localStorage.getItem('olgodTotalTodayGauge')

        olgodGauge.value = currentValue;
        document.getElementById("olgodCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("olgodTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("olgodTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("olgodYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Olgod gauge error " + err)
    }
}

function updateBlabjergGauge() {
    try {
        let currentValue = localStorage.getItem('blabjergCurrentGauge')
        let totalValue = localStorage.getItem('blabjergTotalGauge')
        let totalYesterday = localStorage.getItem('blabjergTotalYesterdayGauge')
        let totalToday = localStorage.getItem('blabjergTotalTodayGauge')

        blabjergGauge.value = currentValue;
        document.getElementById("blabjergCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("blabjergTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("blabjergTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("blabjergYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Blabjerg gauge error " + err)
    }
}

function updateMidtfynGauge() {
    try {
        let currentValue = localStorage.getItem('midtfynCurrentGauge')
        let totalValue = localStorage.getItem('midtfynTotalGauge')
        let totalYesterday = localStorage.getItem('midtfynTotalYesterdayGauge')
        let totalToday = localStorage.getItem('midtfynTotalTodayGauge')

        midtfynGauge.value = currentValue;
        document.getElementById("midtfynCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("midtfynTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("midtfynTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("midtfynYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Midtfyn gauge error " + err)
    }
}

function updateNordfynGauge() {
    try {
        let currentValue = localStorage.getItem('nordfynCurrentGauge')
        let totalValue = localStorage.getItem('nordfynTotalGauge')
        let totalYesterday = localStorage.getItem('nordfynTotalYesterdayGauge')
        let totalToday = localStorage.getItem('nordfynTotalTodayGauge')

        nordfynGauge.value = currentValue;
        document.getElementById("nordfynCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("nordfynTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("nordfynTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("nordfynYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Nordfyn gauge error " + err)
    }
}

function updateOlGauge() {
    try {
        let currentValue = localStorage.getItem('olCurrentGauge')
        let totalValue = localStorage.getItem('olTotalGauge')
        let totalYesterday = localStorage.getItem('olTotalYesterdayGauge')
        let totalToday = localStorage.getItem('olTotalTodayGauge')

        olGauge.value = currentValue;
        document.getElementById("olCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("olTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("olTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("olYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("OL gauge error " + err)
    }
}

function updateOutrupGauge() {
    try {
        let currentValue = localStorage.getItem('outrupCurrentGauge')
        let totalValue = localStorage.getItem('outrupTotalGauge')
        let totalYesterday = localStorage.getItem('outrupTotalYesterdayGauge')
        let totalToday = localStorage.getItem('outrupTotalTodayGauge')

        outrupGauge.value = currentValue;
        document.getElementById("outrupCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("outrupTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("outrupTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("outrupYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Outrup gauge error " + err)
    }
}

function updateRibeGauge() {
    try {
        let currentValue = localStorage.getItem('ribeCurrentGauge')
        let totalValue = localStorage.getItem('ribeTotalGauge')
        let totalYesterday = localStorage.getItem('ribeTotalYesterdayGauge')
        let totalToday = localStorage.getItem('ribeTotalTodayGauge')

        ribeGauge.value = currentValue;
        document.getElementById("ribeCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("ribeTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("ribeTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("ribeYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Ribe gauge error " + err)
    }
}

function updateRodekroGauge() {
    try {
        let currentValue = localStorage.getItem('rodekroCurrentGauge')
        let totalValue = localStorage.getItem('rodekroTotalGauge')
        let totalYesterday = localStorage.getItem('rodekroTotalYesterdayGauge')
        let totalToday = localStorage.getItem('rodekroTotalTodayGauge')

        rodekroGauge.value = currentValue;
        document.getElementById("rodekroCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("rodekroTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("rodekroTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("rodekroYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Rodekro gauge error " + err)
    }
}

function updateStordeGauge() {
    try {
        let currentValue = localStorage.getItem('stordeCurrentGauge')
        let totalValue = localStorage.getItem('stordeTotalGauge')
        let totalYesterday = localStorage.getItem('stordeTotalYesterdayGauge')
        let totalToday = localStorage.getItem('stordeTotalTodayGauge')

        stordeGauge.value = currentValue;
        document.getElementById("stordeCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("stordeTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("stordeTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("stordeYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Storde gauge error " + err)
    }
}
function updateStormosenGauge() {
    try {
        let currentValue = localStorage.getItem('stormosenCurrentGauge')
        let totalValue = localStorage.getItem('stormosenTotalGauge')
        let totalYesterday = localStorage.getItem('stormosenTotalYesterdayGauge')
        let totalToday = localStorage.getItem('stormosenTotalTodayGauge')

        stormosenGauge.value = currentValue;
        document.getElementById("stormosenCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("stormosenTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("stormosenTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("stormosenYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
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

        vinkelGauge.value = currentValue;
        document.getElementById("vinkelCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("vinkelTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("vinkelTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("vinkelYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Vinkel gauge error " + err)
    }
}

function updateSodeGauge() {
    try {
        let currentValue = localStorage.getItem('sodeCurrentGauge')
        let totalValue = localStorage.getItem('sodeTotalGauge')
        let totalYesterday = localStorage.getItem('sodeTotalYesterdayGauge')
        let totalToday = localStorage.getItem('sodeTotalTodayGauge')

        sodeGauge.value = currentValue;
        document.getElementById("sodeCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("sodeTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("sodeTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("sodeYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Sode gauge error " + err)
    }
}

function updateVraaGauge() {
    try {
        let currentValue = localStorage.getItem('vraaCurrentGauge')
        let totalValue = localStorage.getItem('vraaTotalGauge')
        let totalYesterday = localStorage.getItem('vraaTotalYesterdayGauge')
        let totalToday = localStorage.getItem('vraaTotalTodayGauge')

        vraaGauge.value = currentValue;
        document.getElementById("vraaCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("vraaTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("vraaTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("vraaYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Vraa gauge error " + err)
    }
}

function updateHashojGauge() {
    try {
        let currentValue = localStorage.getItem('hashojCurrentGauge')
        let totalValue = localStorage.getItem('hashojTotalGauge')
        let totalYesterday = localStorage.getItem('hashojTotalYesterdayGauge')
        let totalToday = localStorage.getItem('hashojTotalTodayGauge')

        hashojGauge.value = currentValue;
        document.getElementById("hashojCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("hashojTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("hashojTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("hashojYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("hashoj gauge error " + err)
    }
}

function updateVesthimmerlandGauge() {
    try {
        let currentValue = localStorage.getItem('vesthimmerlandCurrentGauge')
        let totalValue = localStorage.getItem('vesthimmerlandTotalGauge')
        let totalYesterday = localStorage.getItem('vesthimmerlandTotalYesterdayGauge')
        let totalToday = localStorage.getItem('vesthimmerlandTotalTodayGauge')
        console.log("vesthimmerland Current value = " + currentValue)
        vesthimmerlandGauge.value = currentValue;
        document.getElementById("vesthimmerlandCurrProd").innerHTML = Math.floor(currentValue).toLocaleString('de-DE') + " m&sup3;/h";
        document.getElementById("vesthimmerlandTotalProd").innerHTML = Math.floor(totalValue / 1000000).toLocaleString('de-DE') + " mio m&sup3;";
        document.getElementById("vesthimmerlandTodayProd").innerHTML = Math.floor(totalToday).toLocaleString('de-DE') + " m&sup3;";
        document.getElementById("vesthimmerlandYesterdayProd").innerHTML = Math.floor(totalYesterday).toLocaleString('de-DE') + " m&sup3;";
    } catch (err) {
        console.log("Vesthimmerland gauge error " + err)
    }
}
