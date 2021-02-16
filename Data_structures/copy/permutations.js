let results = [];
function permutate(text, dummy = "") {
    //console.log(text);   
    if (text.length == 0) {
        results.push(dummy);
        //console.log(dummy);
        //console.log(results);
    }
    else {
        for (let j = 0; j < text.length; j++) {
            dummy = dummy + text[j];

            permutate(text.slice(0, j) + text.slice(j + 1), dummy);
            dummy = dummy.slice(0, dummy.length - 1);
        }
    }
}
function permAlone(str) {
    permutate(str);
    let count = 0;
    console.log(results);
    results.forEach(value => {
        let dummy = {};
        for (let k = 0; k < value.length - 1; k++) {
            if (value[k] == value[k + 1]) {
                count += 1;
                break;
            }
        }
    })

    return results.length - count;
}

permAlone("aaab");


function getPlainText(anyText) {
    return anyText.replace(/[^a-z ]/ig, "").toLowerCase();
}
console.log(getPlainText("hello ghgfsd781^%$fa7%Hhj KLUNAggd"));

let text = 'My name is krishna chaitanya name is name plus the first name'

text.replace(/name/g, 9);
