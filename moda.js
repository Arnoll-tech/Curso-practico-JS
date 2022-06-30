const lista1 = [
    1,
    2,
    3,
    1,
    4,
    5,
    6,
    5,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    1, 
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]) {
            lista1Count[elemento] += 1;
        }else { 
        lista1Count[elemento] = 1;
         }
    }
);


const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
)

const moda  = lista1Array[lista1Array.length - 1];
