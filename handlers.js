import {getAverages} from './utils.js';
import {foodLibrary} from './app.js'

export let userDailyLib = [];

export function addToEaten(event){
    const selector = document.getElementById("food-select");
    const selectedFood = selector.value;
    var x = event.target;
    console.log(selectedFood);
    for(let i =0; i <foodLibrary.length; i++){
        if(selectedFood === foodLibrary[i].name){
            userDailyLib.push(foodLibrary[i]);
            //very temporarilly testing the averages output to console here
            //values from averages will be used to populat the tables and graphs data 
            //eventually used to weigh against each new food to assign it a boolean of Ishighcal,IshighFat,isHighcarb etc..
            //beyond that, program will be able to reccomend foods of higher of whichever nutrient youre low on for the day, need more fat? it will recommend foods[i].isHighFat  
            console.log(getAverages() + 'averages');
            console.log(userDailyLib);
        }
    }
}