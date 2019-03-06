let flag_error = false;
class calculadoraClass {
    constructor() {
        this.resultado = "";
        this.numero1 = "";
        this.numero2 = "";
        this.operador = "";
    }

    get getNumero1() {
        return parseInt(this.numero1);
    }
    set setNumero1(value) {
        this.numero1 = value;
    }
    get getNumero2() {
        return parseInt(this.numero2);
    }
    set setNumero2(value) {
        this.numero2 = value;
    }
    get getResultado() {
        return this.resultado;
    }
    set setResultado(value) {
        this.resultado = value;
    }
    get getOperador() {
        return this.operador;
    }
    set setOperador(value) {
        this.operador = value;
    }

    sumar() {
        this.resultado = this.getNumero1 + this.getNumero2;
    }
    restar() {
        this.resultado = this.getNumero1 - this.getNumero2;
    }
    multiplicar() {
        this.resultado = this.getNumero1 * this.getNumero2;
    }
    dividir() {
        if (this.numero2 == 0) {
            error();
        } else {
            this.resultado = this.getNumero1 / this.getNumero2;
        }
    }
    igualar() {
        switch (this.getOperador) {
            case `+`:
                this.sumar();
                break;
            case `-`:
                this.restar();
                break;
            case `*`:
                this.multiplicar();
                break;
            case `/`:
                this.dividir();
                break;
            default:
                break;
        }
        this.setNumero1 = "";
        this.setNumero2 = "";
        this.setOperador = "";
    }
}
var miCalculadora;

function botonNumerico(numero) {
    if (miCalculadora.operador == "") {
        miCalculadora.numero1 += numero.toString();
        console.log(miCalculadora.getNumero1);
    } else {
        miCalculadora.numero2 += numero.toString();
        console.log("El número " + miCalculadora.getNumero2);
    }
}


function botonOperador(operador) {
    if (miCalculadora.operador !== "") {
        error();
    } else {
        miCalculadora.operador = operador;
        console.log("El operador es" + miCalculadora.getOperador);
    }
}
function botonIgualar() {
    miCalculadora.igualar();
    if (miCalculadora.numero1 == `NaN`|| miCalculadora.numero2== `NaN`){
        error();
    }
    if (flag_error) {
        flag_error = false;
    } else console.log(miCalculadora.getResultado);
}

function crearCalculadora() {
    miCalculadora = new calculadoraClass("");
    console.log(miCalculadora);
}
function error() {
    flag_error = true;
    console.log("Sintax Err");
}
$("#id2").click(
    () => {
        $("#aplicarJquery").hide();
    }
);
$("#id3").click(
    () => {
        $("#aplicarJquery").fadeOut();
    }
);

