
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Cereal%20Nutrition.csv"

//We are suggesting a cereal based on calories, protein, and flavor.

var cerealName = getColumn(url,1);
var cerealCalories = getColumn(url,2);
var cerealProtein = getColumn(url,3);
var cerealFlavor;




//This takes all the names of cereal from the main list and if it is a fruity cereal, it puts that cereal into the var fruitycereal.
var fruityCereal = []

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Fruit")||cerealName[i].includes("Apple")||cerealName[i].includes("Grape")||cerealName[i].includes("Raisin")||cerealName[i].includes("4")||cerealName[i].includes("Froot")){
        fruityCereal.push(cerealName[i])
    }
}
//This takes all the names of cereal from the main list and if it is a honey cereal, it puts that cereal into the var honeycereal.
var honeyCereal = [];

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Honey")||cerealName[i].includes("Maypo")||cerealName[i].includes("Graham")||cerealName[i].includes("Clusters")){
        honeyCereal.push(cerealName[i])
    }
}
//This takes all the names of cereal from the main list and if it is a chocolate cereal, it puts that cereal into the var chocolate.
var chocolateCereal = [];

for (var i = 0; i < cerealName.length; i++) {
    if(cerealName[i].includes("Chocolate") || cerealName[i].includes("Cocoa") || cerealName[i].includes("Chocula")){
        chocolateCereal.push(cerealName[i]);
    }
}
//This takes all the names of cereal from the main list and if it is a frosted cereal, it puts that cereal into the var frostedcereal.
var frostedCereal = [];

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Frost")){
        frostedCereal.push(cerealName[i])
    }
}
//This takes all the names of cereal from the main list and if it is a cinnamon cereal, it puts that cereal into the var cinnamoncereal.
var cinnamonCereal = [];

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Cinnamon")){
        cinnamonCereal.push(cerealName[i])
    }
}
//This takes all the names of cereal from the main list and if it is a plain cereal, it puts that cereal into the var plaincereal.
var plainCereal = [];

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Wheat")||cerealName[i].includes("Bran")){
        plainCereal.push(cerealName[i])
    }
}
//This takes all the names of cereal from the main list and if it is a nutty cereal, it puts that cereal into the var nuttycereal.
var nuttyCereal = []

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Nut")||cerealName[i].includes("Almond")){
        nuttyCereal.push(cerealName[i])
    }
}


//This variable looks through all of the amounts of calories for the different cereals, if it has a calorie count higher than 110, it puts that cereal into the high calorie category
var highCalories = [];

for(var i = 0; i < cerealCalories.length; i++){
    if(cerealCalories[i] > 110){
        highCalories.push(cerealName[i])
    }
}

//This variable looks through all of the amounts of calories for the different cereals, if it has a calorie count between 100 and 110, it puts that cereal into the medium calorie category
var midCalories = [];

for(var i = 0; i < cerealCalories.length; i++){
    if((110 >= cerealCalories[i])||(cerealCalories[i] >= 100)){
        midCalories.push(cerealName[i])
    }
}


//This variable looks through all of the amounts of calories for the different cereals, if it has a calorie count less than 100, it puts that cereal into the low calorie category
var lowCalories = [];

for(var i = 0; i < cerealCalories.length; i++){
    if(cerealCalories[i] < 100){
        lowCalories.push(cerealName[i])
    }
}



//This variable looks through all of the amounts of protein for the different cereals, if it has a protein amount higher than 4 grams, it puts that cereal into the high protein category
var highProtein = [];

for(var i = 0; i < cerealProtein.length; i++){
    if(cerealProtein[i] >= 4){
        highProtein.push(cerealName[i])
    }
}
//This variable looks through all of the amounts of protein for the different cereals, if it has a protein amount between 2 and 4 grams, it puts that cereal into the medium protein category
var midProtein = [];

for(var i = 0; i < cerealProtein.length; i++){
    if(cerealProtein[i] > 2 && cerealProtein[i] < 4){
        midProtein.push(cerealName[i])
    }
}

//This variable looks through all of the amounts of protein for the different cereals, if it has a protein amount less than 2 grams, it puts that cereal into the low protein category. we used a while loop to fulfill a requirement for the project, it serves the same purpose as a for statement.
var lowProtein = [];
var index = 0;
while(index < cerealProtein.length){
    if(cerealProtein[index] < 3){
        lowProtein.push(cerealName[index])
    }
    i++;
}



//This is the main function that makes the project run. It says that if the cereal flavor selected is honey for example, it only looks at the cereals we defined earlier as honey cereals.
function findCereal(calories,protein,flavor){
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
//this is the same concept as the section above, it says that if the amount of protein for example is high, it only looks at the honey cereals with high protein.
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
//same thing for calories. it says that if the amount of protein selected for example is low, it only looks at the honey cereals with high protein and low calories.
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
   
   //this variable creates a new list based on calorie and protein selections above
    var matchingCereal = [];
    
    for(var i = 0; i < chosenList.length; i++){
        if(proteinList.includes(chosenList[i]) && calorieList.includes(chosenList[i])){
            matchingCereal.push(chosenList[i])
        }
    }
//This says that if there is no cereal that meets the selections made above, to tell the user. 
    if(matchingCereal.length == 0){
        matchingCereal = "No cereal meet your criteria!"
    }
    sessionStorage.setItem("matchingCerealList", matchingCereal);
//once a selection is made, the find my cereal button takes you to a new page section where you see your cereal options based on your criteria. This code saves the list so it can travel over to the new page
    location.replace("cerealpage.html");
    console.log(matchingCereal);
}
//once you are in the new page section, this takes you back to the main page after you have gotten your cereals
function retry(){
    location.replace("index.html");
}