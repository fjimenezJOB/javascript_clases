/*
    Autor: Fran Jiménez
    email: fjimenezjob@gmail.com
    versión: 0.01

    Ejercicio para practicar el uso de clases con javascript, despues de ECMAScript 2015.
    -----------------------------------------------------------------------------------------
    1. Inventar un tipo de clase padre, que luego herede de dos tipos de clase hijo.
    2. Con un mínimo de dos métodos para las clase hijos.

*/

// CLASE PADRE VEHICULO
class Vehiculo {
  // constructor
  constructor(anyo, matricula,itvOk, litrosCombustible) {
    this.anyo = anyo;
    this.matricula = matricula;
    this.itvOk = itvOk;
    this.litrosCombustible = litrosCombustible;
  }

  // MÉTODOS
  imprimirInfo() {
    let itv = "";
    if (this.itvOk == true) {
      itv = "Si";
    } else {
      itv = "No";
    }
    console.log(
      `Nº Puertas: ${this.numPuertas}\nAño: ${this.anyo}\nMatrícula: ${this.matricula}\nNº Ruedas: ${this.numRuedas}\nITV Pasada: ${itv}`
    );
  }

  comprobarCombustible() {
    // Comprueba la gasolina que le queda al vehiculo
    if (this.litrosCombustible == 0) {
      console.log("Combustible agotado, por favor rellene el deposito");
    } else if (this.litrosCombustible < 5) {
      console.log(
        "Combustible próximo a agotarse, ve volando a la gasolinera !!"
      );
    } else {
      console.log(`Combustible restante ${this.litrosCombustible} Litros`);
    }
  }
}

// CLASE HIJA Camión, HEREDA DE VEHICULO
class Camion extends Vehiculo{
  // constructor
    constructor(anyo, matricula, itvOk, litrosCombustible,numRuedas, tipo, capacidad, cargaActual, tara) {
        super(anyo, matricula,itvOk, litrosCombustible);
        this.numRuedas = numRuedas;
        this.tipo = tipo;
        this.cargaActual = cargaActual;
        this.capacidad = capacidad;
        this.tara = tara;
    }

  // MÉTODOS
  

}


class Autobus extends Vehiculo{
    // constructor
    constructor(anyo, matricula,itvOk, litrosCombustible, tipo, aforo, usuarios, maletero = true, pisos = 1){
        super(anyo, matricula,itvOk, litrosCombustible);
        this.tipo = tipo;
        this.aforo = aforo;
        this.usuarios = usuarios;
        this.maletero = maletero;
        this.pisos = pisos;

    }
}

var motoPapa = new Camion(2012, "2315LKO", 2, true,30);