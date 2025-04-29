function revWords (str){
    let newStr = str.trim().split(/\s+/);
    // let result = '';

    // for (let i = newStr.length - 1; i >= 0; i--){
    //     result += newStr[i];
    //     if (i !== 0) {
    //         result += ' '; 
    //     }
    // }
    // return result;

    return newStr.reverse().join(' ');
}


console.log(revWords(" the sky is blue"));
console.log(revWords("hello   world!  "));
console.log(revWords("a good example"));


///////

function sevenFind(arr){
    if (arr.toString().includes('7')){
        return '7 - найдено!';
    } else {
        return 'в массиве нет 7';        
    }
}

console.log(sevenFind([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenFind([8, 6, 33, 100]));
console.log(sevenFind([2, 55, 60, 97, 86]));