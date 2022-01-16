function split(wholeArray) {
  /* tu código acá para definir el firstHalf y secondHalf array */

  /*
    let mitad = Math.floor((wholeArray.length - 1) / 2);
    let firstHalf = [];
    let secondHalf = [];
    for(let i = 0; i <= mitad; i++ ){
        firstHalf.push(wholeArray[i]);
    }
    for(let j = mitad + 1; j < wholeArray.length; j++){
        secondHalf.push(wholeArray[j]);
    }
  */

  let mitad = Math.floor((wholeArray - 1) / 2);
  let firstHalf = wholeArray.slice(0, mitad + 1);
  let secondHalf = wholeArray.slice(mitad + 1, mitad + 1);

  return [firstHalf, secondHalf];
}

function merge(left, right) {
  let arrayNuevo = [];
  while (left.lenght || right.length) {
    if (left[0] < right[0]) {
      arrayNuevo.push(left.shift());
    } else {
      arrayNuevo.push(right.shift());
    }
  }
  /*
      }
      for(let i = 0; i < arrayNuevo.length; i++){
          for(let j = 0; j < arrayNuevo.length - 1; j++){
            if(arrayNuevo[j+1] < arrayNuevo[j]){
                let aux = arrayNuevo[j]; //guardo el valor en ese indice para no perderlo
                arrayNuevo[j] = arrayNuevo[j+1];
                arrayNuevo[j+1] = aux;
            }
          }
      }
      */

  //
  return [...arrayNuevo, ...left, ...right];
}

function mergeSort(array) {
  let mitad = Math.floor((array.length - 1) / 2);

  if (array.length < 2) return array;
  let firstHalf = array.splice(0, mitad + 1);
  return merge(mergeSort(firstHalf), mergeSort(array));
}
