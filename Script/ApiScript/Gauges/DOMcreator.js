
function gaugeGenerator(facility) {

    let rootDiv = document.getElementById("rootDiv");
    let rowDiv = document.createElement("div");
    if (facilities[0].name == facility.name) {
        
        rowDiv.id = "row" + facility.name;
        rowDiv.style.position = "relative";
        rowDiv.style.borderBottom = "2px solid black";
        rowDiv.style.display = "inherit";
        rowDiv.style.width = "1920px";
        rowDiv.style.height = "220px";
        rowDiv.style.alignSelf = "flex-end";
        rowDiv.style.paddingTop = "250px";
        rowDiv.style.zIndex = "2";
    }else {
        
        rowDiv.id = "row" + facility.name;
        rowDiv.style.position = "relative";
        rowDiv.style.borderBottom = "2px solid black";
        rowDiv.style.display = "inherit";
        rowDiv.style.width = "1920px";
        rowDiv.style.height = "220px";
        rowDiv.style.alignSelf = "flex-end";
    }


    let rowTextDiv = document.createElement("div");
    rowTextDiv.style.display = "inline";
    rowTextDiv.style.backgroundColor = "white";

    let rowText = document.createElement("h1");
    rowText.style.float = "left";
    rowText.style.textAlign = "center";
    rowText.style.verticalAlign = "middle";
    rowText.innerText = facility.nameAndNumber;
    rowTextDiv.appendChild(rowText);


    let canvasDiv = document.createElement("div");
    canvasDiv.style.display = "inline-flex";
    canvasDiv.style.paddingLeft = facility.textOffset;
    canvasDiv.style.position = "absolute";
    canvasDiv.style.verticalAlign = "middle";
    canvasDiv.style.alignContent = "flex-end";

    let canvas = document.createElement("canvas");
    canvas.id = facility.name + "Gauge";
    canvasDiv.appendChild(canvas);

    let valueCurrDiv = document.createElement("div");
    valueCurrDiv.style.paddingLeft = "900px";
    valueCurrDiv.style.float = "left";
    valueCurrDiv.style.position = "absolute";
    valueCurrDiv.style.verticalAlign = "middle";
    valueCurrDiv.style.paddingTop = "2%";

    let valueCurrh2 = document.createElement("h2");
    valueCurrh2.id = facility.name + "CurrProd";
    valueCurrh2.style.alignContent = "flex-end";
    valueCurrh2.style.position = "absolute";
    valueCurrh2.innerText = "N/A";
    valueCurrDiv.appendChild(valueCurrh2);


    let valueTodayDiv = document.createElement("div");
    valueTodayDiv.style.paddingLeft = "1170px";
    valueTodayDiv.style.float = "left";
    valueTodayDiv.style.position = "absolute";
    valueTodayDiv.style.verticalAlign = "middle";
    valueTodayDiv.style.paddingTop = "2%";

    let valueTodayh2 = document.createElement("h2");
    valueTodayh2.id = facility.name + "TodayProd";
    valueTodayh2.style.alignContent = "flex-end";
    valueTodayh2.style.position = "absolute";
    valueTodayh2.innerText = "N/A";
    valueTodayDiv.appendChild(valueTodayh2);

    let valueYestDiv = document.createElement("div");
    valueYestDiv.style.paddingLeft = "1490px";
    valueYestDiv.style.float = "left";
    valueYestDiv.style.position = "absolute";
    valueYestDiv.style.verticalAlign = "middle";
    valueYestDiv.style.paddingTop = "2%";

    let valueYesth2 = document.createElement("h2");
    valueYesth2.id = facility.name + "YesterdayProd";
    valueYesth2.style.alignContent = "flex-end";
    valueYesth2.style.position = "absolute";
    valueYesth2.innerText = "N/A";
    valueYestDiv.appendChild(valueYesth2);

    let today = document.createElement("div");
    today.style.width = "auto";

    let totalProdH1 = document.createElement("h1");
    totalProdH1.id = facility.name + "TotalProd";
    totalProdH1.style.textAlign = "end";
    totalProdH1.style.paddingRight = "45px";
    totalProdH1.style.float = "right";
    totalProdH1.style.verticalAlign = "middle";
    totalProdH1.style.paddingTop = "3%";
    totalProdH1.innerText = "N/A";


    rowDiv.appendChild(rowTextDiv);
    rowDiv.appendChild(canvasDiv);
    rowDiv.appendChild(valueCurrDiv);
    rowDiv.appendChild(valueTodayDiv);
    rowDiv.appendChild(valueYestDiv);
    rowDiv.appendChild(today);
    rowDiv.appendChild(totalProdH1);

    rootDiv.appendChild(rowDiv);


    console.log("Facility created: " + facility.nameAndNumber);
}


