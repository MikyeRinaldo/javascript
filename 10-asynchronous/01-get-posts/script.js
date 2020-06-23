/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    function callbackTry (error, arrayOfArticle){
        
        if (error === null) {
            console.table(arrayOfArticle);
        } else {
            console.log('The code got lost on the way');
        }
    };

    document.getElementById("run").addEventListener("click", function(){
        
        window.lib.getPosts(callbackTry);
    });

})();
