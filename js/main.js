var containerDiv = $('#container-div')[0];

// from https://www.engineeringtoolbox.com/pvc-cpvc-pipes-dimensions-d_795.html

// inner diameters in inches
var innerDiameters = [
    {
        "name" : "1/2 in.",
        "sch40" : 0.622,
        "sch80" : 0.546
    },
    {
        "name" : "3/4 in.",
        "sch40" : 0.824,
        "sch80" : 0.742
    },
    {
        "name" : "1 in.",
        "sch40" : 1.049,
        "sch80" : 0.957
    },
    {
        "name" : "1-1/4 in.",
        "sch40" : 1.380,
        "sch80" : 1.278
    },
    {
        "name" : "1-1/2 in.",
        "sch40" : 1.610,
        "sch80" : 1.500
    },
    {
        "name" : "2 in.",
        "sch40" : 2.067,
        "sch80" : 1.939 
    },
    {
        "name" : "2-1/2 in.",
        "sch40" : 2.469,
        "sch80" : 2.323 
    },
    {
        "name" : "3 in.",
        "sch40" : 3.068,
        "sch80" : 2.900
    },
    {
        "name" : "4 in.",
        "sch40" : 4.026,
        "sch80" : 3.826
    },
    {
        "name" : "5 in.",
        "sch40" : 5.047,
        "sch80" : 4.813
    },
    {
        "name" : "6 in.",
        "sch40" : 6.065,
        "sch80" : 5.761
    },
    {
        "name" : "18 in.",
        "sch40" : 7.981,
        "sch80" : 7.625
    },
    {
        "name" : "10 in.",
        "sch40" : 10.020,
        "sch80" : 9.564
    },
    {
        "name" : "12 in.",
        "sch40" : 11.938,
        "sch80" : 11.376
    },
    {
        "name" : "14 in.",
        "sch40" : 13.124,
        "sch80" : 12.500
    },
    {
        "name" : "16 in.",
        "sch40" : 15.000,
        "sch80" : 14.314
    }
]

function getColorClassForForce(force){
    if (force <= 20){
        return "pastel-blue-cell";
    }else if (force > 20 && force <= 25){
        return "pastel-green-cell";
    }else if (force > 25 && force <= 35){
        return "pastel-yellow-cell";
    }else if (force > 35 && force <= 40){
        return "pastel-orange-cell";
    }else{
        return "pastel-red-cell";
    }
}

$(window).on("load", function(){
    main();
});

function main(){
    outHTML = "<table><tbody>"

    var pressures = [];
    for (var i=0; i<=100; i+=5){
        pressures.push(i);
    }
    console.log(pressures)

    outHTML += "<th><tr><td></td>";
    for (var i in pressures){
        outHTML += "<td>" + pressures[i] +  " PSI</td>";
    }
    outHTML += "</tr></th>";

    console.log(Object.keys(innerDiameters).sort())
    for (var i in innerDiameters){

        // Schedule 80
        outHTML += "<tr><td>Force for " + innerDiameters[i]["name"] + " Sch. 80 PVC (lbs)</td>";
        for (var j in pressures){
            force = ((pressures[j]*Math.PI*innerDiameters[i]["sch80"]*innerDiameters[i]["sch80"])/4).toFixed(3);
            outHTML += "<td class='" + getColorClassForForce(force).toString() + "'>" + force.toString() + "</td>";
        }
        outHTML += "</tr>";

        // Schedule 40
        outHTML += "<tr><td>Force for " + innerDiameters[i]["name"] + " Sch. 40 PVC (lbs)</td>";
        for (var j in pressures){
            force = ((pressures[j]*Math.PI*innerDiameters[i]["sch40"]*innerDiameters[i]["sch40"])/4).toFixed(3);
            outHTML += "<td class='" + getColorClassForForce(force).toString() + "'>" + force.toString() + "</td>";
        }
        outHTML += "</tr>";

    }
    outHTML += "</tbody></table>"

    containerDiv.insertAdjacentHTML('beforeend', outHTML);

}