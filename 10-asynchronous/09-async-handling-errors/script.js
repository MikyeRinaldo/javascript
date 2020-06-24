/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {

	async function showPeople()
	{
		let peopleArr = await window.lib.getPersons();
		return peopleArr;

		// Ou gérer erreur ici avec try/catch
	}

    document.getElementById("run").addEventListener("click", () => {
    	showPeople()
    	.then(peopleArr => console.table(peopleArr))
        .catch(err => console.error(err));
        
    });
})();