function pieChartCreator(facility) {
    let rootElement = document.getElementById("rootElement");
    let facilityPierow = document.createElement("div")
    facilityPierow.style.height = "fit-content";
    facilityPierow.style.width = "100%";
    facilityPierow.style.position = "absolute";
    facilityPierow.id = "textRow";

    rootElement.appendChild(facilityPierow) 
    
    //Creating names for the first row

    let fac1 = document.createElement("h1");
    fac1.style.paddingLeft = facility[0].pieTextOffSet;
    fac1.style.display = "inline-block";
    fac1.style.position = "relative";
    fac1.innerText = facilities[0].nameAndNumber;
    let fac2 = document.createElement("h1");
    fac2.style.paddingLeft = facility[1].pieTextOffSet;
    fac2.style.display = "inline-block";
    fac2.style.position = "relative";
    fac2.innerText = facilities[1].nameAndNumber;
    let fac3 = document.createElement("h1");
    fac3.style.paddingLeft = facility[2].pieTextOffSet;
    fac3.style.display = "inline-block";
    fac3.style.position = "relative";
    fac3.innerText = facilities[2].nameAndNumber;
    let fac4 = document.createElement("h1");
    fac4.style.paddingLeft = facility[3].pieTextOffSet;
    fac4.style.display = "inline-block";
    fac4.style.position = "relative";
    fac4.innerText = facilities[3].nameAndNumber;
    let fac5 = document.createElement("h1");
    fac5.style.paddingLeft = facility[4].pieTextOffSet;
    fac5.style.display = "inline-block";
    fac5.style.position = "relative";
    fac5.innerText = facilities[4].nameAndNumber;

    rootElement.appendChild(fac1);
    rootElement.appendChild(fac2);
    rootElement.appendChild(fac3);
    rootElement.appendChild(fac4);
    rootElement.appendChild(fac5);

    //Create the piechart row 1
    row1Creator(facility);

    let row1BottomText = document.createElement("div");
    row1BottomText.style.borderBottom = "2px solid black";
    row1BottomText.style.float = "left";
    row1BottomText.style.verticalAlign = "text-top";
    row1BottomText.style.height = "fit-content";
    row1BottomText.style.width = "100%"
    
    let fac1Bottom = document.createElement("h1");
    fac1Bottom.style.verticalAlign = "top";
    fac1Bottom.style.paddingLeft = "260px";
    fac1Bottom.style.display = "inline-block";
    fac1Bottom.innerText = "N/A";

    let fac2Bottom = document.createElement("h1");
    fac2Bottom.style.paddingLeft = "260px";
    fac2Bottom.style.display = "inline-block";
    fac2Bottom.innerText = "N/A";

    let fac3Bottom = document.createElement("h1");
    fac3Bottom.style.paddingLeft = "260px";
    fac3Bottom.style.display = "inline-block";
    fac3Bottom.innerText = "N/A";

    let fac4Bottom = document.createElement("h1");
    fac4Bottom.style.paddingLeft = "270px";
    fac4Bottom.style.display = "inline-block";
    fac4Bottom.innerText = "N/A";

    let fac5Bottom = document.createElement("h1");
    fac5Bottom.style.height = "auto";
    fac5Bottom.style.paddingLeft = "270px";
    fac5Bottom.style.display = "inline-block";
    fac5Bottom.innerText = "N/A";
    
    row1BottomText.appendChild(fac1Bottom);
    row1BottomText.appendChild(fac2Bottom);
    row1BottomText.appendChild(fac3Bottom);
    row1BottomText.appendChild(fac4Bottom);
    row1BottomText.appendChild(fac5Bottom);

    rootElement.appendChild(row1BottomText);


    //creating row 2

    let facilityPierow2 = document.createElement("div")
    facilityPierow2.style.height = "50px";
    facilityPierow2.style.width = "100%";
    facilityPierow2.style.position = "absolute";
    facilityPierow2.style.paddingTop = "85px";


    let fac6 = document.createElement("h1");
    fac6.style.paddingLeft = facility[5].pieTextOffSet;
    fac6.style.display = "inline-block";
    fac6.style.position = "relative";
    fac6.innerText = facilities[5].nameAndNumber;
    let fac7 = document.createElement("h1");
    fac7.style.paddingLeft = facility[6].pieTextOffSet;
    fac7.style.display = "inline-block";
    fac7.style.position = "relative";
    fac7.innerText = facilities[6].nameAndNumber;
    let fac8 = document.createElement("h1");
    fac8.style.paddingLeft = facility[7].pieTextOffSet;
    fac8.style.display = "inline-block";
    fac8.style.position = "relative";
    fac8.innerText = facilities[7].nameAndNumber;
    let fac9 = document.createElement("h1");
    fac9.style.paddingLeft = facility[8].pieTextOffSet;
    fac9.style.display = "inline-block";
    fac9.style.position = "relative";
    fac9.innerText = facilities[8].nameAndNumber;
    let fac10 = document.createElement("h1");
    fac10.style.paddingLeft = facility[9].pieTextOffSet;
    fac10.style.display = "inline-block";
    fac10.style.position = "relative";
    fac10.innerText = facilities[9].nameAndNumber;

    facilityPierow2.appendChild(fac6);
    facilityPierow2.appendChild(fac7);
    facilityPierow2.appendChild(fac8);
    facilityPierow2.appendChild(fac9);
    facilityPierow2.appendChild(fac10);

    rootElement.appendChild(facilityPierow2);

    row2Creator(facility);

   


}

