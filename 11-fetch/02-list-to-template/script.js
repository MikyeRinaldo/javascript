/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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

        const template = document.querySelector("#tpl-hero");

        xmen.forEach(element => {
            const clone = template.content.cloneNode(true);

            clone.querySelector(".name").innerHTML = element.name;
            clone.querySelector(".alter-ego").innerHTML = element.alterEgo;
            clone.querySelector(".powers").innerHTML = element.abilities;

            document.querySelector("#target").appendChild(clone);
        });
    }

    document.querySelector("#run").addEventListener("click", () => {
        xmensRecup();
    });


//     async function xmensRecup() {

//         const response = await fetch('http://localhost:3000/heroes');
//         xmen = await response.json();


//         // Cache of the template
//         var template = document.querySelector("tpl-hero");
//         // Get the contents of the template
//         var templateHtml = template.innerHTML;
//         // Final HTML variable as empty string
//         var listHtml = "";


//         //Loop through dataObject, replace placeholder tags
//         // with actual data, and generate final HTML
//         for (var key in xmen) {
//             listHtml += templateHtml.replace(/{{hero}}/g, xmen[key]["id"])
//                                     .replace(/{{name}}/g, xmen[key]["name"])
//                                     .replace(/{{alter-ego}}/g, xmen[key]["alterEgo"])
//                                     .replace(/{{powers}}/g, xmen[key]["abilities"]);
//         }
        
//         // Replace the HTML of #list with final HTML
//         document.getElementById("list").innerHTML = listHtml;

// };
//     document.querySelector("#run").addEventListener("click", () => {
//         xmensRecup();
//     });
})();
