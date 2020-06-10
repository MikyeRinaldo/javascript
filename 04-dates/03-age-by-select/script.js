/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){

        // string() => permet de considérer les infos en string et pas number.

        let day = String(document.getElementById("dob-day").value);
        let month = String(document.getElementById("dob-month").value);
        let year = document.getElementById("dob-year").value;


        var today = new Date();
    
        var age = today.getFullYear() - year;

        var m = today.getMonth() - month + 1;

        if (m <= 0) {
            if (today.getDate() <= day) {
            age--;
        }
    }

    alert("Vous avez "+age+" ans ")

    })
})();