function row1Creator(facility){
    let rootElement = document.getElementById("rootElement");
    let row1 = document.createElement("div")
    row1.style.width = "100%";
    row1.style.height = "200px";
    row1.style.paddingTop = "15px";

    let pie1 = document.createElement("div")
    pie1.style.float = "left";
    pie1.style.display = "inline-block";
    pie1.style.justifyContent = "center";
    pie1.style.alignItems = "center";
    pie1.style.paddingLeft = facility[0].pieOffset;
    pie1.id = facility[0].name + "Pie";

    let pie1Canvas = document.createElement("canvas")
    pie1Canvas.id = "barChart" + facility[0].name
    pie1Canvas.style.height = "220px"
    pie1Canvas.style.width = "240px";
    pie1.appendChild(pie1Canvas)

    let pie2 = document.createElement("div")
    pie2.style.float = "left";
    pie2.style.display = "inline-block";
    pie2.style.justifyContent = "center";
    pie2.style.alignItems = "center";
    pie2.style.paddingLeft = facility[1].pieOffset;
    pie2.id = facility[1].name + "Pie";

    let pie2Canvas = document.createElement("canvas")
    pie2Canvas.id = "barChart" + facility[1].name
    pie2Canvas.style.height = "220px"
    pie2Canvas.style.width = "240px";
    pie2.appendChild(pie2Canvas)

    let pie3 = document.createElement("div")
    pie3.style.float = "left";
    pie3.style.display = "inline-block";
    pie3.style.justifyContent = "center";
    pie3.style.alignItems = "center";
    pie3.style.paddingLeft = facility[2].pieOffset;
    pie3.id = facility[2].name + "Pie";

    let pie3Canvas = document.createElement("canvas")
    pie3Canvas.id = "barChart" + facility[2].name
    pie3Canvas.style.height = "220px"
    pie3Canvas.style.width = "240px";
    pie3.appendChild(pie3Canvas)

    let pie4 = document.createElement("div")
    pie4.style.float = "left";
    pie4.style.display = "inline-block";
    pie4.style.justifyContent = "center";
    pie4.style.alignItems = "center";
    pie4.style.paddingLeft = facility[3].pieOffset;
    pie4.id = facility[3].name + "Pie";

    let pie4Canvas = document.createElement("canvas")
    pie4Canvas.id = "barChart" + facility[3].name
    pie4Canvas.style.height = "220px"
    pie4Canvas.style.width = "240px";
    pie4.appendChild(pie4Canvas)

    let pie5 = document.createElement("div")
    pie5.style.float = "left";
    pie5.style.display = "inline-block";
    pie5.style.justifyContent = "center";
    pie5.style.alignItems = "center";
    pie5.style.paddingLeft = facility[4].pieOffset;
    pie5.id = facility[4].name + "Pie";

    let pie5Canvas = document.createElement("canvas")
    pie5Canvas.id = "barChart" + facility[4].name
    pie5Canvas.style.height = "220px"
    pie5Canvas.style.width = "240px";
    pie5.appendChild(pie5Canvas)

    row1.appendChild(pie1)
    row1.appendChild(pie2)
    row1.appendChild(pie3)
    row1.appendChild(pie4)
    row1.appendChild(pie5)

    rootElement.appendChild(row1)
}


