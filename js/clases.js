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
  constructor(anyo, matricula, itvOk, litrosCombustible) {
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
class Camion extends Vehiculo {
  // constructor
  constructor(
    anyo,
    matricula,
    itvOk,
    litrosCombustible,
    tipo,
    capacidad,
    cargaActual,
    tara
  ) {
    super(anyo, matricula, itvOk, litrosCombustible);
    this.tipo = tipo;
    this.cargaActual = cargaActual;
    this.capacidad = capacidad;
    this.tara = tara;
  }

  // MÉTODOS
  comprobarCarga() {
    // Comprueba si la carga esta completa, si hay exceso de peso o si aun cabe mas peso.
    if (this.cargaActual == this.capacidad - this.tara){
      console.log('Camión lleno !!!!');
    } else if (this.this.cargaActual > this.capacidad - this.tara){
      console.log('Llevas un exceso de peso!!!')
    } else if (this.cargaActual < this.capacidad - this.tara){
      console.log('Carga Correcta, aún caben más bultos');
    }
  }
}

class Autobus extends Vehiculo {
  // constructor
  constructor(
    anyo,
    matricula,
    itvOk,
    litrosCombustible,
    tipo,
    aforo,
    asientosOcupados,
    usuarios,
    maletero = true,
    pisos = 1
  ) {
    super(anyo, matricula, itvOk, litrosCombustible);
    this.tipo = tipo;
    this.aforo = aforo;
    this.asientosOcupados = asientosOcupados;
    this.usuarios = usuarios;
    this.maletero = maletero;
    this.pisos = pisos;
  }

  // MÉTODOS
  comprobarAforo() {
    // Compara el aforo actual del bus con el aforo maximo, si esta lleno o si se ha superado
    switch (true) {
      case this.asientosOcupados == this.aforo:
        console.log(`El aforo está completo, no caben mas personas.`);
        break;
      case this.asientosOcupados > (this.aforo /3) *2:
        console.log(`El aforo está proximo a agotarse!!`);
        break;
      case this.asientosOcupados > this.aforo:
        console.log(`ATENCIÓN!!! SE HA SUPERADO EL AFORO!!!`);
        break;
      default:
        console.log(`Aún caben ${this.aforo-this.asientosOcupados} personas`)
    }
  }
}

var bus = new Autobus(2014, "0231HNK", true, 50, "Articulado", 60, 70, "Usuario urbano y discapacitados", false, 1);
var camion1 = new Camion(2014, "2364KJH", true, 70, "Trailer", 300, 250, 200);