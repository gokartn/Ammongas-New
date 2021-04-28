let monssonOEEValue = null;
let monsson2OEEValue = null;
let glansagerOEEValue = null;
let midtfynOEEValue = null;
let nordfynOEEValue = null;
let olgodOEEValue = null;
let outrupOEEValue = null;
let rodekroOEEValue = null;
let ribeOEEValue = null;
let stordeOEEValue = null;
let stormosenOEEValue = null;
let vinkelOEEValue = null;
let vraaOEEValue = null;
let sodeOEEValue = null;
let totalPieValue = null;
let avedorePieValue = null;
let tempTotal = null;


function getAvedorePieValue() {
    try {
        let avedoreRunningHour = localStorage.getItem('avedoreRunningPie')
        let avedoreGasHour = localStorage.getItem('avedoreGasPie')
        if (avedoreRunningHour != 0 || avedoreRunningHour > 0) {
            let difference = avedoreRunningHour - avedoreGasHour;
            avedorePieValue = ((difference / avedoreRunningHour) * 100);
            removeall(avedoreBarChart);
            addData(avedoreBarChart, ["inactive", "active"], avedorePieValue)
            addData(avedoreBarChart, ["inactive", "active"], (100 - avedorePieValue))
            document.getElementById("avedorePieText").innerHTML = Math.floor(100 - avedorePieValue) + " %";
            tempTotal = tempTotal + (100 - avedorePieValue)
        } else {
            removeall(avedoreBarChart);
            addData(avedoreBarChart, ["inactive", "active"], 100)
            addData(avedoreBarChart, ["inactive", "active"], 0)
            document.getElementById("avedorePieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("avedorePie Error")
    }
}

function getMonsonPieValue() {
    try {
        monssonOEEValue = localStorage.getItem('monssonOEEValue')

        if (monssonOEEValue != 0 || monssonOEEValue > 0) {

            removeall(monssonBarChart);
            addData(monssonBarChart, ["inactive", "active"], (100 - monssonOEEValue))
            addData(monssonBarChart, ["inactive", "active"], monssonOEEValue)
            document.getElementById("monssonPieText").innerHTML = Math.floor(monssonOEEValue) + " %";
            tempTotal = tempTotal + monssonOEEValue
        } else {
            removeall(monssonBarChart);
            addData(monssonBarChart, ["inactive", "active"], 100)
            addData(monssonBarChart, ["inactive", "active"], 0)
            document.getElementById("monssonPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("MonsonPie Error")
    }
}



function getMonson2PieValue() {
    try {
        monsson2OEEValue = localStorage.getItem('monsson2OEEValue')

        if (monsson2OEEValue != 0 || monsson2OEEValue > 0) {

            removeall(monsson2BarChart);
            addData(monsson2BarChart, ["Ikke i Drift", "I drift"], (100 - monsson2OEEValue))
            addData(monsson2BarChart, ["Ikke i Drift", "I drift"], monsson2OEEValue)
            document.getElementById("monsson2PieText").innerHTML = Math.floor(monsson2OEEValue) + " %";
            tempTotal = tempTotal + monsson2OEEValue
        } else {
            removeall(monsson2BarChart);
            addData(monsson2BarChart, ["Ikke i Drift", "I drift"], 100)
            addData(monsson2BarChart, ["Ikke i Drift", "I drift"], 0)
            document.getElementById("monsson2PieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Monsson2 pie Error")
    }
}


function getGlansagerPieValue() {
    try {
        glansagerOEEValue = localStorage.getItem('glansagerOEEValue')
        if (glansagerOEEValue != 0 || glansagerOEEValue > 0) {
            removeall(glansagerBarChart);
            addData(glansagerBarChart, ["Ikke i Drift", "I drift"], (100 - glansagerOEEValue))
            addData(glansagerBarChart, ["Ikke i Drift", "I drift"], glansagerOEEValue)
            document.getElementById("glansagerPieText").innerHTML = Math.floor(glansagerOEEValue) + " %";
            tempTotal = tempTotal + glansagerOEEValue
        } else {
            removeall(glansagerBarChart);
            addData(glansagerBarChart, ["Ikke i Drift", "I drift"], 100)
            addData(glansagerBarChart, ["Ikke i Drift", "I drift"], 0)
            document.getElementById("glansagerPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Glansager Pie Error")
    }
}

function getMidtfynPieValue() {
    try {
        midtfynOEEValue = localStorage.getItem('midtfynOEEValue')
        if (midtfynOEEValue != 0 || midtfynOEEValue > 0) {

            removeall(midtfynBarChart);
            addData(midtfynBarChart, ["inactive", "active"], (100 - midtfynOEEValue))
            addData(midtfynBarChart, ["inactive", "active"], midtfynOEEValue)
            document.getElementById("midtfynPieText").innerHTML = Math.floor(midtfynOEEValue) + " %";
            tempTotal = tempTotal + midtfynOEEValue
        } else {
            removeall(midtfynBarChart);
            addData(midtfynBarChart, ["inactive", "active"], 100)
            addData(midtfynBarChart, ["inactive", "active"], 0)
            document.getElementById("midtfynPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Midtfyn Pie error")
    }
}

function getNordfynPieValue() {
    try {
        nordfynOEEValue = localStorage.getItem('nordfynOEEValue')
        if (nordfynOEEValue != 0 || nordfynOEEValue > 0) {

            removeall(nordfynBarChart);
            addData(nordfynBarChart, ["inactive", "active"], (100 - nordfynOEEValue))
            addData(nordfynBarChart, ["inactive", "active"], nordfynOEEValue)
            document.getElementById("nordfynPieText").innerHTML = Math.floor(nordfynOEEValue) + " %";
            tempTotal = tempTotal + nordfynOEEValue
        } else {
            removeall(nordfynBarChart);
            addData(nordfynBarChart, ["inactive", "active"], 100)
            addData(nordfynBarChart, ["inactive", "active"], 0)
            document.getElementById("nordfynPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Nordfyn Pie error")
    }
}

function getOlgodPieValue() {
    try {
        olgodOEEValue = localStorage.getItem('olgodOEEValue')
        if (olgodOEEValue != 0 || olgodOEEValue > 0) {

            removeall(olgodBarChart);
            addData(olgodBarChart, ["inactive", "active"], (100 - olgodOEEValue))
            addData(olgodBarChart, ["inactive", "active"], olgodOEEValue)
            document.getElementById("olgodPieText").innerHTML = Math.floor(olgodOEEValue) + " %";
            tempTotal = tempTotal + olgodOEEValue
        } else {
            removeall(olgodBarChart);
            addData(olgodBarChart, ["inactive", "active"], 100)
            addData(olgodBarChart, ["inactive", "active"], 0)
            document.getElementById("olgodPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Olgod Pie Error")
    }
}

function getOutrupPieValue() {
    try {
        outrupOEEValue = localStorage.getItem('outrupOEEValue')
        if (outrupOEEValue != 0 || outrupOEEValue > 0) {

            removeall(outrupBarChart);
            addData(outrupBarChart, ["inactive", "active"], (100 - outrupOEEValue))
            addData(outrupBarChart, ["inactive", "active"], outrupOEEValue)
            document.getElementById("outrupPieText").innerHTML = Math.floor(outrupOEEValue) + " %";
            tempTotal = tempTotal + outrupOEEValue
        } else {
            removeall(outrupBarChart);
            addData(outrupBarChart, ["inactive", "active"], 100)
            addData(outrupBarChart, ["inactive", "active"], 0)
            document.getElementById("outrupPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Outrup Pie error")
    }
}

function getRodekroPieValue() {
    try {
        rodekroOEEValue = localStorage.getItem('rodekroOEEValue')
        if (rodekroOEEValue != 0 || rodekroOEEValue > 0) {

            removeall(rodekroBarChart);
            addData(rodekroBarChart, ["inactive", "active"], (100 - rodekroOEEValue))
            addData(rodekroBarChart, ["inactive", "active"], rodekroOEEValue)
            document.getElementById("rodekroPieText").innerHTML = Math.floor(rodekroOEEValue) + " %";
            tempTotal = tempTotal + rodekroOEEValue
        } else {
            removeall(rodekroBarChart);
            addData(rodekroBarChart, ["inactive", "active"], 100)
            addData(rodekroBarChart, ["inactive", "active"], 0)
            document.getElementById("rodekroPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Rodekro Pie error")
    }
}

function getRibePieValue() {
    try {
        ribeOEEValue = localStorage.getItem('ribeOEEValue')
        if (ribeOEEValue != 0 || ribeOEEValue > 0) {

            removeall(ribeBarChart);
            addData(ribeBarChart, ["inactive", "active"], (100 - ribeOEEValue))
            addData(ribeBarChart, ["inactive", "active"], ribeOEEValue)
            document.getElementById("ribePieText").innerHTML = Math.floor(ribeOEEValue) + " %";
            tempTotal = tempTotal + ribeOEEValue
        } else {
            removeall(ribeBarChart);
            addData(ribeBarChart, ["inactive", "active"], 100)
            addData(ribeBarChart, ["inactive", "active"], 0)
            document.getElementById("ribePieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Ribe Pie error")
    }
}

function getStordePieValue() {
    try {
        stordeOEEValue = localStorage.getItem('stordeOEEValue')

        if (stordeOEEValue != 0 || stordeOEEValue > 0) {
            removeall(stordeBarChart);
            addData(stordeBarChart, ["inactive", "active"], (100 - stordeOEEValue))
            addData(stordeBarChart, ["inactive", "active"], stordeOEEValue)

            document.getElementById("stordePieText").innerHTML = Math.floor(stordeOEEValue) + " %";
            tempTotal = tempTotal + (stordeOEEValue)
        } else {
            removeall(stordeBarChart);
            addData(stordeBarChart, ["inactive", "active"], 100)
            addData(stordeBarChart, ["inactive", "active"], 0)
            document.getElementById("stordePieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("storde Pie error")
    }
}

function getStormosenPieValue() {
    try {
        stormosenOEEValue = localStorage.getItem('stormosenOEEValue')
        if (stormosenOEEValue != 0 || stormosenOEEValue > 0) {

            removeall(stormosenBarChart);
            addData(stormosenBarChart, ["inactive", "active"], (100 - stormosenOEEValue))
            addData(stormosenBarChart, ["inactive", "active"], stormosenOEEValue)
            document.getElementById("stormosenPieText").innerHTML = Math.floor(stormosenOEEValue) + " %";
            tempTotal = tempTotal + stormosenOEEValue
        } else {
            removeall(stormosenBarChart);
            addData(stormosenBarChart, ["inactive", "active"], 100)
            addData(stormosenBarChart, ["inactive", "active"], 0)
            document.getElementById("stormosenPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Stormosen Pie error")
    }
}

function getVinkelPieValue() {
    try {
        vinkelOEEValue = localStorage.getItem('vinkelOEEValue')

        if (vinkelOEEValue != 0 || vinkelOEEValue > 0) {

            removeall(vinkelBarChart);
            addData(vinkelBarChart, ["inactive", "active"], (100 - vinkelOEEValue))
            addData(vinkelBarChart, ["inactive", "active"], vinkelOEEValue)
            document.getElementById("vinkelPieText").innerHTML = Math.floor(vinkelOEEValue) + " %";
            tempTotal = tempTotal + vinkelOEEValue
        } else {
            removeall(vinkelBarChart);
            addData(vinkelBarChart, ["inactive", "active"], 100)
            addData(vinkelBarChart, ["inactive", "active"], 0)
            document.getElementById("vinkelPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Vinkel Pie error")
    }
}

function getVraaPieValue() {
    try {
        vraaOEEValue = localStorage.getItem('vraaOEEValue')

        if (vraaOEEValue != 0 || vraaOEEValue > 0 && vraaOEEValue != null) {

            removeall(vraaBarChart);
            addData(vraaBarChart, ["inactive", "active"], (100 - vraaOEEValue))
            addData(vraaBarChart, ["inactive", "active"], vraaOEEValue)
            document.getElementById("vraaPieText").innerHTML = Math.floor(vraaOEEValue) + " %";
            tempTotal = tempTotal + vraaOEEValue
        } else {
            removeall(vraaBarChart);
            addData(vraaBarChart, ["inactive", "active"], 100)
            addData(vraaBarChart, ["inactive", "active"], 0)
            document.getElementById("vraaPieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Vraa Pie error")
    }
}


function getSodePieValue() {
    try {
        sodeOEEValue = localStorage.getItem('sodeOEEValue')

        if (sodeOEEValue != 0 || sodeOEEValue > 0) {

            removeall(sodeBarChart);
            addData(sodeBarChart, ["inactive", "active"], (100 - sodeOEEValue))
            addData(sodeBarChart, ["inactive", "active"], sodeOEEValue)
            document.getElementById("sodePieText").innerHTML = Math.floor(sodeOEEValue) + " %";
            tempTotal = tempTotal + sodeOEEValue
        } else {
            removeall(sodeBarChart);
            addData(sodeBarChart, ["inactive", "active"], 100)
            addData(sodeBarChart, ["inactive", "active"], 0)
            document.getElementById("sodePieText").innerHTML = "n/a";
        }
    } catch (err) {
        console.log("Sode Pie error")
    }
}


function getTotalPieValue() {
    let total = 0
    let devidor = 0
    console.log("Total is now: " + total)
    console.log("Devidor =  " + devidor)
    try {
        if (avedorePieValue < 25 && avedorePieValue != null) {
            total = total + Number(100 - avedorePieValue)
            devidor++

        }
    } catch (err) {
        console.log("Total avedorePie Error" + err)
    }

    try {
        if (monssonOEEValue > 75 && monssonOEEValue != null) {
            total = total + Number(monssonOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total monssonPie Error" + err)
    }

    try {
        if (monsson2OEEValue > 75 && monsson2OEEValue != null) {
            total = total + Number(monsson2OEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total monsson2 Pie Error " + err)
    }


    try {
        if (glansagerOEEValue > 75 && glansagerOEEValue != null) {
            total = total + Number(glansagerOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total glansager Pie Error " + err)
    }


    try {

        if (midtfynOEEValue > 75 && midtfynOEEValue != null) {
            total = total + Number(midtfynOEEValue)
            devidor++
 
        }
    } catch (err) {
        console.log("Total midtfyn Pie Error" + err)
    }

    try {
        if (nordfynOEEValue > 75 && nordfynOEEValue != null) {
            total = total + Number(nordfynOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total Nordfyn pie error " + err)
    }

    try {
        if (olgodOEEValue > 75 && olgodOEEValue != null) {
            total = total + Number(olgodOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total olgod pie erorr" + err)
    }


    try {
        if (outrupOEEValue > 75 && outrupOEEValue != null) {
            total = total + Number(outrupOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total Outrup pie error " + err)
    }

    try {
        if (rodekroOEEValue > 75 && rodekroOEEValue != null) {
            total = total + Number(rodekroOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total Rodekro pie error " + err)
    }

    try {
        if (ribeOEEValue > 75 && ribeOEEValue != null) {
            total = total + Number(ribeOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total Ribe pie error " + err)
    }

    try {
        if (stordeOEEValue > 75 && stordeOEEValue != null) {
            total = total + Number(stordeOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total storde pie Erorr " + err)
    }

    try {
        if (stormosenOEEValue > 75 && stormosenOEEValue != null) {
            total = total + Number(stormosenOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total stormosen pie error " + err)
    }

    try {
        if (vinkelOEEValue > 75 && vinkelOEEValue != null) {
            total = total + Number(vinkelOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total vinkel pie error " + err)
    }

    try {
        if (vraaOEEValue > 75 && vraaOEEValue != null) {
            total = total + Number(vraaOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total Vrå pie Error " + err)
    }

    try {
        if (sodeOEEValue > 75 && sodeOEEValue != null) {
            total = total + Number(sodeOEEValue)
            devidor++

        }
    } catch (err) {
        console.log("Total sode pie error " + err)
    }

    console.log("Devidor =  " + devidor)
    console.log("Total is = " + total)
    if (Number.isNaN(total)) {
        console.log("Total Value error")
    } else {
        localStorage.setItem('localStorageDevidor', devidor)
        localStorage.setItem('totalPieValue', total)
    }
}
//letting functions in this class get called once, The timeout function gives ALDAQ time to deliver the data

getAvedorePieValue()
getMonsonPieValue()
getMonson2PieValue()
getGlansagerPieValue()
getSodePieValue()
getMidtfynPieValue()
getNordfynPieValue()
getOlgodPieValue()
getOutrupPieValue()
getRibePieValue()
getRodekroPieValue()
getStordePieValue()
getStormosenPieValue()
getVraaPieValue()
getVinkelPieValue()



/*
setTimeout(() => {
    getAvedorePieValue()
    getMonsonPieValue()
    getMonson2PieValue()
    getGlansagerPieValue()
    getSodePieValue()
    getMidtfynPieValue()
    getNordfynPieValue()
    getOlgodPieValue()
    getOutrupPieValue()
    getRibePieValue()
    getRodekroPieValue()
    getStordePieValue()
    getStormosenPieValue()
    getVraaPieValue()
    getVinkelPieValue()
}, 4000);
*/

setTimeout(getTotalPieValue(), 10000);
