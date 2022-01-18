const array = [[1, 2], 3, [4, [5, [6], ['foo', 'bar']]]];

function flatArray(array) {
    let flatted = [];

    const flat = array => {
        array.forEach(el => {
            if (Array.isArray(el)) {
                flat(el)
            } else if(typeof el !== 'string') {
                flatted.push(el)
            }
        })
    }
    flat(array);
    return flatted;
}

console.log(flatArray(array));