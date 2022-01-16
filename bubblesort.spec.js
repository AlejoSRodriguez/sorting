describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it("Un Arreglo desordenado que termine ordenado.", function () {
    let array = [9, 3, 5, 10, 1];
    expect(bubbleSort(array)).toEqual([1, 3, 5, 9, 10]);
  });

  it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado.", function () {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("contar las llamadas a swap", function () {
    spyOn(window, "swap").and.callThrough(); // callThrough le dice al spy que utilice el método original chocolate['swap'], mientras que `callFake` haría una copia.
    window.bubbleSort([3, 1, 2]);
    expect(window.swap.calls.count()).toEqual(2);
  });
});

describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    let array = [1, 2, 3, 4, 5, 6, 7];
    expect(split(array).length).toEqual(2);
  });
});

describe("Merge", function () {
  it("es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    let array1 = [4, 5, 6, 7, 8, 9, 10];
    let array2 = [1, 2, 3, 4, 5];
    expect(merge(array1, array2)).toEqual([
      1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 10,
    ]);
  });
});

describe("mergeSort", function () {
  it("es capaz de order un arreglo por el metodo mergeSort", function () {
    let array = [2, 8, 5, 3, 1, 4, 9, 7, 6];
    expect(mergeSort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
