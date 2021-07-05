let blabjergOEEValue = null;
let olOEEValue = null;
let vesthimmerlandOEEValue = null;
let hashojOEEValue = null;
let tempTotal = null;



function getBlabjergPieValue() {
    try {
        blabjergOEEValue = localStorage.getItem('blabjergOEEValue')
        if (blabjergOEEValue != 0 || blabjergOEEValue > 0) {

            removeall(blabjergBarChart);
            addData(blabjergBarChart, ["Ikke i Drift", "I drift"], (100 - blabjergOEEValue))
            addData(blabjergBarChart, ["Ikke i Drift", "I drift"], blabjergOEEValue)
            document.getElementById("blabjergPieText").innerHTML = Math.floor(blabjergOEEValue) + " %";
            tempTotal = tempTotal + blabjergOEEValue
        } else {
            removeall(blabjergBarChart);
            addData(blabjergBarChart, ["Ikke i Drift", "I drift"], 100)
            addData(blabjergBarChart, ["Ikke i Drift", "I drift"], 0)
            document.getElementById("blabjergPieText").innerHTML = "N/A";
        }
    } catch (err) {
        console.log("Blabjerg Pie Error")
    }
}

function getOlPieValue() {
    try {
        olOEEValue = localStorage.getItem('olOEEValue')
        if (olOEEValue != 0 || olOEEValue > 0) {

            removeall(olBarChart);
            addData(olBarChart, ["Ikke i Drift", "I drift"], (100 - olOEEValue))
            addData(olBarChart, ["Ikke i Drift", "I drift"], olOEEValue)
            document.getElementById("olPieText").innerHTML = Math.floor(olOEEValue) + " %";
            tempTotal = tempTotal + olOEEValue
        } else {
            removeall(olBarChart);
            addData(olBarChart, ["Ikke i Drift", "I drift"], 100)
            addData(olBarChart, ["Ikke i Drift", "I drift"], 0)
            document.getElementById("olPieText").innerHTML = "N/A";
        }
    } catch (err) {
        console.log("ol Pie Error")
    }
}

function getVesthimmerlandPieValue() {
    try {
        vesthimmerlandOEEValue = localStorage.getItem('vesthimmerlandOEEValue')
        if (vesthimmerlandOEEValue != 0 || vesthimmerlandOEEValue > 0) {

            removeall(vesthimmerlandBarChart);
            addData(vesthimmerlandBarChart, ["Ikke i Drift", "I drift"], (100 - vesthimmerlandOEEValue))
            addData(vesthimmerlandBarChart, ["Ikke i Drift", "I drift"], vesthimmerlandOEEValue)
            document.getElementById("vesthimmerlandPieText").innerHTML = Math.floor(vesthimmerlandOEEValue) + " %";
            tempTotal = tempTotal + vesthimmerlandOEEValue
        } else {
            removeall(vesthimmerlandBarChart);
            addData(vesthimmerlandBarChart, ["Ikke i Drift", "I drift"], 100)
            addData(vesthimmerlandBarChart, ["Ikke i Drift", "I drift"], 0)
            document.getElementById("vesthimmerlandPieText").innerHTML = "N/A";
        }
    } catch (err) {
        console.log("vesthimmerland Pie Error")
    }
}

function getHashojPieValue() {
    try {
        hashojOEEValue = localStorage.getItem('hashojOEEValue')
        if (hashojOEEValue != 0 || hashojOEEValue > 0) {
            
            removeall(hashojBarChart);
            addData(hashojBarChart, ["Ikke i Drift", "I drift"], (100 -hashojOEEValue))
            addData(hashojBarChart, ["Ikke i Drift", "I drift"], hashojOEEValue)
            document.getElementById("hashojPieText").innerHTML = Math.floor(hashojOEEValue) + " %";
            tempTotal = tempTotal + hashojOEEValue
        } else {
            removeall(hashojBarChart);
            addData(hashojBarChart, ["Ikke i Drift", "I drift"], 100)
            addData(hashojBarChart, ["Ikke i Drift", "I drift"], 0)
            document.getElementById("hashojPieText").innerHTML = "N/A";
        }
    } catch (err) {
        console.log("hashoj Pie Error")
    }
}


function getTotalPieValue() {
    let total = Number(localStorage.getItem('totalPieValue'))
    let devidor = localStorage.getItem('localStorageDevidor');
    console.log("Devidorpage 2 =  " + devidor)
    try {
        if (blabjergOEEValue > 75 && blabjergOEEValue != null) {
            total = total + Number(blabjergOEEValue)
            devidor++
        }
    } catch (err) {
        console.log("Total blabjerg pie Error " + err)
    }

    try {
        if (olOEEValue > 75 && olOEEValue != null) {
            total = total + Number(olOEEValue)
            devidor++
        }
    } catch (err) {
        console.log("Total OL pie error " + err)
    }

    try {
        if (vesthimmerlandOEEValue > 75 && vesthimmerlandOEEValue != null) {
            total = total + Number(vesthimmerlandOEEValue)
            devidor++
        }
    } catch (err) {
        console.log("Total vesthimmerland Pie error " + err)
    }

    try {
        if (hashojOEEValue > 75 && hashojOEEValue != null) {
            total = total + Number(hashojOEEValue)
            devidor++
        }
    } catch (err) {
        console.log("Total Hashhoj pie Error " + err)
    }
    console.log("Devidor =  " + devidor)
    console.log("Total is = " + total)
    let difference = (total / devidor)
    if (Number.isNaN(difference)) {
        console.log("Total Pie Value error")
        localStorage.setItem('localStorageDevidor', devidor)
    } else {
        localStorage.setItem('localStorageDevidor', devidor)
        localStorage.setItem('totalPieValue', (difference))
        
    }
}
//letting functions in this class get called once, The timeout function gives ALDAQ time to deliver the data

getBlabjergPieValue()
getOlPieValue()
getVesthimmerlandPieValue()
getHashojPieValue()


setTimeout(getTotalPieValue(), 5000);



