/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function changeBackground(color) {

    let btnred = document.querySelector('#red');
    let btngreen = document.querySelector('#green');
    let btnyellow = document.querySelector('#yellow');
    let btnblue = document.querySelector('#blue');

    btnred.addEventListener ('click', () => {
        document.body.style.background = 'red' ;
    } )
    
    btngreen.addEventListener ('click', () =>{
        document.body.style.background = 'green' ;
    } )

    btnyellow.addEventListener ('click', () =>{
        document.body.style.background = 'yellow' ;
    } )

    btnblue.addEventListener ('click', () =>{
        document.body.style.background = 'blue' ;
    } )

})();
