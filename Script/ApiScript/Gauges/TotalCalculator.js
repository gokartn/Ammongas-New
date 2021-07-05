var currTotalSum;
var totalTotalSum;

function CurrentTotalCalculator() {
    let avedoreCurrentGauge = localStorage.getItem('avedoreCurrentGauge')
    let hashojCurrentGauge = localStorage.getItem('hashojCurrentGauge')
    let olCurrentGauge = localStorage.getItem('olCurrentGauge')
    let vesthimmerlandCurrentGauge = localStorage.getItem('vesthimmerlandCurrentGauge')
    let blabjergCurrentGauge = localStorage.getItem('blabjergCurrentGauge')
    let glansagerCurrentGauge = localStorage.getItem('glansagerCurrentGauge')
    let midtfynCurrentGauge = localStorage.getItem('midtfynCurrentGauge')
    let monson2CurrentGauge = localStorage.getItem('monson2CurrentGauge')
    let monsonCurrentGauge = localStorage.getItem('monsonCurrentGauge')
    let nordfynCurrentGauge = localStorage.getItem('nordfynCurrentGauge')
    let olgodCurrentGauge = localStorage.getItem('olgodCurrentGauge')
    let outrupCurrentGauge = localStorage.getItem('outrupCurrentGauge')
    let ribeCurrentGauge = localStorage.getItem('ribeCurrentGauge')
    let rodekroCurrentGauge = localStorage.getItem('rodekroCurrentGauge')
    let stordeCurrentGauge = localStorage.getItem('stordeCurrentGauge')
    let stormosenCurrentGauge = localStorage.getItem('stormosenCurrentGauge')
    let sodeCurrentGauge = localStorage.getItem('sodeCurrentGauge')
    let vinkelCurrentGauge = localStorage.getItem('vinkelCurrentGauge')
    let vraaCurrentGauge = localStorage.getItem('vraaCurrentGauge')

    currTotalSum = 0
    let currGaugeIncluded = 0;
    try {
        if (!null && olCurrentGauge > 0) {
            currTotalSum += Number(parseInt(olCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Ol error " + err)
    }
    try {
        if (!null && hashojCurrentGauge > 0) {
            currTotalSum += Number(parseInt(hashojCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Hashøj error " + err)
    }
    try {
        if (!null && avedoreCurrentGauge > 0) {
            currTotalSum += Number(parseInt(avedoreCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Avedore error " + err)
    }
    try {
        if (!null && glansagerCurrentGauge > 0) {
            currTotalSum += Number(parseInt(glansagerCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current glansager error " + err)
    }
    try {
        if (!null && blabjergCurrentGauge > 0) {
            currTotalSum += Number(parseInt(blabjergCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current blabjerg error " + err)
    }

    try {
        if (!null && midtfynCurrentGauge > 0) {
            currTotalSum += Number(parseInt(midtfynCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Midtfyn Error " + err)
    }

    try {
        if (!null && monson2CurrentGauge > 0) {
            currTotalSum += Number(parseInt(monson2CurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Monson2 Error " + err)
    }

    try {
        if (!null && monsonCurrentGauge > 0) {
            currTotalSum += Number(parseInt(monsonCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Monson Error " + err)
    }

    try {
        if (!null && nordfynCurrentGauge > 0) {
            currTotalSum += Number(parseInt(nordfynCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Nordfyn Error " + err)
    }

    try {
        if (!null && olgodCurrentGauge > 0) {
            currTotalSum += Number(parseInt(olgodCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Olgod Error " + err)
    }

    try {
        if (!null && outrupCurrentGauge > 0) {
            currTotalSum += Number(parseInt(outrupCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Outrup Error " + err)
    }

    try {
        if (!null && ribeCurrentGauge > 0) {
            currTotalSum += Number(parseInt(ribeCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Ribe Error " + err)
    }

    try {
        if (!null && rodekroCurrentGauge > 0) {
            currTotalSum += Number(parseInt(rodekroCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Rodekro Error " + err)
    }

    try {
        if (!null && stormosenCurrentGauge > 0) {
            currTotalSum += Number(parseInt(stormosenCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Stormosen Error " + err)
    }
    try {
        if (!null && stordeCurrentGauge > 0) {
            currTotalSum += Number(parseInt(stordeCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Stormosen Error " + err)
    }

    try {
        if (!null && sodeCurrentGauge > 0) {
            currTotalSum += Number(parseInt(sodeCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Sode Error " + err)
    }

    try {
        if (!null && vinkelCurrentGauge > 0) {
            currTotalSum += Number(parseInt(vinkelCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Vinkel Error " + err)
    }
    try {
        if (!null && vesthimmerlandCurrentGauge > 0) {
            currTotalSum += Number(parseInt(vesthimmerlandCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Vesthimmerland error " + err)
    }
    try {
        if (!null && vraaCurrentGauge > 0) {
            currTotalSum += Number(parseInt(vraaCurrentGauge));
            currGaugeIncluded++;
        }
    } catch (err) {
        console.log("Gauge current Vrå Error " + err)
    }
    localStorage.setItem('currGaugeIncluded', currGaugeIncluded)
    console.log("Total current sum = " + currTotalSum);
    localStorage.setItem('totalCurrentGauge', currTotalSum)

}


//Get total production
function TotalTotalCalculator() {
    let avedoreTotal = localStorage.getItem('avedoreTotalGauge')
    let blabjergToal = localStorage.getItem('blabjergTotalGauge')
    let hashojTotal = localStorage.getItem('hashojTotalGauge')
    let midtfynTotal = localStorage.getItem('midtfynTotalGauge')
    let monson2Total = localStorage.getItem('monson2TotalGauge')
    let monsonTotal = localStorage.getItem('monsonTotalGauge')
    let nordfynTotal = localStorage.getItem('nordfynTotalGauge')
    let olTotal = localStorage.getItem('olTotalGauge')
    let olgodTotal = localStorage.getItem('olgodTotalGauge')
    let outrupTotal = localStorage.getItem('outrupTotalGauge')
    let glansagerTotal = localStorage.getItem('glansagerTotalGauge')
    let ribeTotal = localStorage.getItem('ribeTotalGauge')
    let rodekroTotal = localStorage.getItem('rodekroTotalGauge')
    let stormosenTotal = localStorage.getItem('stormosenTotalGauge')
    let sodeTotal = localStorage.getItem('sodeTotalGauge')
    let stordeTotal = localStorage.getItem('stordeTotalGauge')
    let vesthimmerlandTotal = localStorage.getItem('vesthimmerlandTotalGauge')
    let vinkelTotal = localStorage.getItem('vinkelTotalGauge')
    let vraaTotal = localStorage.getItem('vraaTotalGauge')

    totalTotalSum = 0;
    let gaugeincluded = 0;
    console.log("Total sum is now = " + totalTotalSum)

    try {
        if (!null && avedoreTotal > 0) {
            totalTotalSum += Number(parseInt(avedoreTotal));
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total Avedore error " + err)
    }

    try {
        if (!null && blabjergToal > 0) {
            totalTotalSum += Number(parseInt(blabjergToal));
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total blabjerg error " + err)
    }

    try {
        if (!null && hashojTotal > 0) {
            totalTotalSum += Number(parseInt(hashojTotal));
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total Hashøj error " + err)
    }

    try {
        if (!null && nordfynTotal > 0) {
            totalTotalSum += Number(parseInt(nordfynTotal));
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total Nordfyn error " + err)
    }

    try {
        if (!null && midtfynTotal > 0) {
            totalTotalSum += parseInt(midtfynTotal);
            gaugeincluded++
            console.log("Midtfyn total = " + midtfynTotal)
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total midtfyn error " + err)
    }

    try {
        if (!null && monson2Total > 0) {
            totalTotalSum += parseInt(monson2Total);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total monsson2 error " + err)
    }

    try {
        if (!null && monsonTotal > 0) {
            totalTotalSum += parseInt(monsonTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total monson error " + err)
    }

    try {
        if (!null && olgodTotal > 0) {
            totalTotalSum += parseInt(olgodTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total olgod error " + err)
    }

    try {
        if (!null && olTotal > 0) {
            totalTotalSum += parseInt(olTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total Ol error " + err)
    }

    try {
        if (!null && outrupTotal > 0) {
            totalTotalSum += parseInt(outrupTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total Outrup error " + err)
    }

    try {
        if (!null && glansagerTotal > 0) {
            totalTotalSum += parseInt(glansagerTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total Glansager error " + err)
    }

    try {
        if (!null && ribeTotal > 0) {
            totalTotalSum += parseInt(ribeTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge Total ribe error " + err)
    }

    try {
        if (!null && rodekroTotal > 0) {
            totalTotalSum += parseInt(rodekroTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total Rodekro error " + err)
    }

    try {
        if (!null && stormosenTotal > 0) {
            totalTotalSum += parseInt(stormosenTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total stormosen error " + err)
    }

    try {
        if (!null && sodeTotal > 0) {
            totalTotalSum += parseInt(sodeTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total Sode error " + err)
    }

    try {
        if (!null && stordeTotal > 0) {
            totalTotalSum += parseInt(stordeTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Gauge total Storde error " + err)
    }

    try {
        if (!null && vesthimmerlandTotal > 0) {
            totalTotalSum += parseInt(vesthimmerlandTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Total Gauge Vesthimmerland error " + err)
    }
    try {
        if (!null && vinkelTotal > 0) {
            totalTotalSum += parseInt(vinkelTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Total Gauge vinkel error " + err)
    }

    try {
        if (!null && vraaTotal > 0) {
            totalTotalSum += parseInt(vraaTotal);
            gaugeincluded++
            console.log("Total sum is now = " + totalTotalSum)
        }
    } catch (err) {
        console.log("Total Gauge Vraa Error " + err)
    }
    console.log("Total total sum = " + totalTotalSum)
    localStorage.setItem('totalTotalGauge', totalTotalSum)
    localStorage.setItem('gaugeincluded', gaugeincluded)
    console.log("Total Total localstorage sum = " + localStorage.getItem('totalTotalGauge'));
}

setTimeout(() => {
    CurrentTotalCalculator()
    TotalTotalCalculator()
}, 10000);


