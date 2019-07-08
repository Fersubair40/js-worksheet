// CHAINIG BUILT-IN METHODS

function reverseString(text) {
    return text.split('').reverse().join('');
}

//  USING ES6

function reverseString(text){
    return [...text].reverse().join('');
}

// USING FOR LOOP

function reverseString(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result
}


function reverseString(text) {
    let result = '';
    for( let char of text ) {
        result = char + text;
    }
    return result;
}



function reverseString(text) {
    if(text === ''){
        return ''
    }else {
        return reverseString(text.substr(1)) + text[0]
    }
}


function reverseString(text) {
    return text.split('').reduce((acc, char) => char + acc );
}