const n1 = [1, 2, 3, 4, 5];
const n2 = ['a', 'b', 'c', 'd', 'e'];

function merge(arr1, arr2) {
  const total = [];
  for (let i = 0; i < arr1.length; i++) {
    total.push(arr1[i], arr2[i]);
  }
  return total;
}
console.log(merge(n1, n2));

function merge2(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}
console.log(merge2(n1, n2));
