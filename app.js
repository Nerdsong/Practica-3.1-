const Guitarra = require("./Guitarra");
const Sintetizador = require("./Sintetizador");
const stratocarlos = new Guitarra();
const ivanna = new Guitarra(); 
const moggy = new Sintetizador();
const sintclaudia = new Sintetizador();

console.log(stratocarlos.queColorEs());
console.log(ivanna.queColorEs())
stratocarlos.cambiarColor("Negro");
ivanna.cambiarColor("verde");
console.log("------------");
console.log(stratocarlos.queColorEs());
console.log(ivanna.queColorEs());

stratocarlos.marca = "Fender";
stratocarlos.modelo = "Stratocaster";
stratocarlos.id= "Stratocarlos"
ivanna.id="Ivanna"
ivanna.marca ="Ibanez";
ivanna.modelo = "RG Dix7"
moggy.nombre="moggy"
moggy.marca="Moog"
moggy.modelo="Mini moog model D"
sintclaudia.nombre="sintclaudia"
sintclaudia.marca="Synclavier"
sintclaudia.modelo="Synclavier 2"



console.log("-----------comportamientos de guitarra-------------");
ivanna.cambiarCantidadDeCuerdas(7);
ivanna.cambiarSonido("distorsion");
stratocarlos.cambiarSonido("Overdrive")
stratocarlos.cambiarColor("Rojo")

console.log("------------comportamientos de sintetizador--------");
moggy.encenderSinte(true)
sintclaudia.encenderSinte(false)
moggy.cambiarTipoDeOnda("sinoidal")
sintclaudia.cambiarTipoDeOnda("bit")
moggy.subirYBajarVolumen("subir", 20);
moggy.subirYBajarVolumen("bajar", 40);


