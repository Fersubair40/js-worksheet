const vowels = ["a","e","i","o","u"]

function vowelCounter(text) {
    let counter = 0;
    for( let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }
    return counter
}





function vowelCounter(text) {
    let matchinginstance = text.match(/[aeiou]/gi);
    if (matchinginstance) {
        return matchinginstance.length
    } else {
        return 0;
    }
}