function row2Creator(facility){
    let rootElement = document.getElementById("rootElement");
    let row2 = document.createElement("div")
    row2.style.width = "100%";
    row2.style.height = "200px";
    row2.style.paddingTop = "15px";

    let pie6 = document.createElement("div")
    pie6.style.float = "left";
    pie6.style.display = "inline-block";
    pie6.style.justifyContent = "center";
    pie6.style.alignItems = "center";
    pie6.style.paddingLeft = facility[5].pieOffset;
    pie6.id = facility[5].name + "Pie";

    let pie6Canvas = document.createElement("canvas")
    pie6Canvas.id = "barChart" + facility[5].name
    pie6Canvas.style.height = "220px"
    pie6Canvas.style.width = "240px";
    pie6.appendChild(pie6Canvas)

    let pie7 = document.createElement("div")
    pie7.style.float = "left";
    pie7.style.display = "inline-block";
    pie7.style.justifyContent = "center";
    pie7.style.alignItems = "center";
    pie7.style.paddingLeft = facility[6].pieOffset;
    pie7.id = facility[6].name + "Pie";

    let pie7Canvas = document.createElement("canvas")
    pie7Canvas.id = "barChart" + facility[6].name
    pie7Canvas.style.height = "220px"
    pie7Canvas.style.width = "240px";
    pie7.appendChild(pie8Canvas)

    let pie8 = document.createElement("div")
    pie8.style.float = "left";
    pie8.style.display = "inline-block";
    pie8.style.justifyContent = "center";
    pie8.style.alignItems = "center";
    pie8.style.paddingLeft = facility[7].pieOffset;
    pie8.id = facility[7].name + "Pie";

    let pie8Canvas = document.createElement("canvas")
    pie8Canvas.id = "barChart" + facility[7].name
    pie8Canvas.style.height = "220px"
    pie8Canvas.style.width = "240px";
    pie8.appendChild(pie8Canvas)

    let pie9 = document.createElement("div")
    pie9.style.float = "left";
    pie9.style.display = "inline-block";
    pie9.style.justifyContent = "center";
    pie9.style.alignItems = "center";
    pie9.style.paddingLeft = facility[8].pieOffset;
    pie9.id = facility[8].name + "Pie";

    let pie9Canvas = document.createElement("canvas")
    pie9Canvas.id = "barChart" + facility[8].name
    pie9Canvas.style.height = "220px"
    pie9Canvas.style.width = "240px";
    pie9.appendChild(pie9Canvas)

    let pie10 = document.createElement("div")
    pie10.style.float = "left";
    pie10.style.display = "inline-block";
    pie10.style.justifyContent = "center";
    pie10.style.alignItems = "center";
    pie10.style.paddingLeft = facility[9].pieOffset;
    pie10.id = facility[9].name + "Pie";

    let pie10Canvas = document.createElement("canvas")
    pie10Canvas.id = "barChart" + facility[9].name
    pie10Canvas.style.height = "220px"
    pie10Canvas.style.width = "240px";
    pie10.appendChild(pie10Canvas)

    row2.appendChild(pie6)
    row2.appendChild(pie7)
    row2.appendChild(pie8)
    row2.appendChild(pie9)
    row2.appendChild(pie10)

    rootElement.appendChild(row2)
}