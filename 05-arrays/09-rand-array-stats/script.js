/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click",function(){

    var randomArr = [];
while(randomArr.length < 10){
    var r = Math.floor(Math.random() * 100) + 1;
    if(randomArr.indexOf(r) === -1) randomArr.push(r);
    } //créer 10 chiffres de façon aléatoire.

    
    document.getElementById("n-1").innerHTML = randomArr[0];
    document.getElementById("n-2").innerHTML = randomArr[1];
    document.getElementById("n-3").innerHTML = randomArr[2];
    document.getElementById("n-4").innerHTML = randomArr[3];
    document.getElementById("n-5").innerHTML = randomArr[4];
    document.getElementById("n-6").innerHTML = randomArr[5];
    document.getElementById("n-7").innerHTML = randomArr[6];
    document.getElementById("n-8").innerHTML = randomArr[7];
    document.getElementById("n-9").innerHTML = randomArr[8];
    document.getElementById("n-10").innerHTML = randomArr[9];


    document.getElementById("min").innerHTML = Math.min(...randomArr);
    document.getElementById("max").innerHTML = Math.max(...randomArr);
    document.getElementById("sum").innerHTML = randomArr.reduce((a,b) => a + b, 0);
    document.getElementById("average").innerHTML = randomArr.reduce((a,b) => a + b, 0) / randomArr.length;
    
    
    });

})();
