/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    return countAndSayHelper(n,'1');
};

function countAndSayHelper(n , prev){
    if(n === 1) return prev;
    var i=0;
    var curr_string ='';
    var len = prev.length;
    while (i <len ){
        j=i ;
        while (i < len && prev[i] == prev[j] ){
            i++;
        }
        curr_string = curr_string + (i - j).toString() + prev[j];
    }
    return countAndSayHelper(n-1,curr_string);
}

console.log(countAndSay(5)); 
