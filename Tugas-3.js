// Arrow function
let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  
  // mem filter data array
  let data = dataArray.filter((value) => {
    return value >= nilaiAwal && value <= nilaiAkhir
  })

  // pengkondisian
  if(nilaiAwal > nilaiAkhir) {
    console.log('Nilai akhir harus lebih besar dari nilai awal');
  } else if( dataArray.length <= 5) {
    console.log('Jumlah angka dalam data array tidak ada');
  } else {
    
    // mengurutkan dari data yg paling kecil
    console.log(data.sort((a,b) => a-b));

  }
};

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);


