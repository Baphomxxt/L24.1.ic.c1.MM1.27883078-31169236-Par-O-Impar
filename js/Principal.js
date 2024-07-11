/**Analisis de datos
*Crea un programa que lee un número entero como entrada y verifique si es par o impar.
*Muestre el número y su clasificación (par o impar) 
*/  

import Cl_ParOImpar from "./Cl_ParOImpar.js";
import Cl_IParOImpar from "./Cl_IParOImpar.js";

let IParO = new Cl_IParOImpar(),
    n = IParO.leerNum(),
    p = IParO.reporteNumero(),

    parO = new Cl_ParOImpar(n, p),

    salida = document.getElementById("salida");

    salida.innerHTML = IParO.reporteNumero(
        parO.ParOImpar(),
        parO.calificacion());
