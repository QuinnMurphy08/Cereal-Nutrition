var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Cereal%20Nutrition.csv"

//We are suggesting a cereal based on calories, protein, sugar, and fiber

var cerealName = getColumn(url,1);
var cerealCalories = getColumn(url,2);
var cerealProtein = getColumn(url,3);





var fruityCereal = []

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Fruit")||cerealName[i].includes("Apple")||cerealName[i].includes("Grape")||cerealName[i].includes("Raisin")||cerealName[i].includes("4")||cerealName[i].includes("Froot")){
        fruityCereal.push(cerealName[i])
    }
}
console.log(fruityCereal);

var honeyCereal = [];

for(var i = 0; i < cerealName.length; i++){
    if(cerealName[i].includes("Honey")||cerealName[i].includes("Maypo")||cerealName[i].includes("Graham")){
        honeyCereal.push(cerealName[i])
    }
}
console.log(honeyCereal)

var chocolateCereal = [];

for (var i = 0; i < cerealName.length; i++) {
    if (cerealName[i].includes("Chocolate") || cerealName[i].includes("Cocoa") || cerealName[i].includes("Chocula")){
        chocolateCereal.push(cerealName[i]);
    }
}
console.log(chocolateCereal);

function createList(calories,protein,flavor){}




function findCereal(flavor){
    var matchingCereal = []
    
    for(var i = 0; i < cerealName.length; i++){
        if(cerealName[i].includes(flavor)){
            matchingCereal.push(cerealName[i])
        }
    }
    console.log(matchingCereal);
    
 }
    

