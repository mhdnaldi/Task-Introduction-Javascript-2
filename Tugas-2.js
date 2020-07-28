// deklarasikan variabel array
let name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deidre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

// mengubah semua nama ke lowercase
name = name.map((value) => {
  return value.toLowerCase();
});

// Arrow Function
searchName = (str, limit, callbackFunction) => {
  // merubah str yang di input menjadi lowercase
  str = str.toLowerCase()
  
  // mengambil data sesuai dengan string yang diketik
  let pattern = str;
  let data = name.filter((value) => {
    return value.includes(pattern);
  });

  // untuk mengambil data sesuai limitnya
  let data2 = data.slice(0, limit);

  // callback
  callbackFunction(data2);
};

// callback function utk mengoutput kan data dari searchName
function callbackFunction(data2) {
  console.log(data2);
}

searchName("An", 4, callbackFunction);
