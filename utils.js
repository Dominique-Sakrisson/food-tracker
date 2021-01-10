import {foodLibrary} from './app.js'

export function getAverages(){
    let avgCals, avgFat, avgCarbs, avgPro = 0;
    //let count=0;
    for(let i =0; i < foodLibrary.length; i++){
        avgCals += foodLibrary[i].calories;
        avgFat += foodLibrary[i].fat;
        avgCarbs += foodLibrary[i].carbs;
        avgPro += foodLibrary[i].protein;
    }
    avgCals = avgCals / foodLibrary.length;
    avgFat = avgFat / foodLibrary.length;
    avgCarbs = avgCarbs / foodLibrary.length;
    avgPro = avgPro / foodLibrary.length;
    return [avgCals,avgFat,avgCarbs,avgPro];
}