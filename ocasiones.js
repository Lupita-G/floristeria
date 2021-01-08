(function (){
    let formulario = document.getElementById('formulario'),
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    let validarNombre = function(e){
        if(formulario.nombre.value == 0) {
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    };
    hvdjfjm


    

    let validarEmail = function(e){
        if(formulario.email.value == 0) {
            alert("Ingrese un email para continuar");
            e.preventDefault();
        }
    };

    let validarCheckbox = function(e){
        if(formulario.terminos.checked == false) {
            alert("Acepta los Terminos");
            e.preventDefault();
        }
    }

    let validar = function(e){
        validarNombre(e);
        validarEmail(e);
        validarCheckbox(e);
    };

    formulario.addEventListener("submit", validar);
}())

