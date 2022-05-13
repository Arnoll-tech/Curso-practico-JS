//codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
perimetroCuadrado(56);
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
    return lado * lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrado + " cm*2");
console.groupEnd();

//codigo del triangulo
console.group("Triangulos");
/*
const ladoTrinagulo1 = 6;
const ladoTrinagulo2 = 6;
const baseTrinagulo = 4;

console.log("Los lados del triangulo miden: "
 + ladoTrinagulo1 
 + " cm, " 
 + ladoTrinagulo2 
 + " cm, "
 + baseTrinagulo 
 + " cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + " cm.");
*/
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
};
//console.log("El perimetro del triangulo es: " + perimetro + " cm");

function areaTriangulo(base, altura) {
return  (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + " cm*2");
console.groupEnd();

//este es el codigo del circulo
console.group("Circulos");
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + " cm");

function diametroCirculo (radio) {
return radio * 2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + " cm");

const pi = Math.PI;
//console.log("El PI del circulo es: " + pi);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
//const perimetroCirculo = diametroCirculo * pi;
//console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

function areaCirculo(radio) {
    return (radio * radio) * pi;
}

//const areaCirculo = (radioCirculo * radioCirculo) * pi;
//console.log("El area del circulo es: " + areaCirculo() + " cm*2");

console.groupEnd();