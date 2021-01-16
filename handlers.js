import {getAverages} from './utils.js';
import {foodLibrary, drawChart} from './app.js'

const averagesDisplay = document.getElementById('display-averages');

export let userDailyLib = [];

export function addToEaten(event){
    const selector = document.getElementById("food-select");
    const selectedFood = selector.value;
    
    console.log(selectedFood);
    for(let i =0; i <foodLibrary.length; i++){
        if(selectedFood === foodLibrary[i].name){
            userDailyLib.push(foodLibrary[i]);
            console.log(userDailyLib);
            let averages = getAverages();
            return averages;
        }
    }
}

export function setAverageDisplay(event){
    averagesDisplay.textContent = (getAverages() + 'averages');
}
