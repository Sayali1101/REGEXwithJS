
const randomStr = 'filea.mp3 file_01.mp3 file_02.mp3 test.csv test2.html'
let regexExample = /(\w+)\.mp3/g;
let matcher = regexExample.exec(randomStr);

while (matcher)
{
    
    const outputfile = matcher[1];
    console.log(outputfile);
    matcher = regexExample.exec(randomStr);
    
}


