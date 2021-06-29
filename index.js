const headquarters = 42;
const feet = 264;
function distanceFromHqInBlocks (num){
    if (num > 42){
    return num - headquarters;
    }else if (num < 42){
        return headquarters - num;
    }
}
function distanceFromHqInFeet (num){
    return distanceFromHqInBlocks(num) * feet;
}
function distanceTravelledInFeet (num1, num2){
    if (num1 < num2)
        return (num2 - num1) * 264
    else
        return (num1 - num2) *264
}

const calculatesFarePrice = (start, destination) => {
    if (Math.abs((start - destination) * 264 < 400)){
        return 0
    }
    else if (Math.abs((start - destination) * 264 > 400 < 2000)){
        return Math.abs(((start - destination) * 264 - 400) * .02)
    }
    else if ( Math.abs((start - destination) * 264 > 2000) && Math.abs((start - destination) * 264 < 2500) ){
        return 25
    }
    else {return 'cannot travel that far'}
}