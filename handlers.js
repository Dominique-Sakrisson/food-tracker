import {getAverages} from './utils.js';
import {foodLibrary} from './app.js'

export const userDailyLib = [];

export function addToEaten(event){
    const selector = document.getElementById("food-select");
    const selectedFood = selector.value;
    var x = event.target;
    console.log(selectedFood);
    for(let i =0; i <foodLibrary.length; i++){
        if(selectedFood === foodLibrary[i].name){
            userDailyLib.push(foodLibrary[i]);
            console.log(userDailyLib);
        }
    }
}