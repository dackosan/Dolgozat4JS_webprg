//1
function getCount(str) {
    let vowel = 0;

    for(let char of str){
        if(char == 'a' || char == 'e' || char == 'u' || char == 'i' || char == 'o'){
            vowel++;
        }
    }

    return vowel
}


//2
function filter_list(l) {
    let array = [];

    for(let char of l){
        if(Number.isInteger(char)){
            array.push(char);
        }
    }

    return array;
}

//3
function hasUniqueChars(str){
    const seenChars = new Set();

    for (let i = 0; i < str.length; i++) {
        if (seenChars.has(str[i])) {
            return false;
        }

        seenChars.add(str[i]);
    }

    return true;
}

//4
function divisors(integer) {
    let array = [];

    for(let i = 2; i < integer; i++){
        if(integer % i == 0){
            array.push(i);
        }
    }

    if(array.length == 0){
        return `${integer} is prime`;
    }

    return array;
}