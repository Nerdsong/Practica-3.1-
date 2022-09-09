class Sintetizador{
    
    nombre = "";

    marca="";

    cantidadDeteclas=36;
    
    modelo=""

    volumen = 100; 

    tipoDeOnda=""

    encendido = false;

    encenderSinte(boolean){
        if(boolean === true){
            this.encendido = true;
            console.log(this.nombre + " ahora está encendido")
        }
        else if (boolean === false){
            this.encendido = false;
            console.log(this.nombre + " ahora está apagado")
        }
    }
    

    establecerNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    cambiarTipoDeOnda(nuevoTipoDeOnda){
        this.tipoDeOnda = nuevoTipoDeOnda;
        console.log(this.nombre + " cambió a onda " + nuevoTipoDeOnda)
    }

    subirYBajarVolumen(subirObajar,cantidad){
        if( subirObajar === "subir"){
            this.volumen += cantidad;
            console.log(this.nombre+"subió de volumen a " +this.volumen)
        }
        else if ( subirObajar === "bajar" ){
            this.volumen -= cantidad;
            console.log(this.nombre+"bajó de volumen a " +this.volumen)
        
        }
    }

}
module.exports = Sintetizador; 