// Javascript build in function

//1. join() mengubah array menjadi string
let arr = [1, 2, 3, 4, 5];
const arrJoin = arr.join();
console.log(typeof arrJoin);

//2. sort() mengurutkan sebuah array
let arr2 = [2, 5, 7, 3, 9, 6, 1];
console.log(arr2.sort());

//3. reverse() membalik isi array
let arr3 = ["Javascript", "Mantap"];
let reverseArr = arr3.reverse();
console.log(reverseArr);

//4. map() looping isi array
let data = [
  {
    name: "Muhammad",
    lastName: "Naldi",
  },
  {
    name: "Rick",
    lastName: "Sanchez",
  },
  {
    name: "Morty",
    lastName: "Smith",
  },
];

let namaLengkap = data.map((value, index) => {
  return {
    fullName: `${value.name} ${value.lastName}`,
  };
});
console.log(namaLengkap);

// 5. filter() mem filter isi Array
let age = [20, 14, 64, 18, 3, 51, 62, 22, 31];
let filter = age.filter((value, index) => {
  return value >= 30;
});
console.log(filter);

//6. length() menghitung panjang dari sebuah string
let myName = "Muhammad Naldi";
console.log(myName.length);

//7. toLowerCase() membuat text menjadi tulisan kecil
console.log(myName.toLowerCase());

//8. toUpperCase() membuat text menjadi huruf kapital
console.log(myName.toUpperCase());

// 9. pop() menghapus element terakhir dari sebuah array
let number = [1, 2, 3, 4, 5];
number.pop();
console.log(number);

// 10. push() menambah element baru pada akhir index array
let number2 = [5, 6, 7, 8, 9];
number2.push(10);
console.log(number2);
