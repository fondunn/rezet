const markDown = "Hey all! Check [my new site](http://mysite.com)! [not a link](javascript:console.log('hello'))";

function converter(str) {

    const re = /\[.*?[$\]]\(.*?[$)]/g;
    
    const arr = str.match(re);
    let result = str;

    arr.forEach(data => {
        const re = /(http|https):\/\//;
        if (data.match(re)) {
            let link = data.match(/\(+(http|https):\/\/.*?[$\)]/);
            link = link[0].replace(/\((.*?)\)/, '$1');
            let text = data.match(/\[.*?\]/);
            text = text[0].replace(/\[(.*?)\]/g,"$1");
            result = result.replace(data, `<a href='${link}'>${text}</a>`);
        }
    })

    return result;
}
console.log(converter(markDown));