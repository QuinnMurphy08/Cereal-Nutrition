var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Cereal%20Nutrition.csv"

//We are suggesting a cereal based on calories, protein, sugar, and fiber

var cerealName = getColumn(url,1);
var cerealCalories = getColumn(url,2);
var cerealProtein = getColumn(url,3);
var cerealFlavor;





var fruityCereal = []

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Fruit")||cerealName[i].includes("Apple")||cerealName[i].includes("Grape")||cerealName[i].includes("Raisin")||cerealName[i].includes("4")||cerealName[i].includes("Froot")){
        fruityCereal.push(cerealName[i])
    }
}
// console.log(fruityCereal);

var honeyCereal = [];

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Honey")||cerealName[i].includes("Maypo")||cerealName[i].includes("Graham")||cerealName[i].includes("Clusters")){
        honeyCereal.push(cerealName[i])
    }
}
// console.log(honeyCereal)

var chocolateCereal = [];

for (var i = 0; i < cerealName.length; i++) {
    if(cerealName[i].includes("Chocolate") || cerealName[i].includes("Cocoa") || cerealName[i].includes("Chocula")){
        chocolateCereal.push(cerealName[i]);
    }
}
// console.log(chocolateCereal);

var frostedCereal = [];

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Frost")){
        frostedCereal.push(cerealName[i])
    }
}
// console.log(frostedCereal)

var cinnamonCereal = [];

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Cinnamon")){
        cinnamonCereal.push(cerealName[i])
    }
}
// console.log(cinnamonCereal)

var plainCereal = [];

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Wheat")||cerealName[i].includes("Bran")){
        plainCereal.push(cerealName[i])
    }
}
// console.log(plainCereal)

var nuttyCereal = []

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Nut")||cerealName[i].includes("Almond")){
        nuttyCereal.push(cerealName[i])
    }
}
// console.log(nuttyCereal)


// calories
var highCalories = [];

for(var i = 0; i < cerealCalories.length; i++){
    if(cerealCalories[i] > 110){
        highCalories.push(cerealName[i])
    }
}


var midCalories = [];

for(var i = 0; i < cerealCalories.length; i++){
    if((110 >= cerealCalories[i])||(cerealCalories[i] >= 100)){
        midCalories.push(cerealName[i])
    }
}



var lowCalories = [];

for(var i = 0; i < cerealCalories.length; i++){
    if(cerealCalories[i] < 100){
        lowCalories.push(cerealName[i])
    }
}



//Protein
var highProtein = [];

for(var i = 0; i < cerealProtein.length; i++){
    if(cerealProtein[i] >= 4){
        highProtein.push(cerealName[i])
    }
}

var midProtein = [];

for(var i = 0; i < cerealProtein.length; i++){
    if(cerealProtein[i] > 2 && cerealProtein[i] < 4){
        midProtein.push(cerealName[i])
    }
}


var lowProtein = [];

for(var i = 0; i < cerealProtein.length; i++){
    if(cerealProtein[i] < 3){
        lowProtein.push(cerealName[i])
    }
}




function findCereal(calories,protein,flavor){
    // var matchingCereal = []
    // console.log(cerealName.indexOf("Apple Jacks"))
    var chosenList = [];

    if(flavor == "honey"){
        chosenList = honeyCereal;
    }
    else if(flavor == "chocolatey"){
        chosenList = chocolateCereal;
    }
    else if(flavor == "plain"){
        chosenList = plainCereal;
    }
    else if(flavor == "nutty"){
        chosenList = nuttyCereal;
    }
    else if(flavor == "fruity"){
        chosenList = fruityCereal;
    }
    else if(flavor == "cinnamon"){
        chosenList = cinnamonCereal;
    }
    else if(flavor == "frosted"){
        chosenList = frostedCereal;
    }

    var proteinList = [];
    if(protein == "low"){
        proteinList = lowProtein;
    }
    else if(protein == "medium"){
        proteinList = midProtein;
    }
    else if(protein == "high"){
        proteinList = highProtein;
    }

    var calorieList = [];
    if(calories == "low"){
        calorieList = lowCalories;
    }
    else if(calories == "medium"){
        calorieList = midCalories;
    }
    else if(calories == "high"){
        calorieList = highCalories;
    }


    console.log(chosenList);
    console.log(calorieList);
    console.log(proteinList);
    var matchingCereal = [];
    
    for(var i = 0; i < chosenList.length; i++){
        // var index = cerealName.indexOf(chosenList[i]);
        if(proteinList.includes(chosenList[i]) && calorieList.includes(chosenList[i])){
            matchingCereal.push(chosenList[i])
        }
    }

    if(matchingCereal.length == 0){
        matchingCereal = "No cereal meet your criteria!"
    }
    sessionStorage.setItem("matchingCerealList", matchingCereal);

    location.replace("cerealpage.html");
    console.log(matchingCereal);
}

