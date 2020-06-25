/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    async function xmensRecup() {
        
        const response = await fetch("http://localhost:3000/heroes");
        xmen = await response.json();

        const xmenChosen = document.querySelector("#hero-id").value;
        const xmenShowed = xmen[xmenChosen -1 ];

        const template = document.querySelector("#tpl-hero");

        if (xmenChosen <= xmen.length && xmenChosen > 0){

            const clone = template.content.cloneNode(true);

            clone.querySelector(".name").innerHTML = xmenShowed.name;
            clone.querySelector(".alter-ego").innerHTML = xmenShowed.alterEgo;
            clone.querySelector(".powers").innerHTML = xmenShowed.abilities;

            document.querySelector("#target").appendChild(clone);

            } else {

                alert(`Onli numbers from 1 to + ${xmen.length}`);
        };
    };
    document.querySelector("#run").addEventListener("click", () => {
        xmensRecup();
    });
    
})();
