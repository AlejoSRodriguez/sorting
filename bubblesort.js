function bubbleSort(array) {
  /* tu codigo acá */
  //1-recorro el array
  //2-por cada recorrida agarro el indice i y i+1
  //3-preguntamos si i+1 es menor a i llamamos swap,
  //3-bis en caso contrario pasamos al proximo indice (burbuja)
  //4-swap intercambia de orden los valores en esa burbuja
  //5-volvemos a bubblesort para que cambie los indices de la proxima burbuja
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) swap(array, j);
    }
  }
  return array;
}

function swap(array, j) {
  /* tu codigo acá */
  let primero = array[j];
  let segundo = array[j + 1];
  array[j] = segundo;
  array[j + 1] = primero;
}
