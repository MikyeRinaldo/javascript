/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    var hour = new Date().getHours();
    var min = new Date().getMinutes();
    var msg;

    if (hour < 17){
        msg = "Hello";
    }

    else if (hour == 15){
        if (min < 30) {

        msg = "Hello";

    } else {
        msg = "Good evening";
    }

    } else {
        msg = "Good evening";
    };

    document.getElementById("target").innerHTML = msg;
})();
