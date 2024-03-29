/**
 * @param {string} s
 * @return {boolean}
 */
var isValidParanthesis = function (s) {
    let obj = {
        '{': '}',
        '[': ']',
        '(': ")"
    }

    if (s.length % 2 != 0) {
        return false;
    }
    else {
        let str = s.slice("");
        let current_stack = [];
        for (let elem of str) {
            if (!obj[elem]) {

                let current_element_to_verify = current_stack.pop();
                console.log(obj[current_element_to_verify], elem)
                if (obj[current_element_to_verify] != elem) {
                    return false;
                }
            }
            else {
                current_stack.push(elem);
            }
        }

    }
    return current_stack.length === 0;
};

isValidParanthesis('{{}}()') // true
isValidParanthesis('((})') // false
