shouldUpdate();

function shouldUpdate() {
    let lastupdate = localStorage.getItem("operationDate");
    if (lastupdate === null) {
        console.log("I updated the Data");
        updateRequests()
        console.log("Date is now " + localStorage.getItem("operationDate"))
        localStorage.setItem('operationDate', Date.now().toString());

    } else if (lastupdate < (Date.now() - 3600000)) {
        console.log("I updated because the data was over 1 hour old");
        updateRequests()
        console.log("Date is now " + localStorage.getItem("operationDate"))
        localStorage.setItem('operationDate', Date.now().toString());

    } else {
        console.log("I Didnt update. cause last update was: " + localStorage.getItem("operationDate") + " And current time is: " + Date.now().toString());
    }
}




function updateRequests() {
    deleteAllData()

    // gives time for the localstorage to delete all data.
    setTimeout(() => {
       facilities.forEach(facility => {
        if(facility.gasUrl != null) {
            callrawGas(facility.gasUrl, facility.name);
        }
        if(facility.prodTotal != null) {
            callRawTotal(facility.prodTotal, facility.name);
        }
        if(facility.prodYesterday != null){
            callRawYesterday(facility.prodYesterday, facility.name);
        }
        if(facility.prodToday != null) {
            callRawToday(facility.prodToday, facility.name);
        }
        
        if(facility.oeeUrl != null){
            callOEERequest(facility.oeeUrl, facility.name);
        }
        
        
    });

        localStorage.setItem('operationDate', Date.now().toString());
    }, 2000);

}



function deleteAllData() {
    localStorage.clear();
}

setInterval(() => {
    shouldUpdate();
}, 5000);
