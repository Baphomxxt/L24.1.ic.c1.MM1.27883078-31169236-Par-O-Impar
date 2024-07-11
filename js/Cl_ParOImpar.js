export default class Cl_ParOImpar {
    constructor(num, par, impar, cali) {
        this.num = +num;
        this.par = par;
        this.impar = impar;
        this.cali = cali;
    }
    set num(n) {
        this.num = n;
    }
    get num() {
        return this.n;
    }
    set par(p) {
        this.par = +p;
    }
    get par() {
        return this.p;
    }
    set impar(i) {
        this.impar = +i;
    }
    get impar() {
        return this.i;
    }
    set cali(c) {
        this.cali = c;
    }
    get cali() {
        return this.c;
    }
    ParOImpar() {
        if (this.nume % 2 == 0)
            return this.par;
        else
            return this.impar;
    }
    calificacion() {
        return this.ParOImpar();
    }
}