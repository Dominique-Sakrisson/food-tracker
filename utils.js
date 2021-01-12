import {userDailyLib} from './handlers.js'

const userFoodList = [];


export function getAverages(){
    let avgCals= 0, avgFat= 0, avgCarbs= 0, avgPro = 0;
    //let count=0;
    for(let i =0; i < userDailyLib.length; i++){
        avgCals += userDailyLib[i].calories;
        avgFat += userDailyLib[i].fat;
        avgCarbs += userDailyLib[i].carbs;
        avgPro += userDailyLib[i].protein;
    }
    avgCals = (avgCals / userDailyLib.length).toFixed(2);
    avgFat = (avgFat / userDailyLib.length).toFixed(2);
    avgCarbs = (avgCarbs / userDailyLib.length).toFixed(2);
    avgPro = (avgPro / userDailyLib.length).toFixed(2);
    return [avgCals,avgFat,avgCarbs,avgPro];
}