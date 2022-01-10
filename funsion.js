

function minutes(min){
    
    return min < 10 ? '0'+ min : min ;

};


function dayfunsion(date){

    if (date == 0){
        return `Sunday`;
    }else if (date == 1){
        return `Monday`;
    }else if (date == 2){
        return `Tuesday`;
    }else if (date == 3){
        return `Wednesday`;
    }else if (date == 4){
        return `Thursday`;
    }else if (date == 5){
        return `Friday`;
    }else if (date == 6){
        return `Saturday`;
    }
}

