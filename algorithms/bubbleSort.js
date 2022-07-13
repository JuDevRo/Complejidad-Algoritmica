//Complejidad Temporal -> O(1 + n * n + 5) = O(n^2)
//Complejidad Espacial -> O(n + 4) = O(n)
//Espacio Auxiliar -> O(1) = O(1) - espacio de entrada
function bubbleSort(arreglo){//Espacio de entrada
    let longitud=arreglo.length;// O(1)
    for(let i=0;i<longitud;i++){// O(n)
        for(let j=0;j<longitud;j++){// O(n)
            if(arreglo[j]>arreglo[j+1]){// O(1)
                let temporal=arreglo[j];// O(1)
                arreglo[j]=arreglo[j+1];// O(1)
                arreglo[j+1]=temporal;}// O(1)
            }
        }
    return arreglo;// O(1)
}