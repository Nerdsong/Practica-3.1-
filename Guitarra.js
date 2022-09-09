class Guitarra{
    id = ""

    color = "Rojo";

    marca="";

    cantidadDeCuerdas=6;

    modelo="";

    sonido = "clean";
    
    queColorEs(){
        return this.color;
    }

    cambiarSonido(nuevoSonido){
        this.sonido = nuevoSonido
        console.log(this.id + "cambió de sonido a "+ nuevoSonido);
    }

    cambiarCantidadDeCuerdas(numero){
        this.cantidadDeCuerdas = numero
        console.log(this.id + "cambió la cantidad de cuerdas a " + numero);
    }

    cambiarColor(nuevoColor){
        this.color = nuevoColor;
        console.log(this.id + "cambió de color a " + nuevoColor)
    }
}

module.exports = Guitarra;
