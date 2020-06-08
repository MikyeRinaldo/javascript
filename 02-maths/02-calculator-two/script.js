/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
    
    switch (operation) {
        case 'addition':

            let add= a+b;
            alert(add);
            break;
    
        case 'substraction':

            let sub= a-b;
            alert(sub);
            break;

        case 'multiplication':

            let mult= a*b;
            alert(mult);
            break;

        case 'division' :

            let div= a/b;
            alert(div);
            break;

        default:
            console.log('kesaco');
    }

};

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

})();

