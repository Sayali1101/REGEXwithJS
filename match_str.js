
const randomStr = "This is simple regex. REGEX is wonderful!!"
let regexExample = /simple/
const matcher = function(str,regex){
    const outputStr = str.match(regex);
    console.log(outputStr);
};

matcher(randomStr,regexExample)