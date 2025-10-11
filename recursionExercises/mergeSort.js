// Sort right half
// Sort left half
// Merge sorted halves


function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } 

    const first_half = array.slice(0, array.length / 2);
    const second_half = array.slice(array.length / 2, array.length)

    const first_sort = mergeSort(first_half);
    const second_sort = mergeSort(second_half);

    let result = [];

    let f = 0;
    let s = 0;

    while (f < first_sort.length && s < second_sort.length) {
     if (first_sort[f] <= second_sort[s]) {
      result.push(first_sort[f]);
      f++;
     } else if (second_sort[s] < first_sort[f]) {
      result.push(second_sort[s]);
      s++;
     }
    }

    while (s < second_sort.length) {
      result.push(second_sort[s]);
      s++;
    }

    while (f < first_sort.length) {
      result.push(first_sort[f]);
      f++;
    }

  return result;
}


console.log(mergeSort([]));
console.log(mergeSort([72]));
console.log(mergeSort([2, 1, 3]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([73, 11, 105, 9, 20, 54, 33, 5]));