/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let result = "" ;

    for (i=1 ; i <101 ; ++) {

        if ( i % 3 == 0) {
            
            result= i + "fizz";

        } else if ( i % 5 == 0) {
            
            result = i + "buzz";

        } else if ( (i % 3 == 0) && ( i % 5 == 0)){

            result = i + "fizzbuzz";
        }
    };

    console.log(result);

})();
