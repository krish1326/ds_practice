function FrequencyOfSubString(string_main, substring) {
    let count = 0;
    if (arguments.length != 2) {
        console.error("Invalid number of arguments passed: Required 2 passed " + arguments.length);
    }

    else {
        let index_main = 0, index_sub = 0;

        while (index_main < string_main.length) {
            if (substring[index_sub] == string_main[index_main]) {
                let flag = 0;
                for (let j = 1; j < substring.length; j++) {
                    if (substring[j] == string_main[index_main + j]) {
                        flag = 1;
                    }
                    else {
                        flag = 0;
                        break;
                    }
                }
                if (flag) {
                    count += 1;
                }
            }
            index_main = index_main + 1;
        }
    }
    return count;
}

console.log(FrequencyOfSubString("what my name of is my name my name my name my namen", "of"));