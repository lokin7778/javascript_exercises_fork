const repeatString = function(str, num) {

    let repeatedString = ""; // declare an empty string

    if ( num < 0){
        return "ERROR";
    }

    else{

        for (let i = 0; i < num; i++){

            repeatedString = repeatedString + str;
        }

        return repeatedString;
    }
};

// Do not edit below this line
module.exports = repeatString;
