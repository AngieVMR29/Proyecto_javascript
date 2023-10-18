const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");


/* Funciones de la calculadora*/
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonOn = boton.textContent;
/* Funcion limpiar todo*/ 
        if (boton.id === "limpiar") {
            pantalla.textContent= "0";
            return;
        }
/* Funcion limpiar 1 a 1*/ 
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1) {
                pantalla.textContent= 0;
            } else {
                pantalla.textContent = pantalla.textContent.slice(0,-1);
            }
            return;
        }

/* Funciones operacionales*/ 
        if(boton.id === "igual"){
            try{
                if(pantalla.textContent.includes("//","**") || pantalla.textContent === "Error"){
                    pantalla.textContent = "error"



                }else{ pantalla.textContent = eval (pantalla.textContent);}
                    pantalla.textContent = eval(pantalla.textContent);
                }
            catch{
                pantalla.textContent = "error"
                }
                return;
        } 

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn;
        } else {
            pantalla.textContent += botonOn;
        }

    
    })
})
