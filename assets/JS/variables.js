/*
var variable1 = "soy la variable 1";
var variable2 = "soy la variable 2";
const variable_constante = "123123" ;

function vartest() {
    let variable3 = "soy la variable 3"
    var x = 31;
    if (true) {
        var x = 71;
        console.log(x);
            }
            console.log(x);
}

console.log(variable3)
*/
var variable1 = "soy la variable 1";
console.log(variable1);
variable1 = 1212;
console.log(variable1);

const variable2 = "variable 2";
console.log(variable2);
/*
variable2 = 10;
console.log(variable2);
*/
// marca error por que no se puede cambiar el valor de una constante

function vartest() {
    let variable3 = "soy la variable 3"
    var x = 31;
    if (true) {
        var x = 71;
        console.log(x);
            }
            console.log(x);
    
    return x;
}

vartest();

const nuevaFuncion = () => {
    var x = 31;
    if (true) {
        var x = 71 ;
        console.log(x);
            }
            console.log(X);
}

nuevafuncion();

//template script
const nombre = "pedro"
const apellido = "rivera"

console.log(`hola mi nombre es ${nombre} y mis apellidos son${apellido}`);