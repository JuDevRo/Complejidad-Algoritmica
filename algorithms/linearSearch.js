//Complejidad Temporal -> O(n + 3) = O(n)
//Complejidad Espacial -> O(n + 1) = O(n)
//Espacio Auxiliar -> O(1) = O(1) - espacio de entrada

function linearSearch(arreglo,clave){ // Espacio de entrada
    for(let indice=0;indice<arreglo.length;indice++){// O(n)
        if(arreglo[indice]===clave){ // O(1)
        return indice; // O(1)
        }
    }
    return-1; // O(1)
}