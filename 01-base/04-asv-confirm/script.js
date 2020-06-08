/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function box() {

    var age = prompt("How old are you?") ;
    var gender = prompt ("What's your gender ?");
    var town = prompt("In witch town do you live");


        confirm(" Age : " +age+ "." +
        " Gender : " +gender+ "." +  " Town : " +town+ ".");

        while (confirm == false) {
            var age = prompt("How old are you?") ;
            var gender = prompt ("What's your gender ?");
            var town = prompt("In witch town do you live");
        
        
                confirm(" Age : " +age+ "." +
                " Gender : " +gender+ "." +  " Town : " +town+ ".");
        }


    
})();
